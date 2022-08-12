class Box {
    constructor(x, y, w, h, type = "coffee") {
        this.w = w
        this.h = h
        this.body = Bodies.rectangle(x, y, w, h)
        World.add(world, this.body)
        this.type = type
    }

    show() {
        const pos = this.body.position
        const angle = this.body.angle

        push()
        translate(pos.x, pos.y)
        rotate(angle)
        switch (this.type) {
            case "coffee":
                fill("#E0D7E1")
                quad(-this.w/2, -this.h/2, this.w/2, -this.h/2, this.w/2-5, this.h/2, 5-this.w/2, this.h/2)
                rect(0, -this.h*.45, this.w, this.h/8, 2)
                fill("#C88E64")
                rect(0, 0, this.w, this.h/2, 3, 3, 4, 4)
                break
            default:
                fill(255)
                rect(0, 0, this.w, this.h)
        }
        pop()
    }
}