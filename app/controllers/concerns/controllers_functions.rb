# frozen_string_literal: true

module ControllersFunctions
  #send letter with instruction reset password(confirm_reset=false) or confirmation(confirm_reset=true)
  def send_instruction_with_notice(resource, confirm_reset, success_path, wrong_path)
    if successfully_sent?(resource)
      flash[:notice]="Letter with confirmation instruction was send on your email successfully 😀"
      redirect_to success_path
    else
      flash[:danger]="Confirmation instruction not sent on your email because you aren't pass registrations or you was write wrong email 😟"
      redirect_to wrong_path
    end
  end


end
