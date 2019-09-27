import mongoose from 'mongoose'
const Schema = mongoose.Schema
const emailVerificationSchema = mongoose.Schema({
    user: { type: Schema.ObjectId, ref: 'user', autopopulate: true },
    token: { type: String }
},{
  timestamps: true
})
export default emailVerificationSchema