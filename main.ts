let Reading = 0
let Temperature = 0
basic.forever(function () {
    Reading = pins.analogReadPin(AnalogPin.P1)
    Temperature = Reading * 75 / 1000 - 14
    basic.showNumber(Temperature)
})
