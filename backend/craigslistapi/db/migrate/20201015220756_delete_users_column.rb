class DeleteUsersColumn < ActiveRecord::Migration[6.0]
  def change
    remove_column :users, :name
    remove_column :users, :username
  end
end
