// !=================== Alireza Abbasi ===================! //

//          =========== second exercise ============      //

function stringPass(n, k, str) {
    let str1 = ''
    let str2 = ''

    if (n < 1 || n > 100 || typeof (n) !== "number")
        return console.log("length of the string must be between 1 and 100")
    if (k < 1 || k > 100 || typeof (k) !== "number")
        return console.log("numbers of iteration must be between 1 and 100")
    if (n !== str.length)
        return console.log("length of the string does not equal to n")

    for (i = 0; i < k; i++) {
        str1 = str.substr(str[0], n - 1)
        str = str[n - 1].concat(str1)

        for (j = 0; j < n; j++) {
            let AsciiCode = str.charCodeAt(j)
            if (AsciiCode === 122) AsciiCode = 96
            if (AsciiCode === 90) AsciiCode = 64
            if (AsciiCode === 57) AsciiCode = 47
            str2 = str2.concat(String.fromCharCode(AsciiCode + 1))
        }
        str = str2
        str2 = ''
    }
    console.log(str)
}

stringPass(4, 5, 'abcd')

stringPass(3, 1, 'abz')

stringPass(3, 1, '012')

stringPass(5, 2, '012ab')

stringPass(5, 2, '019Zb')