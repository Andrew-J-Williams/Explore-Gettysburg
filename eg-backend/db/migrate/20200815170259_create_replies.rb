class CreateReplies < ActiveRecord::Migration[6.0]
  def change
    create_table :replies do |t|
      t.string :title
      t.text :content
      t.string :comment_name
      t.integer :user_id
      t.integer :event_id
      t.integer :comment_id
    end
  end
end
