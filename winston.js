class Winston extends Character {
    constructor(x, y, r) {
        super(x, y, r)
    }

    show() {
        const pos = this.body.position
        const angle = this.body.angle

        push()
        translate(pos.x, pos.y)
        rotate(angle)
        stroke(0)
        fill(255, 255, 0)
        circle(0, 0, this.w)
        fill(46, 46, 41)
        circle(-5, -4, 4)
        circle(10, -5, 4)
        fill(252, 65, 65)
        ellipse(4, 6, 11, 13)
        pop()
    }
}