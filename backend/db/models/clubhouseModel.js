import mongoose from 'mongoose'
import clubhouseSchema from './clubhouseSchema'

module.exports = mongoose.model('clubhouse', clubhouseSchema)