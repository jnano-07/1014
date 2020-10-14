basic.forever(function () {
    for (let index = 0; index <= 4; index++) {
        for (let A = 0; A <= 4; A++) {
            led.plot(A, index)
            basic.pause(200)
        }
    }
    for (let index = 0; index <= 4; index++) {
        for (let A = 0; A <= 4; A++) {
            led.unplot(A, index)
            basic.pause(200)
        }
    }
})
