import { pool } from './pool.js';

pool.query("insert into users(username, email) values('ersin', 'yildirim@gmail.com')", (err, res) => {
    if (!err) {
     console.log(res.rows, '1 record inserted');
    } else {
      console.log(err.message);
    }
  });

pool.query("select * from users",  (err, res) => {
    if (!err) {
     console.log(res.rows, "Users");
    } else {
      throw new Error(err); 
    }
  });


pool.query("UPDATE users SET completed_at=NOW(), username='Ersin' where username='ersin';", (err, res) => {
  if (!err) {
   console.log(res.rows, "Users updated");
  } else {
    throw new Error(err);
  }
});

pool.query("select * from users", (err, res) => {
  if (!err) {
    console.log(res.rows, "updated users");
  } else {
    throw new Error(err); 
  }
});

pool.query('drop table users', (err, res) => {
  if (!err) {
   console.log(res.rows, "Table dropped");
  } else {
    throw new Error(err);
  }
});