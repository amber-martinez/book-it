class List < ApplicationRecord
    belongs_to :user
    belongs_to :theme

    validates :title, :user_id, :theme_id, presence: true
end
