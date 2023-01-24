class StaticPagesController < ApplicationController
  def home
    @feed_full = current_user.feed if user_signed_in?
  end
end
