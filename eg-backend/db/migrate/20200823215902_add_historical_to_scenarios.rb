class AddHistoricalToScenarios < ActiveRecord::Migration[6.0]
  def change
    add_column :scenarios, :historical_one, :string
    add_column :scenarios, :historical_two, :string
  end
end
