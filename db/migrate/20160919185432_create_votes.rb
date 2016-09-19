class CreateVotes < ActiveRecord::Migration[5.0]
  def change
    create_table :votes do |t|
      t.references :user, null: false
      t.references :project, null: false
      t.timestamps
    end
  end
end
