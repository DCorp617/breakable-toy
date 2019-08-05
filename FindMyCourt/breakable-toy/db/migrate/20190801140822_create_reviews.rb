class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.belongs_to :user, null: false
      t.text :description, null: false
      t.integer :rating, null: false

      t.timestamps
    end
  end
end
