class AddColorToContainers < ActiveRecord::Migration[7.1]
  def change
    add_column :containers, :color, :integer, default: 0
  end
end
