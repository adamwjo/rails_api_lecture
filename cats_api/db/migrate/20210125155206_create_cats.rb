class CreateCats < ActiveRecord::Migration[6.0]
  def change
    create_table :cats do |t|
      t.string :name
      t.string :breed
      t.string :image
      t.integer :fluffiness
      t.timestamps
    end
  end
end
