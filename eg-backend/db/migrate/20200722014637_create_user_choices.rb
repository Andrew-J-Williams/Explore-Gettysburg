class CreateUserChoices < ActiveRecord::Migration[6.0]
  def change
    create_table :user_choices do |t|
      t.string :user_input
      t.integer :user_id
      t.integer :event_id
      t.integer :scenario_id

      t.timestamps
    end
  end
end
