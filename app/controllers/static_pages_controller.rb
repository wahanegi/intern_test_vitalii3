class StaticPagesController < ApplicationController
  def home
    @feed_full =  PostedMessage.order(id: :desc)
  end
end
