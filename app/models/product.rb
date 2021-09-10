class Product < ApplicationRecord

    belongs_to :category,
        foreign_key: :category_id,
        class_name: :Category,
        optional: true

    has_many :reviews,
        foreign_key: :review_id,
        class_name: :Review

    belongs_to :shopping_cart,
        foreign_key: :product_id,
        class_name: :ShoppingCart,
        optional: true

    has_one_attached :photo

    
end
