class Message < ApplicationRecord
  belongs_to :user_id
  belongs_to :group_id

  validates :content, presence: true, unless: :image?
  mount_uploader :image, ImageUploader
end
