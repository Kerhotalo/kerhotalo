import mongoose from 'mongoose'
import userSchema from './userSchema'

module.exports = mongoose.model('user', userSchema)