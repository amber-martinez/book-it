class CreateThemes < ActiveRecord::Migration[6.1]
  def change
    create_table :themes do |t|
      t.string :prim_color
      t.string :sec_color
      t.string :bullet_icon

      t.timestamps
    end
  end
end
