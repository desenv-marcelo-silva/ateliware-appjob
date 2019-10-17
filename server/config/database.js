const config = {
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  server: process.env.DATABASE_URI,
  database: process.env.DATABASE_NAME,

  options: {
    encrypt: true
  }
};
const sql = require("mssql");

async () => {
  try {
    await sql.connect(config);
    const result = await sql.query`select getdate()`;
    console.dir(result);
  } catch (err) {
    console.dir(err);
  }
};
