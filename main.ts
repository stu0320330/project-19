input.onGesture(Gesture.TiltLeft, function () {
    Timer = 0
    music.stopMelody(MelodyStopOptions.All)
})
input.onGesture(Gesture.TiltRight, function () {
    Timer = 0
    music.stopMelody(MelodyStopOptions.All)
})
let Timer = 0
Timer = 0
basic.forever(function () {
    basic.pause(1000)
    Timer += 1
    basic.showNumber(Timer)
    if (Timer > 30) {
        music.play(music.stringPlayable("C5 A B G A F G E ", 120), music.PlaybackMode.UntilDone)
    }
})
