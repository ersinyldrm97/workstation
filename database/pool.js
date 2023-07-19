import pg from 'pg';
const { Pool } = pg;

export const pool = new Pool({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: '12345',
  database: 'deneme',
  max: 5,
  idleTimeoutMillis: 1000,
  connectionTimeoutMillis: 2000
});

pool.on('error', (err) => {
  console.log(err.message);
  process.exit(-1);
});

const client = await pool.connect();
const create = `
  create table Users(
    id int GENERATED ALWAYS as IDENTITY(START WITH 101 INCREMENT BY 1) PRIMARY KEY,
    username varchar(255),
    email varchar(255),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    completed_at TIMESTAMPTZ
  )`;

function createTable() {
  return Promise.resolve(client.query(create, function(err, res) {
    if (!err) {
      console.log(res.rows, 'Table created!');
    } else {
      throw new Error(err);
    }
  }));
}

createTable()

// const create = `
//   create table Users(
//     id int GENERATED ALWAYS as IDENTITY(START WITH 101 INCREMENT BY 1) PRIMARY KEY,
//     username varchar(255),
//     email varchar(255),
//     created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
//     updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
//     completed_at TIMESTAMPTZ
//   )`;
// 
// client.query(create, function (err, res) {
//   if (!err) {
//     console.log(res.rows, ("table created!"));
//   } else {
//     throw new Error(err);
//   }
// });

client.release()


