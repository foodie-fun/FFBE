const dbConnection = process.env.DATABASE_URL;

module.exports = {
    development: {
      client: 'sqlite3',
      useNullAsDefault: true,
      connection: {
        filename: './data/food.db3',
      },
      pool: {
        afterCreate: (conn, done) => {
          conn.run('PRAGMA foreign_keys = ON', done);
        },
      },
      migrations: {
        directory: './data/migrations',
      },
      seeds: {
        directory: './data/seeds',
      },
    },

    production: {
      client: 'pg',
      connection: dbConnection,
      migrations: {
        directory: './data/migrations',
      },
      seeds: {
        directory: './data/seeds',
      },
    },
  };
  