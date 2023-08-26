import mongoose from "mongoose";

const schema = mongoose.Schema({
    name: {type: String, required: true, minlength: 2, maxlength: 50},
    email: {type: String, required: true, minlength: 2, maxlength: 200},
    password: {type: String, required: true, minlength: 6, maxlength: 200},
    admin: {type: Boolean, default: false},
    data: {type: Date, default: Date.now()}
})

const User = mongoose.model("Users", schema);

export {User}