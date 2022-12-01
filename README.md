
# Coding Profile Manager

This project is develop to integrate the profile data of leetcode, codechef and codeforces at one place with other more features.
like user can make the  a single profile, which contain the data from the leetcode,codechef and codeforces so that user can share/show case single profile after this no need to share the different platform
profile link.

User can also make a friend list to see the profile data of all friends 
at one place. 

User can make the list of coding question solved on different coding platoform.

Coding profile Manager also provide facilities to the teacher like making the list of students to obeserve there progress and sortlisting of student according to the profile data like on the basis of 
stars ,rating, rank etc






## API Reference

### Profile info
#### Base URL
```http
https://competeapi.vercel.app/user/
```


#### Request Format
```http
https://competeapi.vercel.app/user/<platform>/<username>/
```


#### Example URL
https://competeapi.vercel.app/user/codechef/vivek9919/

https://competeapi.vercel.app/user/codeforces/vivek9919/

https://competeapi.vercel.app/user/leetcode/vivek9919/

#### Platforms Available
* Leetcode
* Codechef
* Codeforces


### Upcoming Contests info
#### Base URL
```http
 https://competeapi.vercel.app/contests/upcoming/
```
#### Request Format
https://competeapi.vercel.app/contests/upcoming/


## Run Locally

Clone the project

```bash
  git clone https://github.com/vivekkumar9919/Coding-Profile-manager
```

Go to the project directory


```bash
  cd Backend
```

Install dependencies

```bash
  npm install
```

Start Backend  server

```bash
  npm start
```
Go to the project directory


```bash
  cd frontend
```

Install dependencies

```bash
  npm install
```

Start Frontend 

```bash
  npm run serve
```


##  Dependencies Used
### Frontend
```bash
  npm install -S vue-router@3
```

```bash
  npm install vuex@3
```
```bash
  npm install axios
```
```bash
  npm i vue-typed-js
```
### Backend
```bash
  npm i cors
```
```bash
  npm i dotenv
```
```bash
  npm install express --save
```
```bash
  npm install mongoose
```



## Tech Stack

**Client:** HTML , CSS , Bootstrap , JavaScript ,VueJs

**Server:** Node, Express

**Database:** Mongodb

## Live link
https://coding-profile-manager.onrender.com

