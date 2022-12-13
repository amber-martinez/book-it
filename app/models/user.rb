class User < ApplicationRecord
    has_secure_password

    has_many :lists 
    has_many :themes, through: :lists

    validates :name, :username, :password_digest, presence: true 
    validates :username, password_digest, length: { minimum: 8 }
end
