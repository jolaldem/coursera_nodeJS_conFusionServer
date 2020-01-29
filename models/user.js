var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
    admin: {
        type: Boolean,
        default: false
    }
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);

//var Users = mongoose.model('User', userSchema);
//module.exports = Users;

//module.exports = mongoose.model('User', User);
//var Promotions = mongoose.model('Promotion', promoSchema);

//module.exports = Promotions;

/*  username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },*/