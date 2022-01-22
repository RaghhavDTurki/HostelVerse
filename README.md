# HostelVerse
# Routes

## Admin Login
### /admin/login
#### Schema
- username: string
- password: string

### /admin/signup
#### Schema
- username: string
- password: string
- student_id: string
- name: string
- location: string
- contactno: string
- gender : string

---

## Student Login
### /student/login
#### Schema
- username: string
- password: string

### /student/signup
#### Schema
- username: string
- password: string
- student_id: string
- name: string
- location: string
- contactno: string
- gender : string

---

## Warden Login
### /warden/login
#### Schema
- username: string
- password: string

---

## Admin Create
### /admin/createWardenAccount
#### Schema
- email : string
- password : string
- wardenid : string
- name : string
- hostelid : string
- contactno : string
- gender : string

### /admin/createhostel
#### Schema
- hostelid : string
- name : string
- location : string
- wardenid : string
- totalrooms : string
- roomsleft : string

### /admin/createroom
#### Schema
- hostelid : string
- roomno : string

---

## Profile
### /student/profile
#### Schema
- email : string

### /warden/profile
#### Schema
- email : string

### /admin/profile
#### Schema
- email : string

---