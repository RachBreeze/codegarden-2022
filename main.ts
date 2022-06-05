input.onButtonPressed(Button.A, function () {
    myDirection2 = input.compassHeading()
    if (myDirection < 45) {
        basic.showArrow(ArrowNames.North)
    } else if (myDirection < 90) {
        basic.showArrow(ArrowNames.NorthWest)
    } else if (myDirection < 135) {
        basic.showArrow(ArrowNames.West)
    } else if (myDirection < 180) {
        basic.showArrow(ArrowNames.SouthWest)
    } else if (myDirection < 225) {
        basic.showArrow(ArrowNames.South)
    } else if (myDirection < 270) {
        basic.showArrow(ArrowNames.SouthEast)
    } else if (myDirection < 315) {
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
