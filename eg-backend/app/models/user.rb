class User < ApplicationRecord
    has_many :comments
    has_many :user_choices

    validates :username, uniqueness: true, presence: true
end
