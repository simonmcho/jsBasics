// let promiseToCleanTheRoom = new Promise((resolve, reject) => {
//     //cleaning room
//     let isClean = true;

//     if(isClean){
//         resolve('CLEAN');
//     } else {
//         reject('NOT CLEAN');
//     }
// });

// promiseToCleanTheRoom.then((fromResolve) => {
//     console.log("the room is " + fromResolve);
// }).catch((fromReject) => {
//     console.log("the room is " + fromReject);
// });

let cleanRoom = function() {
    return new Promise((resolve, reject) => {
        resolve("Cleaned Room");
    });
}

let removeGarbage = function(message){
    return new Promise((resolve, reject) => {
        resolve(message + ' removed garbage');
    });
}

let vaccuumFloor = function(message){
    return new Promise((resolve, reject) => {
        resolve(message + ' vaccuumed floor');
    });
}

cleanRoom().then(function(result) {
    return removeGarbage(result);
}).then(function(result){
    console.log(result);
});

Promise.all([cleanRoom(), vaccuumFloor()]).then(function(){
    console.log('finished');
});