class CreatePostedMessages < ActiveRecord::Migration[7.0]
  def change
    create_table :posted_messages do |t|
      t.text :content
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
