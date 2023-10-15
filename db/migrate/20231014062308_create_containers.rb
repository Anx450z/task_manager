class CreateContainers < ActiveRecord::Migration[7.0]
  def change
    create_table :containers do |t|
      t.text :tag, null: false
      t.belongs_to :user

      t.timestamps
    end
    add_index :containers, [:tag, :user_id], unique: true
  end
end
