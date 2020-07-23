class Scenario < ApplicationRecord
    belongs_to :event
    has_many :user_choices
end
