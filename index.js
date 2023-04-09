function receivesAFunction(callback){
callback();
}
function spy(){

}


receivesAFunction(spy);

function namedFunction(){

}
function returnsANamedFunction(){


    return namedFunction;
}
function returnsAnAnonymousFunction(){

    return ()=>{};
}

// function firstName(fname){
//     return fname;
// }
// function fullName(fname){
//     return firstName(fname)+ ' '+'libsanew';
// }
// &()
