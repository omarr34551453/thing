input.onButtonPressed(Button.A, function () {
    radio.sendString("A")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("AB")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "SHAKE") {
        basic.showIcon(IconNames.Heart)
        music.playTone(330, music.beat(BeatFraction.Quarter))
    } else if (receivedString == "A") {
        basic.showString("water")
    } else if (receivedString == "B") {
        basic.showString("sun")
    } else if (receivedString == "AB") {
        basic.showString("people")
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("B")
})
input.onGesture(Gesture.Shake, function () {
    radio.sendString("SHAKE")
    music.playTone(262, music.beat(BeatFraction.Quarter))
    basic.showIcon(IconNames.SmallDiamond)
})
radio.setGroup(1)
