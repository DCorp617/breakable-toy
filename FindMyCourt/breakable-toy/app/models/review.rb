class Review < ApplicationRecord
  belongs_to :user
  belongs_to :court
  validates :description, presence: true
  validates :user_id, presence: true
end
