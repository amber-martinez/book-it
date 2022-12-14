class User < ApplicationRecord
    has_secure_password

    has_many :lists 
    has_many :themes, through: :lists

    validates :name, :username, :password_digest, presence: true, on: :create
    validates :username, uniqueness: true, on: :create

    validates :password_digest, length: { minimum: 8 }, on: :create

    validates :username, length: { minimum: 8 }
end
