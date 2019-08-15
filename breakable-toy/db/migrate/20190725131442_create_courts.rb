class CreateCourts < ActiveRecord::Migration[5.2]
  def change
    create_table :courts do |t|
      t.string :name, null: false
      t.string :street, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.string :country, null: false

      t.timestamps null: false
    end
  end
end
