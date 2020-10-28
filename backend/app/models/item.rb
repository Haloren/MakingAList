class Item < ApplicationRecord
  belongs_to :list

  validates :content, presence: true, uniqueness: true, length: {minimum: 1, maximum: 30}
end
