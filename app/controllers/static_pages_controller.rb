class StaticPagesController < ApplicationController
  def home
    if user_signed_in?
      @postedmessages = current_user.postedmessages
      @feed_items = current_user.feed
    end
    #debugger
  end
end
