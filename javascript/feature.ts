class AdanceFeatures {
    getFeaturesList(list: object[],key?: string | number  ) {
    
return list.filter(
        (ele: any, inx, arr) => {
            return ele.name.includes(key || 'datatype' );
        }
    );
  }
  }
let advfeat: AdanceFeatures = new AdanceFeatures();
let list = [
    { name: 'genrics datatype' },
    { name: 'acess modifiers' }
]
let result = advfeat.getFeaturesList (list);
console.log(result);