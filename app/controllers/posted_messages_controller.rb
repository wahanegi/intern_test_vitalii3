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
      info = "Congratulations. Your message was posted on  our famous GIGGLE-platform 💪I🤫🤣🦶👍"
      params['react'] ?
        render( :json  => {notice: info})
        : redirect_to( home_path, notice: info)
    else
      danger = "Unfortunately 🙈, your message didn't approve our moral politics and other validation. See agreements"
      params['react'] ?
        render( :json  => {notice: danger})
        : redirect_to( home_path, notice: danger)
    end
  end

  def show

  end

  protected
  def valid_data
    params.require(:posted_message).permit(:content, :picture)
  end
  def authenticate
    !current_user.nil?
  end
end
