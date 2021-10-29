// !=================== Alireza Abbasi ===================! //

//          =========== third problem ============      //


function Goal (n,a,b,arr) {
    let numberOfGoals1 = Number
    let numberOfGoals2 = 0
    // a = extra time of first part
    // b = extra time of second part
    // arr = times of goals
    // n = number of goals

    if (n < 1 || n > 100 || typeof (n) !== "number" )
        return console.log("numbers of goals must be between 1 and 100")
    if (a < 1 || a > 10 || b > 10 || b < 1 || typeof (a) !== "number" || typeof (b) !== "number")
        return console.log("extra times must be an integer less than 10 and more than 1 min")
    if ( toString.call(arr) !== "[object Array]")
        return console.log("please enter the times of goals in an array")


    arr.map(item => {
        if (typeof (item) !== "number")
            return console.log("arguments of array must be integer")
    })

    for ( i = 0 ; i < n ; i++) {
        if (arr[i] < arr[i - 1] || arr[i] > (45 + a)) {
            numberOfGoals1 = i;
        break }
    }
        numberOfGoals2++

    for (j = i + 1 ; j < n ; j++) {
        if (arr[j] < (90+b) && arr[j] > arr[j - 1] ) {
            numberOfGoals2++
        }
    }

    (numberOfGoals1+numberOfGoals2 === n) ? console.log('yes') : console.log('no')
}

Goal (4,2,3,[5,47,45,90])

Goal (4,2,4,[4,45,48,93])

Goal (5,3,2,[4,47,45,80,91])

Goal (4,2,2,[4,48,45,80])

Goal (6,3,2,[8,48,45,70,81,94])