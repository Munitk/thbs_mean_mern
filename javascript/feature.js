var AdanceFeatures = /** @class */ (function () {
    function AdanceFeatures() {
    }
    AdanceFeatures.prototype.getFeaturesList = function (list, key) {
        return list.filter(function (ele, inx, arr) {
            return ele.name.includes(key || 'datatype');
        });
    };
    return AdanceFeatures;
}());
var advfeat = new AdanceFeatures();
var list = [
    { name: 'genrics datatype' },
    { name: 'acess modifiers' }
];
var result = advfeat.getFeaturesList(list);
console.log(result);
