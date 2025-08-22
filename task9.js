function chatroomStatus(arr){
    if(arr.length==1){
        return `${arr[0]} online`
    }else if(arr.length==2){
        return `${arr[0]} and ${arr[1]} online`
    }else if(arr.length>2){
        return `${arr[0]},${arr[1]} and ${arr.length-2} more online`
    }else{
        return "no one online"
    }
}


arr=["pap_ier44", "townieBOY", "panda321", "motor_bike5", "sandwichmaker833", "violinist91"]
console.log(chatroomStatus(arr))