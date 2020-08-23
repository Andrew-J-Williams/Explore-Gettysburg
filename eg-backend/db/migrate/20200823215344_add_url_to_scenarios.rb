class AddUrlToScenarios < ActiveRecord::Migration[6.0]
  def change
    add_column :scenarios, :url, :string
  end
end
