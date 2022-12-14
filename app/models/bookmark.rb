class Bookmark < ApplicationRecord
    belongs_to :list

    validates :name, :link, :list_id, presence: true
end
