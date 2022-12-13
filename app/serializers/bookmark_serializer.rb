class BookmarkSerializer < ActiveModel::Serializer
  attributes :id, :name, :link, :resolved, :user_id, :list_id
end
