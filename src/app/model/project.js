'use strict'

const mongoosePaginate = require('mongoose-paginate')

const mongoose = require('../../database/index')

const ProjectSchema = new mongoose.Schema({

  title: {
    type: String,
    require: true,
  },

  description: {
    type: String,
    require: true,
  },

  // [Pertence]

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    require: true,
  },

  // [Multi Tasks]

  tasks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Task',
  }],

  createAt: {
    type: Date,
    default: Date.now,
  },
})

ProjectSchema.plugin(mongoosePaginate)

const Project = mongoose.model('Project', ProjectSchema)

module.exports = Project