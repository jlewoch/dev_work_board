// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://qfahlytiadskfm:114dc1f043b529da069016c11d4d18bf27ae06b906f7515364c90d3194be5659@ec2-50-19-249-121.compute-1.amazonaws.com:5432/d312agjdj2q57l'
  },
  production: {
    client: 'pg',
    connection: 'postgres://qfahlytiadskfm:114dc1f043b529da069016c11d4d18bf27ae06b906f7515364c90d3194be5659@ec2-50-19-249-121.compute-1.amazonaws.com:5432/d312agjdj2q57l'
  },

  ssl: true,
  pool: { min: 0, max: 7 }
}
