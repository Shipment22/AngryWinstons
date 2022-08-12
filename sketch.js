const {
    Engine,
    World,
    Body,
    Bodies,
    Mouse,
    MouseConstraint,
    Constraint,
    Vector
} = Matter

let engine, world

let ground, boxes = [], winstons = [], slingshot

let nextWinston = 1

let mConstraint


function setup() {
    const canvas = createCanvas(600, 400)

    frameRate(60)

    rectMode(CENTER)
    imageMode(CENTER)

    engine = Matter.Engine.create()
    world = engine.world

    ground = new Box(width / 2, height-10, width, 20, null)
    ground.body.isStatic = true
    for (let i = 0; i < 3; i++) {
        boxes[i] = new Box(450, 300 - i * 75, 50, 75)
    }
    for (let i = 0; i < 3; i++) {
        winstons[i] = new Winston(150-i*35, 300, 15)
    }
    slingshot = new Slingshot(170, 270, winstons[0].body)

    const mouse = Mouse.create(canvas.elt)
    mConstraint = MouseConstraint.create(engine, { mouse: mouse })
    mConstraint.collisionFilter = {
        group: 1
    }
    World.add(world, mConstraint)
}

function mouseReleased() {
    setTimeout(() => {
        if (slingshot.sling.bodyB && slingshot.sling.bodyB.velocity.x > 3 && mouseX < 200) {
            slingshot.fly()
            if (nextWinston < winstons.length) {
                Body.setVelocity(winstons[nextWinston].body, Vector.create(0, -7))
                setTimeout(() => {
                    slingshot.attach(winstons[nextWinston].body)
                    nextWinston++
                }, 150)
            }
        } 
    }, 40)
}

function draw() {
    background(0)


    Engine.update(engine)
    
    ground.show()
    for (box of boxes) {
        box.show()
    }
    for (winston of winstons) {
        winston.show()
    }
    slingshot.show()
}