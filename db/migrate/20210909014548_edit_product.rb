class EditProduct < ActiveRecord::Migration[6.1]
  def change
    add_column :products, :image, :text
  end
end
