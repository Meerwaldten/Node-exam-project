import mongoose from "mongoose";

const characterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    race: {
        type: String,
        required: true
    },
    class: {
        type: String,
        required: true
    },
    level: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    }
});

export const characterModel = mongoose.model("character", characterSchema);