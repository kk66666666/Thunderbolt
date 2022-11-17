let 亮度 = 0
let n = 0
let y = 0
let x = 0
let 左右 = 1
basic.forever(function () {
    basic.clearScreen()
    y = 0
    if (x == 4) {
        左右 = -1
    } else if (x == 0) {
        左右 = 1
    }
    x += 左右
    for (let index = 0; index < 5; index++) {
        n = 0
        亮度 = 255
        for (let index = 0; index < 5; index++) {
            led.plotBrightness(x - 左右 * n, y, 亮度)
            亮度 += -50
            n += 1
        }
        y += 1
    }
    basic.pause(100)
})
