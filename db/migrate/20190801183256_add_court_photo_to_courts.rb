class AddCourtPhotoToCourts < ActiveRecord::Migration[5.2]
  def change
    add_column :courts, :court_photo, :string
  end
end
