class CreateTasks < ActiveRecord::Migration[7.0]
  def change
    create_table :tasks do |t|
      t.text :title, null: false
      t.text :description
      t.belongs_to :container

      t.timestamps
    end
  end
end
