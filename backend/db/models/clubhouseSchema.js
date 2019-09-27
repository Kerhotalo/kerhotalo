import mongoose from 'mongoose'
const Schema = mongoose.Schema
const clubhouseSchema = mongoose.Schema({
    createdBy: { type: Schema.ObjectId, ref: 'user', autopopulate: true },
    title: { type: String },
    description: { type: String },
    shortDescription: { type: String },
    address: { type: String},
    city: { type: String },
    contact: { type: String }, 
    price: { type: Number },
    ageRestriction: { type: String },
    levelRestriction: { type: String },
},{
  timestamps: true
})
export default clubhouseSchema