// !=================== Alireza Abbasi ===================! //

//          =========== first problem ============      //

function exchange(debt, arr_NumOfBills, arr_PriceOfCurrency) {

    let count = 0;

    // x = number of Dirham bill
    // y = number of Euro bill
    // z = number of deram bill

    let x = arr_NumOfBills[0]
    let y = arr_NumOfBills[1]
    let z = arr_NumOfBills[2]

    // a = price of Dirham bill
    // b = price of Euro bill
    // c = price of Dollar bill

    let a = arr_PriceOfCurrency[0]
    let b = arr_PriceOfCurrency[1]
    let c = arr_PriceOfCurrency[2]

    // console.log(typeof debt)

    if (debt < 1 || debt > 100000 || typeof (debt) !== "number")
        return console.log(" please input an integer between 1 and 100000")
    if ( 0 > x > 5000 || 0 > y > 5000 || 0 > z > 5000 || typeof (x) !== "number" || typeof (y) !== "number" || typeof (z) !== "number")
        return console.log(" number of bills don't input correctly")
    if ( toString.call(arr_NumOfBills) !== "[object Array]")
        return console.log(" please input the numbers of bills in an array")
    if ( 1 > a || a > 100000 || 1 > b || b > 100000 || 1 > c || c > 100000 || typeof (a) !== "number" || typeof (b) !== "number" || typeof (c) !== "number")
        return console.log(" prices of currencies don't input correctly")
    if ( toString.call(arr_NumOfBills) !== "[object Array]")
        return console.log(" please enter the price of currencies in an array")
        for (i = 0; i <= x; i++) {
            for (j = 0; j <= y; j++) {
                for (k = 0; k <= z; k++) {
                    if (
                        (i * a) + (j * b) + (k * c) === debt
                    ) {
                        count += 1
                        console.log("Dirham: %s , Euro: %s , Dollar: %s", i, j, k)
                    }
                }
            }
        }
        console.log("Ali has %s way to pay his debt \n ********************** ", count)
}

exchange(100000, [2, 1, 1], [50000, 70000, 30000])
exchange(60000, [3, 3, 3], [30000, 20000, 30000])
exchange(43000, [2, 1, 1], [4200, 7500, 3600])