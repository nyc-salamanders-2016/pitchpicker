class CreateProjectMembers < ActiveRecord::Migration[5.0]
  def change
    create_table :project_members do |t|
      t.references :user, null: false
      t.references :project, null: false
      t.timestamps
    end
  end
end
