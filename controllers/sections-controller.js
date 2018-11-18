const knex = require('../db/knex/knex')

module.exports = {
  all: function (req, res) {
    knex('sections')
      .select('*')
      .then(data => res.status(200).json({ data, result: 'success' }))
      .catch(err => res.status(400).json(err))
  },

  create: function (req, res, next) {
    const { title, boardId } = req.body

    if ((typeof title !== 'undefined') & (typeof boardId !== 'undefined')) {
      knex('sections')
        .insert(req.body)
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
    knex('sections')
      .select('*')
      .where({ id: req.params.id })
      .then(data => {
        res.status(200).json({ data, result: 'success' })
      })
      .catch(err => res.status(400).json(err))
  },

  update: function (req, res) {
    knex('sections')
      .update(req.body.update)
      .where({ id: req.params.id })
      .then(res.status(200).json({ result: 'success' }))
      .catch(err => res.status(400).json(err))
  },

  destroy: function (req, res) {
    knex('sections')
      .delete()
      .where({ id: req.params.id })
      .then(res.status(200).json({ result: 'success' }))
      .catch(res.status(400).json)
  }
}
