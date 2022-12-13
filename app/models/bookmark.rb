class Bookmark < ApplicationRecord
    belongs_to :user
    belongs_to :list

    validates :name, :link, presence: true
end
