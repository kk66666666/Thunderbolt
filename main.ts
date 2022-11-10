function _5 () {
    y = 0
    for (let index = 0; index < 3; index++) {
        led.plotBrightness(x, y, 255)
        y += 2
    }
}
let y = 0
let x = 0
x = 0
y = 0
let 左右 = 1
basic.forever(function () {
    for (let index = 0; index < 3; index++) {
        _5()
        basic.pause(100)
        basic.clearScreen()
        x += 左右
        if (x == 4) {
            左右 = -1
        } else if (x == 0) {
            左右 = 1
        }
    }
})
