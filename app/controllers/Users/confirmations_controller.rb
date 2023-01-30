# frozen_string_literal: true

class Users::ConfirmationsController < Devise::ConfirmationsController
  # GET /resource/confirmation/new
  def new
    @user = User.new
  end

  # POST /resource/confirmation
  def create
    is_react = resource_params['return_secure_token'] ? true : false
    self.resource = resource_class.send_confirmation_instructions(resource_params)
    yield resource if block_given?
    if successfully_sent?(resource)
      info ="Letter with instruction was send successfully 😀"
      if is_react
        render :json => {notice: info}, status:200
      else
        flash[:notice] = info
      respond_with({}, location: after_resending_confirmation_instructions_path_for(resource_name))
        end
    else
      info="Email not sent because you aren't pass registrations"
      if is_react
        render :json => {danger: info}
      else
        flash[:danger] = info
      redirect_to new_user_registration_path
    end
    end
    end

  # GET /resource/confirmation?confirmation_token=abcdef
  # def show
  #   super
  # end

  protected


  # The path used after resending confirmation instructions.
  # def after_resending_confirmation_instructions_path_for(resource_name)
  #   super(resource_name)
  # end

  # The path used after confirmation.
  # def after_confirmation_path_for(resource_name, resource)
  #   super(resource_name, resource)
  # end
end
