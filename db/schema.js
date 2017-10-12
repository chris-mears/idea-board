
const mongoose = require('mongoose');

// First, we instantiate a namespace for our Schema constructor defined by mongoose.
const Schema = mongoose.Schema;

const IdeaSchema = new Schema({
    title: {
        type: String,
        default: "New Title"
    },
    description: {
        type: String,
        default: "New Description"
    },
    creatded: {
        type: Date,
        default: Date.now
    }
})

const UserSchema = new Schema({
    userName: {
        type: String,
        required: true 
    },
    password: {
        type: String,
        required: true 
    },
    ideas: [IdeaSchema]
})

const UserModel = mongoose.model('User', UserSchema)
const IdeaModel = mongoose.model('Idea', IdeaSchema)

module.exports = {
    UserModel: UserModel,
    IdeaModel: IdeaModel
}