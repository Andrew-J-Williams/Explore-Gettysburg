class CreateScenarios < ActiveRecord::Migration[6.0]
  def change
    create_table :scenarios do |t|
      t.string :description
      t.string :option_one
      t.string :option_two
      t.text :answer_one
      t.text :answer_two
      t.integer :event_id

      t.timestamps
    end
  end
end
