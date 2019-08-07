class AddCourtsToReview < ActiveRecord::Migration[5.2]
  def change
    add_reference :reviews, :court, null: false
  end
end
