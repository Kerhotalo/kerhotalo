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

//Added indexes for search features
const index = {title: 'text', description: 'text', shortDescription: 'text'}
clubhouseSchema.index(index)

export default clubhouseSchema