class CreateEvents < ActiveRecord::Migration[6.0]
  def change
    create_table :events do |t|
      t.string :name
      t.text :description
      t.string :date
      t.string :union_leader
      t.string :confederate_leader
      t.integer :union_army
      t.integer :confederate_army

      t.timestamps
    end
  end
end
