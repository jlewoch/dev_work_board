const knex = require('../db/knex/knex')

module.exports = {
  all: function (req, res) {
    knex('boards')
      .select('*')
      .then(async data => {
        res.status(200).json({ data, result: 'success' })
      })
      .catch(err => res.status(400).json(err))
  },

  create: function (req, res) {
    const title = req.body
    if (typeof title !== 'undefined') {
      console.log('good')

      knex('boards')
        .insert(title)
        .then(data => res.status(200).json({ data, result: 'success' }))
        .catch(err => res.status(400).json(err))
    } else {
      res.status(400).json({
        result: 'error',
        msg: 'Please fill required details'
      })
    }
  },

  get: function (req, res) {
    knex('boards')
      .select('*')
      .where({ id: req.params.id })
      .then(async data => {
        res.status(200).json({ data, result: 'success' })
      })
      .catch(err => res.status(400).json(err))
  },

  update: function (req, res) {
    knex('boards')
      .update(req.body.update)
      .where({ id: req.params.id })
      .then(res.status(200).json({ result: 'success' }))
      .catch(err => res.status(400).json(err))
  },

  destroy: function (req, res) {
    knex('boards')
      .delete()
      .where({ id: req.params.id })
      .then(res.status(200).json({ result: 'success' }))
      .catch(res.status(400).json)
  }
}
