# frozen_string_literal: true

class ApiController< ApplicationController
  def json
    @feed_full =  PostedMessage.order(id: :desc)
    render :json => @feed_full
  end

end

