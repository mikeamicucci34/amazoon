class CreateHelpfuls < ActiveRecord::Migration[6.1]
  def change
    create_table :helpfuls do |t|
      t.boolean :helpful, null: false
      t.integer :review_id, null: false
      t.integer :user_id, null: false

      t.timestamps
    end
    add_index :helpfuls, :review_id
    add_index :helpfuls, :user_id 
    add_index :helpfuls,  [:review_id, :user_id], unique: true
  end
end
