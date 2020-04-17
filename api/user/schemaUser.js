require('dotenv').config()
const jwt = require('jsonwebtoken')
const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema(
    {
        email: {
            type: String,
            lowercase: true,
            trim: true,
            unique: true,
            required: true
        },
        password: {
            type: String,
            required: true
        }
    },
    { timestamps: { createdAt: "created_at" } }
);

module.exports = mongoose.model("User", userSchema);
