class UserChoice < ApplicationRecord
    belongs_to :user
    belongs_to :event
    belongs_to :scenario
end
