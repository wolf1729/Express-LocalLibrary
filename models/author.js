const mongoose = require('mongoose')
const schema = mongoose.Schema

const AuthorSchema = new schema({
    first_name: { type: String, required: true, maxLength: 100 },
    family_name: { type: String, required: true, maxLength: 100 },
    date_of_birth: { type: Date },
    date_of_death: { type: Date }
})

AuthorSchema.virtual("name").get(function() {
    let fullname = ""
    if(this.first_name && this.family_name) {
        fullname = `${this.family_name}, ${this.first_name}`
    }

    return fullname
})

AuthorSchema.virtual("url").get(function() {
    return `/catalog/author/${this._id}`
})

//Export Model+
module.exports = mongoose.model("Author", AuthorSchema)