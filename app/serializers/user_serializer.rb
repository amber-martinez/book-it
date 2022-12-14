class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :lists, :themes

  has_many :lists
  has_many :themes, through: :lists
end
