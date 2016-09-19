class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :username, null: false
      t.string :password_digest
      t.string :cohort, null: false
      t.boolean :admin, default: false
      t.timestamps
    end
  end
end
