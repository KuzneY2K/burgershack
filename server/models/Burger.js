import { Schema } from "mongoose";

export const BurgerSchema = new Schema({
    name: {
        type: String,
        required: true,
        minLength: 6,
        maxLength: 18
    },
    description: {
        type: String,
        required: true,
        minLength: 12,
        maxLength: 48
    },
    price: {
        type: Number,
        required: true,
        minLength: 1,
        maxLength: 999
    },
    imgUrl: {
        type: String,
        required: false,
    }
})