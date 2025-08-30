function pascaltriangle(lineNumber){
    let triangle=[]
    for(let i=0;i<lineNumber;i++){
        let arr=[1]
        for(let j=1;j<i;j++){
            arr[j]=triangle[i-1][j-1]+triangle[i-1][j]
        }
        if(i>0){
            arr.push(1)
            triangle.push(arr)
        }
    }
    return triangle
}


console.log(pascaltriangle(3))

