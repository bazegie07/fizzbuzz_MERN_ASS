function fizzbuzz(n){
    if(typeof n === 'string'){
    return "Parameter must be a positive number"
    }
    
    for(var i = 0; i <=n; i++){
    
        if(i % 3 == 0 && i % 5 == 0){
            console.log("fizzbuzz");
        }
        else if(i % 3 == 0){
            console.log('fizz');
        }
        else if(i % 5 ==0){
            console.log('buzz');
        }
        else {
            console.log(i);
        }
    
    }
    
    
}
y = fizzbuzz('12');
console.log(y);