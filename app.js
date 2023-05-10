let date = new Date()
let day
let weekday =["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
switch (date.getDay()){
    case 0:
        day = weekday[0]
        break
    case 1:
        day = weekday[1]
        break
    case 2:
        day = weekday[2]
        break
    case 3:
        day = weekday[3]
        break
    case 4:
        day = weekday[4]
        break
    case 5:
        day = weekday[5]
        break
    case 6:
        day = weekday[6]
        break
}
console.log(`Today is ${day}.`)