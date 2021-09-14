class EditProductsAgains < ActiveRecord::Migration[6.1]
  def change
    add_column :products, :pages, :integer
  end
end
