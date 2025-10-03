const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "nyako",
  waitForConnections: true,
  connectionLimit: 10,
  multipleStatements: false,
});

exports.exec = async (sql, params = []) => {
  const conn = await pool.getConnection();
  try {
    const [rows] = await conn.execute(sql, params); // parameterized
    return rows;
  } finally {
    conn.release();
  }
};
