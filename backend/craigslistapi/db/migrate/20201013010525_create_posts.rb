class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.string :description
      t.string :image
      t.belongs_to :user
      t.timestamps
    end
  end
end
