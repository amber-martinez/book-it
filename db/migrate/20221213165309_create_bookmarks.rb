class CreateBookmarks < ActiveRecord::Migration[6.1]
  def change
    create_table :bookmarks do |t|
      t.string :name
      t.string :link
      t.boolean :resolved
      t.integer :user_id
      t.integer :list_id

      t.timestamps
    end
  end
end
