import mongoose from 'mongoose'
const Schema = mongoose.Schema
const userSchema = mongoose.Schema({
    username: { type: String },
    password: { type: String },
    email: { type: String },
    emailConfirmed: { type: Boolean}
},{
  timestamps: true
})
export default userSchema