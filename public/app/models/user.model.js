"use strict";
var noProfilePictureUrl = '../assets/images/default-user.png';
var mainProfilePictureIndex = 0;
var User = (function () {
    function User(_id, _firstName, _lastName, _age, _gender) {
        this.id = _id;
        this.firstName = _firstName;
        this.lastName = _lastName;
        this.age = _age;
        this.gender = _gender;
        this.families = [];
        // this.email = _email;
        // this.profilePictures = this.initProfilePictures(_profilePictures);
        //
        // this.username = _username;
        // this.passHash = _passHash;
        // this.fbId = _fbId;
        // this.fbToken = _fbToken;
    }
    User.prototype.getMainProfilePictureUrl = function () {
        var mainProfilePictureUrlToReturn = '';
        mainProfilePictureUrlToReturn = this.profilePictures[mainProfilePictureIndex];
        return mainProfilePictureUrlToReturn;
    };
    User.prototype.geProfilePicturesUrl = function () {
        return undefined;
    };
    User.prototype.hasFamily = function () {
        if (this.families == null || this.families == undefined) {
            return false;
        }
        if (this.families.length == 0) {
            return false;
        }
        return true;
    };
    User.prototype.getFamilies = function () {
        var familiesToReturn;
        familiesToReturn = [];
        console.log('getFamilies call-' + familiesToReturn);
        return familiesToReturn;
    };
    User.prototype.initProfilePictures = function (_profilePictures) {
        var profilePicturesCollectionToReturn;
        profilePicturesCollectionToReturn = [];
        if ((_profilePictures == null) || (_profilePictures == undefined)) {
            profilePicturesCollectionToReturn.push(noProfilePictureUrl);
        }
        if (_profilePictures.length == 0) {
            profilePicturesCollectionToReturn.push(noProfilePictureUrl);
        }
        for (var _i = 0, _profilePictures_1 = _profilePictures; _i < _profilePictures_1.length; _i++) {
            var pictureSrc = _profilePictures_1[_i];
            profilePicturesCollectionToReturn.push(pictureSrc);
        }
        return profilePicturesCollectionToReturn;
    };
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.model.js.map