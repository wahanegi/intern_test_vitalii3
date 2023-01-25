class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable, :confirmable,
         :recoverable, :rememberable, :validatable

  validates :name, presence: true, length:{minimum:2, maximum:20 }
  has_many :posted_message


  #have all messages in DESC order
  def feed
    records = PostedMessage.order(id: :desc)
  end

  # finding information about user


  def confirmed?
    !confirmed_at.nil?
  end
end
