let userInfo = process.argv.slice(2);

let data = {};

// [userId, username, email, age, firstName, lastName]
[, data.username, data.email] = userInfo;

console.log(data);