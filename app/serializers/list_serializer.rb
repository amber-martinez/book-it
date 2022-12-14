class ListSerializer < ActiveModel::Serializer
  attributes :id, :title, :theme, :bookmarks

  belongs_to :theme
  has_many :bookmarks
end
