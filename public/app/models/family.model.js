"use strict";
var user_component_1 = require('../components/users/user.component');
var noFamilyPictureUrl = '../assets/images/default-family.png';
var mainFamilyPictureIndex = 0;
var Family = (function () {
    function Family(_id, _name, 
        // _creator: string,
        _familyPicture) {
        this.id = _id;
        this.name = _name;
        //TODO should be the current logged in user
        var tempCreator = new user_component_1.UserComponent();
        this.creator = tempCreator.createUser();
        this.familyPictures = [];
        this.familyPictures = this.initFamilyPictures(_familyPicture);
    }
    Family.prototype.getMainFamilyPictureUrl = function () {
        var mainFamilyPictureUrlToReturn = '';
        mainFamilyPictureUrlToReturn = this.familyPictures[mainFamilyPictureIndex];
        return mainFamilyPictureUrlToReturn;
    };
    Family.prototype.geFamilyPicturesUrl = function () {
        var familyPicturesUrlToReturn = [];
        familyPicturesUrlToReturn = this.familyPictures.slice(0);
        return familyPicturesUrlToReturn;
    };
    Family.prototype.getFamilyMembers = function () {
        var familyMembersToReturn;
        familyMembersToReturn = [];
        console.log('getFamilyMembers call-' + familyMembersToReturn);
        return familyMembersToReturn;
    };
    Family.prototype.initFamilyPictures = function (_familyPictures) {
        var familyPicturesCollectionToReturn;
        familyPicturesCollectionToReturn = [];
        if ((_familyPictures == null) || (_familyPictures == undefined)) {
            familyPicturesCollectionToReturn.push(noFamilyPictureUrl);
        }
        if (_familyPictures.length == 0) {
            familyPicturesCollectionToReturn.push(noFamilyPictureUrl);
        }
        for (var _i = 0, _familyPictures_1 = _familyPictures; _i < _familyPictures_1.length; _i++) {
            var pictureSrc = _familyPictures_1[_i];
            familyPicturesCollectionToReturn.push(pictureSrc);
        }
        return familyPicturesCollectionToReturn;
    };
    return Family;
}());
exports.Family = Family;
//# sourceMappingURL=family.model.js.map