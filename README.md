Backend for Stash.It Build Week Application

| Method       | Enpoint           | Action  | Front-end Request | Backend Response
| ------------- |:-------------:| -----:|:-------------:|:-------------:|
| POST    | '/register'  | Signup | {username: String, password: String} | {token: String, username: String, user_id: Integer}
| POST     | '/login'     |   Log In | {username: String, password: String}| {username: String, password: String} | {token: String, username: String, user_id: Integer}
| GET | '/users/id/tabs'     |  Load User's Tabs | user_id: Integer | tabs: [Tab:Object]
| POST |'/tabs'  | Add New Tab | {tab: String, description: String, user_id: Integer} | updatedTabs: [Tab:Object]
| PUT | 'tabs/id' |  Update Tab | {tab: String, description: String, user_id: Integer} |updatedTabs: [Tab:Object]
| DELETE | 'tabs/id' | DELETE Tab | tabId: Integer | updatedTabs: [Tab:Object]
