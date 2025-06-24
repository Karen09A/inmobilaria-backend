import { Schema, model } from 'mongoose'
const userSchema = new Schema ({
    name: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        trim: true
    },
    lastName: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        required: [true, 'El email es obligatorio'],
        unique: true,
        lowercase: true,
        match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Por favor ingresa un correo electrónico válido']
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria'],
        min: [8, 'La contraseña debe contener al menos 8 carácteres'],
        select: false
    },
    phone: {
        type: String,
        trim: true,
        match: [/^\+?[0-9]{10,15}$/, 'Por favor ingresa un número de celular válido']
    },
    role: {
        type: String,
        enum: ['user','admin','editor'],
        default: 'user'
    }
}, {
    timestamps: true
})

export const User = model('User', userSchema)