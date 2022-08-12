class Slingshot {
    constructor(x, y, body) {


        const options = {
            pointA: {
                x: x,
                y: y
            },
            bodyB: body,
            stiffness: .03,
            length: 50
        }

        this.sling = Constraint.create(options)
        this.sling.bodyB.collisionFilter.group = 1
        World.add(world, this.sling)
    }

    fly() {
        this.sling.bodyB.collisionFilter.group = 0
        this.sling.bodyB = null
    }

    attach(body) {
        this.sling.bodyB = body
        this.sling.bodyB.collisionFilter.group = 1
    }

    show() {
        if (!this.sling.bodyB) return

        stroke(255)
        const posA = this.sling.pointA,
              posB = this.sling.bodyB.position
        line(posA.x, posA.y, posB.x, posB.y)
    }
}