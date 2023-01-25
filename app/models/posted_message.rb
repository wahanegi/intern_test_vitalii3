class PostedMessage < ApplicationRecord
  belongs_to :user

  validates :content, presence: true, length: {maximum: 255}
  has_rich_text :content
end

