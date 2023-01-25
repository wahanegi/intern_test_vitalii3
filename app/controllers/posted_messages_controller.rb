class PostedMessagesController < ApplicationController
  before_action :authenticate, only: [:create, :new]
  def new
    @message = PostedMessage.new
  end

  def create
    @message= current_user.posted_message.build(valid_data)
    #######################################################################################
    # in this section should be add some logical for validation of rules moral politics etc.
    moral = true
    ########################################################################################

    if @message.save && moral
      flash[:notice] = "Congratulations. Your message was posted on  our famous GIGGLE-platform 💪I🤫🤣🦶👍"
      redirect_to home_path
    else
      flash.now[:dark] = "Unfortunately 🙈, your message didn't approve our moral politics and other validation. See agreements"
      respond_err_with_json @message
    end
  end

  def show

  end

  protected
  def valid_data
    params.require(:posted_message).permit(:content)
  end
  def authenticate
    !current_user.nil?
  end
end
