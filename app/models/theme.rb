class Theme < ApplicationRecord
    has_many :lists
    has_many :users, through: :lists

    validates :prim_color, :sec_color, :bullet_icon, presence: :true, on: :create_table
    validates :bullet_icon, length: { is: 1 }
end
