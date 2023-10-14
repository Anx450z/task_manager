class Task < ApplicationRecord
  validates :title, presence: true, uniqueness: true
  belongs_to :container
end
