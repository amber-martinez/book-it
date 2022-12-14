class ListSerializer < ActiveModel::Serializer
  attributes :id, :title, :theme

  belongs_to :theme
end
