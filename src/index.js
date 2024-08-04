module.exports = function reverse (n) {

    let arr1=n;
    let arr2='';
    let j;
    
    arr1=Math.abs(arr1);    
    arr1=String(arr1);    
    j=arr1.length-1;   

    for (let i=0;i<arr1.length;i++){
        arr2=arr2+arr1[j];
        j--;
    }

    arr2=Number(arr2);
    return(arr2);  
    
}
