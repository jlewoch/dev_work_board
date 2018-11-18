// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: `ec2-50-19-249-121.compute-1.amazonaws.com`,
      port: '5432',
      user: 'vnzkjdgqnhyimo',
      password: '6d7d790a69c39f416f1d6972702149a8307b56f5948e09de3731a077253f1616',
      database: 'd312agjdj2q57l'
    }
  },
  production: {
    client: 'pg',
    connection: {
      host: `ec2-50-19-249-121.compute-1.amazonaws.com`,
      port: '5432',
      user: 'vnzkjdgqnhyimo',
      password: '6d7d790a69c39f416f1d6972702149a8307b56f5948e09de3731a077253f1616',
      database: 'd312agjdj2q57l'
    }
  },
  ssl: true,
  pool: { min: 0, max: 7 }
}
