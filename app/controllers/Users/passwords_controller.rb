# frozen_string_literal: true
class Users::PasswordsController < Devise::PasswordsController
  include ControllersFunctions

  # GET /resource/password/new
  def new
    @user = User.new
  end

  # POST /resource/password
  def create
    @user = User.send_reset_password_instructions(resource_params)
    yield @user if block_given?
    send_instruction_with_notice(@user, false, home_path, new_user_registration_path)

  end

  # GET /resource/password/edit?reset_password_token=abcdef
  # def edit
  #   super
  # end

  # PUT /resource/password
  # def update
  #   super
  # end

  # protected

  # def after_resetting_password_path_for(resource)
  #   super(resource)
  # end

  # The path used after sending reset password instructions
  # def after_sending_reset_password_instructions_path_for(resource_name)
  #   super(resource_name)
  # end
end
