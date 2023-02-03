# frozen_string_literal: true

module UsersHelper

    # Give Gravatar of user.
    def gravatar_for(user, options = { size: 80 })
      gravatar_id = Digest::MD5::hexdigest(user.email.downcase)
      gravatar_url = "https://secure.gravatar.com/avatar/#{gravatar_id}"
      #slack_url = "https://ca.slack-edge.com/T03FQ0FUD-U04C2U23RPT-29857e22b3ae-256"
      image_tag(gravatar_url, alt: user.name, class: "gravatar", width: options[:size])
      #image_tag(slack_url, alt: user.name, class: "gravatar", width: options[:size])
    end

    def gravatar_url(user)
      gravatar_id = Digest::MD5::hexdigest(user.email.downcase)
      gravatar_url = "https://secure.gravatar.com/avatar/#{gravatar_id}"
    end

end
