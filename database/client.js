const { Client } = require("pg")
const client = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "12345",
  database: "deneme",
});

client.connect();

var create = `
  create table Users(id int generated ALWAYS as identity(start with 101 increment by 1) primary key, userName varchar(255), email varchar(255) CHECK (email ~ '^[a-zA-Z0-9.!#$%&''*+/=?^_``{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$') )
`;

client.query(create, function(err, res) {
  if (!err) {
    console.log(res.rows, ("table created"));
  } else {
    console.log(err.message, "table could not create");
  }
});

var sql = "insert into users (userName, email) values('ersin','yildirim@gmail.com')";

client.query(sql, function(err, res) {
  if (!err) {
    console.log(res.rows, "1 record inserted");
  } else {
    console.log(err.message);
  }
});

client.query("select * from Users", (err, res) => {
  if (!err) {
    console.log(res.rows, "Users");
  } else {
    console.log(err.message);
  }

  client.query("drop table Users", (err, res) => {
    if (!err) {
      console.log(res.rows, "Table dropped")
    } else {
      console.log(err.message, "table could not dropped");
    }
  });
  client.end;
});
