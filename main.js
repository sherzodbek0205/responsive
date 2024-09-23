function fib(yil){
    if(yil<==3) return yil; 
    
    return fib(yil-1)+fib(yil-2);
    
    
    }
    console.log(fib(14));