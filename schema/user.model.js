const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String
});

userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        try {
            const salt = await bcrypt.genSalt(10);
            this.password = await bcrypt.hash(this.password, salt);
        } catch (error) {
            next(error);
        }
    }
    next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;