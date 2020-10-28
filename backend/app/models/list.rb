class List < ApplicationRecord
    has_many :items

    validates :name, presence: true, uniqueness: true, length: {minimum: 1, maximum: 20}
end
