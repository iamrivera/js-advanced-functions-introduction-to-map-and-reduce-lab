// Your code here
function mapToNegativize(sourceArray){
    let newArray = []
    for (let i = 0; i < sourceArray.length; i++) {
        newArray.push(sourceArray[i]*-1)
    };
    return newArray;
};

function mapToNoChange(sourceArray){
    let newArray = [];
    for (let i = 0; i < sourceArray.length; i++) {
        newArray.push(sourceArray[i])
    };
    return newArray;
};

function mapToDouble(sourceArray){
    let newArray = []
    for (let i = 0; i < sourceArray.length; i++) {
        newArray.push(sourceArray[i]*2)
    };
    return newArray;
};


function mapToSquare(sourceArray){
    let newArray = [];
    for (let i=0; i < sourceArray.length; i++) {
        newArray.push(sourceArray[i]**2)
    };
    return newArray;
};

function reduceToTotal(sourceArray,startingPoint=0){
    let total = startingPoint
    for (let i = 0; i < sourceArray.length; i++){
        total = total+sourceArray[i]
    };
    return total;
};

function reduceToAllTrue(sourceArray){
    let truthArray = []

    for (let i = 0; i < sourceArray.length; i++){
        if (!!sourceArray[i] == true) {truthArray.push(sourceArray[i])};
    };

    if (truthArray.length == sourceArray.length){
        return true
    } else {return false};
};

function reduceToAnyTrue(sourceArray){
    let booleanArray = [];
    for (let i = 0; i < sourceArray.length; i++){
        booleanArray.push(!!sourceArray[i])
    };
    
    if (booleanArray.includes(true)){
        return true
    } else {
        return false
    }
};