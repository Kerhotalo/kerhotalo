import mongoose from 'mongoose'
import emailVerificationSchema from './emailVerificationSchema'

module.exports = mongoose.model('emailVerification', emailVerificationSchema)