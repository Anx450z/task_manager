class Container < ApplicationRecord
  validates :tag, presence: true, uniqueness: { scope: :user_id }
  belongs_to :user
  has_many :tasks, dependent: :destroy
end
