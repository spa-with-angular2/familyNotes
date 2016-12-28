"use strict";
var EnumUtils = (function () {
    function EnumUtils() {
    }
    EnumUtils.indexes = function (enumeration) {
        var indexesToReturn = [];
        for (var item in enumeration) {
            if (typeof (enumeration[item]) === 'string') {
                indexesToReturn.push(item);
            }
        }
        return indexesToReturn;
    };
    EnumUtils.values = function (enumeration) {
        var valuesToReturn = [];
        for (var item in enumeration) {
            if (typeof (enumeration[item]) === 'number') {
                valuesToReturn.push(item);
            }
        }
        return valuesToReturn;
    };
    return EnumUtils;
}());
exports.EnumUtils = EnumUtils;
//# sourceMappingURL=enum.utilities.js.map