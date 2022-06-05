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
input.onButtonPressed(Button.B, function () {
    basic.showString("CodeGarden 2022, June 15 #H5YR")
})
input.onGesture(Gesture.Shake, function () {
    images.iconImage(IconNames.SmallHeart).showImage(0)
    images.iconImage(IconNames.Heart).showImage(0)
    InvertedHeart.showImage(0)
    images.iconImage(IconNames.Heart).showImage(0)
})
let myDirection2 = 0
let InvertedHeart2 = images.createImage(`
    # . # . #
    . . . . .
    . . . . .
    # . . . #
    # # . # #
    `)
images.iconImage(IconNames.Heart).showImage(0)
