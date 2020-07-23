class Event < ApplicationRecord
    has_many :scenarios
    has_many :user_choices
    has_many :comments
end
