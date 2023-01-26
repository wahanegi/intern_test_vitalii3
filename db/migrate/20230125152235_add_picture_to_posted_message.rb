class AddPictureToPostedMessage < ActiveRecord::Migration[7.0]
  def change
    add_column :posted_messages, :picture, :string
  end
end
