class PostedMessage < ApplicationRecord
  belongs_to :user

  validates :content, presence: true, length: {maximum: 255}
  has_rich_text :content
  mount_uploader :picture, PictureUploader
  validate :picture_size

  private
  # Verify size of downloaded an image
  def picture_size
    if picture.size > 5.megabytes
      errors.add(:picture, "should be less than 5MB")
      return false
    end
  end
end

