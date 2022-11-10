function _5 () {
    y = 0
    for (let index = 0; index < 5; index++) {
        led.toggle(x, y)
        y += 1
    }
}
let y = 0
let x = 0
x = 0
y = 0
let 左右 = 1
basic.forever(function () {
    _5()
    basic.pause(200)
    _5()
    x += 左右
    if (x == 4) {
        左右 = -1
    } else if (x == 0) {
        左右 = 1
    }
})
