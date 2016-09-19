class CreateRankings < ActiveRecord::Migration[5.0]
  def change
    create_table :rankings do |t|
      t.integer :rank, null: false
      t.references :user, null: false
      t.references :project, null: false
      t.timestamps
    end
  end
end
