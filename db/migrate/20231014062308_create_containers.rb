class CreateContainers < ActiveRecord::Migration[7.0]
  def change
    create_table :containers do |t|
      t.text :tag, null: false
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
