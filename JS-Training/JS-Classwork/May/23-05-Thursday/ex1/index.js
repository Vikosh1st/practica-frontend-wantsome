import {users} from "./usersModule.js";
import {books} from "./usersModule.js";

users
.then((data) => data.filter((item) => item.id > 5))
.then((data) => data.map((item) => `username: ${item.username}, city: ${item.address.city}`))
.then((response) => console.log(response))

books
.then((data) => data.items.filter((item) => item.volumeInfo.pageCount > 230))
.then((response) => console.log(response))