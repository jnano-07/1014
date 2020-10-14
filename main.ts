basic.forever(function () {
    basic.clearScreen()
    basic.pause(100)
    for (let index = 0; index <= 9; index++) {
        if (index == 5) {
            continue;
        }
        basic.showNumber(index)
        basic.pause(100)
        basic.clearScreen()
        basic.pause(100)
    }
    basic.showIcon(IconNames.Heart)
    basic.pause(100)
})
