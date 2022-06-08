input.onButtonPressed(Button.A, function () {
    if (myDirection2 < 45) {
        basic.showArrow(ArrowNames.North)
    } else if (myDirection2 < 90) {
        basic.showArrow(ArrowNames.NorthWest)
    } else if (myDirection2 < 135) {
        basic.showArrow(ArrowNames.West)
    } else if (myDirection2 < 180) {
        basic.showArrow(ArrowNames.SouthWest)
    } else if (myDirection2 < 225) {
        basic.showArrow(ArrowNames.South)
    } else if (myDirection2 < 270) {
        basic.showArrow(ArrowNames.SouthEast)
    } else if (myDirection2 < 315) {
        basic.showArrow(ArrowNames.East)
    } else {
        basic.showArrow(ArrowNames.NorthEast)
    }
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("#H5YR")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "#H5YR") {
        radio.sendString("Thank You")
        basic.showString("#H5YR")
    } else if (receivedString == "Thank You") {
        images.iconImage(IconNames.Happy).showImage(0)
        basic.pause(100)
        images.iconImage(IconNames.Heart).showImage(0)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showString("CG22")
})
input.onGesture(Gesture.Shake, function () {
    images.iconImage(IconNames.SmallHeart).showImage(0)
    images.iconImage(IconNames.Heart).showImage(0)
    invertedHeart.showImage(0)
    images.iconImage(IconNames.Heart).showImage(0)
})
let myDirection2 = 0
let invertedHeart: Image = null
radio.setGroup(1)
invertedHeart = images.createImage(`
    # . # . #
    . . . . .
    . . . . .
    # . . . #
    # # . # #
    `)
images.iconImage(IconNames.Heart).showImage(0)
basic.forever(function () {
    myDirection2 = input.compassHeading()
})
