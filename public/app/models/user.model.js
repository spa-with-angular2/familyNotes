"use strict";
// TODO extract constants
var noProfilePictureUrl = '/app/assets/images/default-user.jpg';
var User = (function () {
    function User(firstName, lastName, age, gender, country, email, profilePicture, username, passHash, role, fbId, fbToken) {
        this.id = '';
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.country = country;
        this.email = email;
        this.profilePictures = [];
        this.profilePictures = this.initProfilePictures(profilePicture);
        this.families = [];
        this.createdOn = new Date();
        this.username = username;
        this.passHash = passHash;
        this.salt = 'SALT';
        this.role = role || '';
        this.fbId = fbId || '';
        this.fbToken = fbToken || '';
    }
    User.prototype.initProfilePictures = function (profilePictureUrl) {
        var profilePicturesCollectionToReturn = [];
        if ((profilePictureUrl == null) || (profilePictureUrl == undefined)) {
            profilePicturesCollectionToReturn.push(noProfilePictureUrl);
        }
        else if (profilePictureUrl == '') {
            profilePicturesCollectionToReturn.push(noProfilePictureUrl);
        }
        else {
            profilePicturesCollectionToReturn.push(profilePictureUrl);
        }
        return profilePicturesCollectionToReturn;
    };
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.model.js.map