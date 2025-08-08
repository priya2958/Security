const users = [
  {
    id: 1,
    username: "admin",
    password: "$2a$10$Q9Q9Q9Q9Q9Q9Q9Q9Q9Q9QeQ9Q9Q9Q9Q9Q9Q9Q9Q9Q9Q9Q9Q9Q9Q", // bcrypt hash for 'adminpass'
    role: "admin",
  },
  {
    id: 2,
    username: "user",
    password: "$2a$10$Q9Q9Q9Q9Q9Q9Q9Q9Q9Q9QeQ9Q9Q9Q9Q9Q9Q9Q9Q9Q9Q9Q9Q9Q9Q", // bcrypt hash for 'userpass'
    role: "user",
  },
];

export default users;
