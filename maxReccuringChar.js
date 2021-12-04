

const maxRecurringChar = (text) => {
    let charMap = {}
    let charArray =[]
    let vaulesArray = []
    let maxCharValue = 0

    for (let char of text) {
        if (charMap.hasOwnProperty(char)) {
            charMap[char]++
        } else {
            charMap[char] = 1
        }
    }

    charArray = Object.keys(charMap)
    console.log(charArray)
    vaulesArray = Object.values(charMap)
    console.log(vaulesArray)
    maxCharValue = Math.max(...vaulesArray)
    console.log(maxCharValue)

    return charArray[vaulesArray.indexOf(maxCharValue)]
        }
    


console.log(maxRecurringChar('aabacada') )