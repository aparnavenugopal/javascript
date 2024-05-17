//problem 1
const obj = {
    a: 1,
    b: {
      c: [
        {
          d: 'd1',
        },
        {
          z: 'z1',
        },
      ],
      m: 'm2',
    },
  };
  
//   console.log(findMatchingObjectProperty(obj, ['z', 'z1'])); 

const findMatchingObject = (obj, [key, value]) => {
    if(typeof obj === 'object' && obj !== null){
        for(const k in obj){
            if(obj.hasOwnProperty(k)){
                if(k === key && obj[k] == value){
                    return true;
                }
                if(typeof obj[k] === 'object'){
                    if(findMatchingObject(obj[k], [key, value])){
                        return true;
                    }
                }
            }
        }
    }
    return false;
}

console.log(findMatchingObject(obj, ['z', 'z1'])); 