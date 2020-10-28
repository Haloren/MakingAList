class ItemSerializer < ActiveModel::Serializer
  attributes :id, :content, :list_id
  belongs_to :list
end
