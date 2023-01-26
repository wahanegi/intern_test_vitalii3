# frozen_string_literal: true

class Users::ConfirmationsController < Devise::ConfirmationsController
  # GET /resource/confirmation/new
  def new
    @user = User.new
  end

  # POST /resource/confirmation
  def create
    self.resource = resource_class.send_confirmation_instructions(resource_params)
    yield resource if block_given?
    if successfully_sent?(resource)
      flash[:notice]="Letter with instruction was send successfully 😀"
      respond_with({}, location: after_resending_confirmation_instructions_path_for(resource_name))
    else
      flash[:danger]="Email not sent because you aren't pass registrations"
      redirect_to new_user_registration_path
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
