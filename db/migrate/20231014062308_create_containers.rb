class CreateContainers < ActiveRecord::Migration[7.0]
  def change
    create_table :containers do |t|
      t.text :tag, null: false, unique: true
      t.belongs_to :user

      t.timestamps
    end
  end
end
