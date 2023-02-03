# frozen_string_literal: true

class ApiController< ApplicationController
  include ActionView::Helpers::DateHelper
  include UsersHelper
  include StaticPagesHelper
  def json
    # debugger
    @feed_full =  PostedMessage.order(id: :desc)
    if @feed_full.length === validate_request[:count]
      render( :json => {new_messages: 0})
    else
      data = []
      @feed_full.each do |value|
        user = seek_user(value.user_id)
        data.push( {
          id_posted: value.id,
          gravatar_url: gravatar_url(user),
          user_name: user.name,
          user_email: user.email,
          created_at_in_words: distance_of_time_in_words_to_now(value.created_at),
          content: value.content.body,
          picture_url: value.picture.url
        })
      end
      render( :json => {data: data})
    end
  end

  private
  def validate_request
    params.require(:json).permit(:count)
  end

end

