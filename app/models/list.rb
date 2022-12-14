class List < ApplicationRecord
    belongs_to :user
    belongs_to :theme
    has_many :bookmarks

    validates :title, :user_id, :theme_id, presence: true
end
