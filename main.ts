input.onButtonPressed(Button.A, function () {
    if (min < 192) {
        min += 1
    }
})
input.onButtonPressed(Button.B, function () {
    if (min < 192) {
        min += -1
    }
})
let sound_level = 0
let min = 0
min = 0
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.forever(function () {
    sound_level = input.soundLevel()
    if (sound_level < min) {
    	
    }
    led.setBrightness(255)
})
