# frozen_string_literal: true

class Users::SessionsController < Devise::SessionsController
  before_action :configure_sign_in_params, only: :create
  # prepend_before_action :user_signed_in?, only: :destroy


  # GET /resource/sign_in
  def new
    self.resource = User.new(sign_in_params)
    # clean_up_passwords(resource)
    # yield resource if block_given?
    # respond_with(resource, serialize_options(resource))
  end

  # POST /resource/sign_in
  def create
    password_valid = (@user = User.find_by(email: sign_in_params[:email])) ?
                       @user.valid_password?(sign_in_params[:password])
                       : false

    if  @user && password_valid && @user.confirmed?
      flash[:notice] = "Welcome to our GIGGLE-💪I🤫🤣🦶👍. Now you can to create own like-twitter-messages(only funny) and divide it with your friends"
      user_signed_in? ## help for protect and allow to entrance after login
      redirect_to home_path
    else
      @user && password_valid ?
        redirect_to( user_session_path, notice: " Account not activated 😳. Please verify letter activation on your email or resend confirm instruction🔄" )
        : redirect_to( user_session_path, dark: " YOUR EMAIL and PASSWORD ARE WRONG. PLEASE TYPE IT CORRECTLY" )
    end
  end

  # DELETE /resource/TODO sign_out
  def destroy
    if user_signed_in?
      session.destroy
      redirect_to home_path
    end
  end

  protected

  # If you have extra params to permit, append them to the sanitizer.
  def configure_sign_in_params
    devise_parameter_sanitizer.permit(:sign_in, keys: [:email, :password])
  end
end
