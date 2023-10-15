class Task < ApplicationRecord
  validates :title, presence: true, uniqueness: true
  belongs_to :container
  enum :status, { pending: 0, in_progress: 1, completed: 2, expired: 3 }
end
