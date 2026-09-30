input.onButtonPressed(Button.B, function () {
    stato += 1
    if (stato == 1) {
        basic.showString("Partenza")
    }
    if (stato == 2) {
        basic.showString("Via!")
    }
    if (stato == 3) {
        stato = 0
        basic.showString("Pronti")
    }
})
let stato = 0
stato = 0
basic.showString("Pronti")
