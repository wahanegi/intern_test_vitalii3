class ApplicationController < ActionController::Base
  add_flash_types :light
  add_flash_types :dark
  protect_from_forgery with: :exception
  #respond if error in HTML & JSON formats
  # obj - object with errors
  def respond_err_with_json(obj)
    respond_to do |format|
      format.html { render :new, status: :unprocessable_entity }
      format.json { render json: obj.errors, status: :unprocessable_entity }
    end
  end
  #respond in HTML & JSON formats
  # path - where to go
  # info - notice for user
  def success_respond_with_json(path, info)
    respond_to do |format|
      format.html { redirect_to path, notice: info}
      format.json { render  status: 200 }
    end
  end


end
