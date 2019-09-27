class Court < ApplicationRecord
  mount_uploader :court_photo, CourtPhotoUploader

  validates :name, presence: true
  validates :street, presence: true
  validates :city, presence: true
  validates :state, presence: true
  validates :country, presence: true
  has_many :reviews

  def address
    [street, city, state, country].compact.join(', ')
  end

  def self.search(search)
    where("name ILIKE ?", "%#{search}%")
  end

  geocoded_by :address
  after_validation :geocode
end
