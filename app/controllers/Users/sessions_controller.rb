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
    debugger
    if  @user && password_valid && @user.confirmed?
      info = "Welcome to our GIGGLE-💪I🤫🤣🦶👍. Now you can to create own like-twitter-messages(only funny) and divide it with your friends"
      flash[:notice] = info
      #if current_user render :json => {notice: "You are logged!", login: true}
      # TODO instead of value of token ('9fioejwihr0gj9uiep') need to use function to create digest
      # and save it in DB
      render :json => {notice: info,
                       login: true,
                       token: '9fioejwihr0gj9uiep'} if params[:user][:return_secure_token]
      redirect_to home_path unless params[:user][:return_secure_token]
    else
      notice = " Account not activated 😳. Please verify letter activation on your email or resend confirm instruction🔄"
      dark = " YOUR EMAIL and PASSWORD ARE WRONG. PLEASE TYPE IT CORRECTLY"
      if params[:user][:return_secure_token]
        @user && password_valid ?
          render(:json => {notice: notice})
          : render(:json => {danger: dark})
      else
        @user && password_valid ?
          redirect_to( user_session_path, notice: notice)
          : redirect_to( user_session_path, dark: dark)
      end
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
