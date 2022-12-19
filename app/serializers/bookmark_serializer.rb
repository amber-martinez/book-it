class BookmarkSerializer < ActiveModel::Serializer
  attributes :id, :name, :link, :list_id
end
