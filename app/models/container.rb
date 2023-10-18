class Container < ApplicationRecord
  validates :tag, presence: true, uniqueness: { scope: :user_id }
  belongs_to :user
  has_many :tasks, dependent: :destroy
  enum :color, { gray: 0, blue: 1, green: 2, red: 3, yellow: 4, purple: 5, lime: 6, navy: 7, olive: 8 }
end
