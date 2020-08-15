class Reply < ApplicationRecord
    belongs_to :user
    belongs_to :event
    belongs_to :comment
end