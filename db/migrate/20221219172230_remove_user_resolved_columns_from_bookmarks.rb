class RemoveUserResolvedColumnsFromBookmarks < ActiveRecord::Migration[6.1]
  def change
    remove_column :bookmarks, :user_id
    remove_column :bookmarks, :resolved
  end
end
