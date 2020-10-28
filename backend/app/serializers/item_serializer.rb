class ItemSerializer < ActiveModel::Serializer
  attributes :id, :content
  has_one :list
end
