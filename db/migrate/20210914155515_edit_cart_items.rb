class EditCartItems < ActiveRecord::Migration[6.1]
  def change
    add_column :shopping_carts, :quantity, :integer
  end
end
