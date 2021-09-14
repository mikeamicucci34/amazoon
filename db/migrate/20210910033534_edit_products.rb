class EditProducts < ActiveRecord::Migration[6.1]
  def change
    add_column :products, :author, :string, null: false
    remove_column :products, :image
  end
end
