class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.float :price, null: false
      t.integer :category_id, null: false

      t.timestamps
    end
    add_index :products, :title
    add_index :products, :category_id
  end
end
