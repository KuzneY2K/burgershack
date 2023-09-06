import { Schema } from "mongoose";

export const BurgerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    imgUrl: {
        type: String,
        required: true,
    }
})