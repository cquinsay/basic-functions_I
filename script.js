//12 out of 15 correct


function a(){
    return 35;
}
console.log(a());
//Prediction: Output would be 35 (correct)


function a(){
    return 4;
}
console.log(a()+a());
//Prediction: Output would be 8 (correct)


function a(b){
    return b;
}
console.log(a(2)+a(4));
//Prediction: Output would be 6 (correct)


function a(b){
        console.log(b);
        return b*3;
    }
    console.log(a(3));
//Prediction: Output would be 3, 9 (correct)


function a(b){
    return b*4;
    console.log(b);
}
console.log(a(10));
//Prediction: Output would be 40, 40 
//Correction: 40


function a(b){
    if(b<10) {
        return 2;
    }
    else     {
        return 4;
    }
    console.log(b);
}
console.log(a(15));
//Prediction: Output would be 4 (correct)


function a(b,c){
    return b*c;
}
console.log(10,3);
console.log( a(3,10) );
//Prediction: Output would be 30
//Correction: 10, 3, 30


function a(b){
    for(var i=0; i<10; i++){
        console.log(i);
    }
    return i;
}
console.log(3);
console.log(4);
//Prediction: Outcome would be 3,4 (correct)


function a(){
    for(var i=0; i<10; i++){
        i = i +2;
        console.log(i);
    }
}
a();
//Prediction: Output would be 2,5,8,11 (correct)


function a(b,c){
    for(var i=b; i<c; i++) {
       console.log(i);
   }
   return b*c;
}
a(0,10);
console.log(a(0,10));
//Prediction: Output would be 0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0 (correct)


function a(){
    for(var i=0; i<10; i++){
       for(var j=0; j<10; j++){
           console.log(j);
       }
       console.log(i);
    }
}
//Prediction: There would be no output because the function was not called (correct)


function a(){
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            console.log(i,j);
        }
        console.log(j,i);
    }
}
//Prediction: There would be no output because the function was not called (correct)


var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
console.log(z);
//Prediction: Output would be 10 (correct)


var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
a();
console.log(z);
//Prediction: Outcome would be 15, 10 (correct)


var z = 10;
function a(){
    var z = 15;
    console.log(z);
    return z;
}
z = a();
console.log(z);
//Prediction: Output would be 10, 15
//Correction: 15, 15






