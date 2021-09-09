class Helpful < ApplicationRecord

    belongs_to: :user,
        foreign_key: :user_id,
        class_name: :User

    belongs_to: :review,
        foreign_key: :review_id,
        class_name: :Review

end
