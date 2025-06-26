import { model, Schema } from 'mongoose'
const categorySchema = new Schema({
  name: {
    type: String,
    required: [true, 'La categoria es oblogatoria'],
    unique: true,
    trim: true
  },
  description: {
    type: String,
    required: [true, 'La descripcion es oblogatoria'],
    trim: true
  },
  image: {
    type: Schema.Types.ObjectId,
    ref: 'Multimedia'
  }
}, {
  timestamps: true
})

export const Category = model('Category', categorySchema)