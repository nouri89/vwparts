require("dotenv").config();
const { Pool } = require("pg");

// const devConfig = {
//     user:process.env.PGUSER,
//     host:process.env.PGHOST,
//     password:process.env.PGPASSWORD,
//     database:process.env.PGDATABASE,
//     port:process.env.PGPORT

// };
const devConfig = `postgresql://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}:${process.env.PGPORT}/${process.env.PGPORT}`;

const proConfig = process.env.DATABASE_URL; //Heroku addon

const pool = new Pool({
	connectionString:
		process.env.NODE_ENV === "production" ? proConfig : devConfig,
});

module.exports = pool;
