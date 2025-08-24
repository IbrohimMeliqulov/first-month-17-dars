function names(set,name){
    let arr=[... set]
    let ism=[... name]
    let count=0
    for(let key of arr){
        for(let i=0;i<ism.length;i++){
            if(ism[i].toLowerCase()==key[0].toLowerCase()){
                count+=key[1]
            }
        }
    }
    console.log(count)
    if(count<=60){
        return "NOT TOO GOOD"
    }else if(61<=count<=300){
        return "PRETTY GOOD"
    }else if(301<=count<=599){
        return "VERY GOOD"
    }else if(count>=600){
        return "THE BEST"
    }
}
















const scores = new Set([
	["A", 100],
	["B", 14],
	["C", 9],
	["D", 28],
	["E", 145],
	["F", 12],
	["G", 3],
	["H", 10],
	["I", 200],
	["J", 100],
	["K", 114],
	["L", 100],
	["M", 25],
	["N", 450],
	["O", 80],
	["P", 2],
	["Q", 12],
	["R", 400],
	["S", 113],
	["T", 405],
	["U", 11],
	["V", 10],
	["W", 10],
	["X", 3],
	["Y", 210],
	["Z", 23],
])
console.log(names(scores,"MUBASHIR"))