// code your solution here
// let findYear = record.find(superbowlWin);

function superbowlWin(collection){
    for (let values of collection){
        if(values.result=== 'W'){
            return values.year;
        }
        // else{
        //     return('Sad reality');
        // }
    }

}

record.find(superbowlWin);


