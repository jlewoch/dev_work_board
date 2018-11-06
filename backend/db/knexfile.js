// Update with your config settings.

module.exports = {
  development: {
    client: 'mysql2',
    connection: {
      host: 'localhost',
      port: '3306',
      user: 'jlewoch',
      password: 'Dragons21',
      database: 'workboard'
    }
  },
  pool: { min: 0, max: 7 }
}
