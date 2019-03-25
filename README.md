# README

**DB設計**

 ## usersテーブル
 |Column|Type|Options|
 |------|----|-------|
 |name|string|null: false, index: true|
 |email|string|null: false, unique: true|

 ### Association
 - has_many :groups, through: :group_user
 - has_many :group_user
 - has_many :messages


 ## messagesテーブル
 |Column|Type|Options|
 |------|----|-------|
 |content|text|
 |image|text|
 |user_id|references|null: false, foreign_key: true|
 |group_id|references|null: false, foreign_key: true|

 ### Association
 - belongs_to :user
 - belongs_to :group

 ## groupsテーブル
 |Column|Type|Options|
 |------|----|-------|
 |name|string|null: false|

 ### Association
 - has_many :users, through: :group_user
 - has_many :group_user
 - has_many :messages

 ## group_userテーブル
 |Column|Type|Options|
 |------|----|-------|
 |user_id|references|foreign_key: true|
 |group_id|references|foreign_key: true|

 ### Association
 - belongs_to :user
 - belongs_to :group





