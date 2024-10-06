scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    if (Boss_Alive == false) {
        if (On_Boss == 1) {
            Boss1 = sprites.create(img`
                ........................
                ............cc..........
                ............ccc.........
                ........cc..ccccccc.....
                ........ccccc555555cc...
                ........ccb5555555555c..
                .....cc..b555555555555c.
                .....cccb555555ff155555c
                ......cb55555555ff55d55c
                ......b5555555555555555c
                ...cc.b555dd5555bb13bbc.
                ...cccd55ddddd555b3335c.
                ....ccdd5ddddddd55b335c.
                .....bddddb55bdddd5555c.
                ..cccdddddb55bbbbbcccc..
                .ccccddddddb5555cbcccc..
                .cdccdddddddc555cbc55c..
                .cdddddddddddcccbbc5c...
                .cbddddddd55dbbbbccc....
                .ccbdddddd555dbbbcbc....
                ..cccddbbbd555bbccc.....
                ....ccbbbbbd555cc.......
                ......ccccbddddbc.......
                ..........cd5555dc......
                `, SpriteKind.Enemy)
            tiles.placeOnRandomTile(Boss1, assets.tile`myTile4`)
            Boss_Alive = true
            Boss1.follow(mySprite, 50)
            statusbar = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
            statusbar.max = 5
            statusbar.value = 5
            statusbar.attachToSprite(Boss1)
            statusbar.setColor(2, 3, 11)
        } else if (On_Boss == 2) {
            Boss2 = sprites.create(img`
                . . . . c c c c c c . . . . . . 
                . . . c 6 7 7 7 7 6 c . . . . . 
                . . c 7 7 7 7 7 7 7 7 c . . . . 
                . c 6 7 7 7 7 7 7 7 7 6 c . . . 
                . c 7 c 6 6 6 6 c 7 7 7 c . . . 
                . f 7 6 f 6 6 f 6 7 7 7 f . . . 
                . f 7 7 7 7 7 7 7 7 7 7 f . . . 
                . . f 7 7 7 7 6 c 7 7 6 f c . . 
                . . . f c c c c 7 7 6 f 7 7 c . 
                . . c 7 2 7 7 7 6 c f 7 7 7 7 c 
                . c 7 7 2 7 7 c f c 6 7 7 6 c c 
                c 1 1 1 1 7 6 f c c 6 6 6 c . . 
                f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
                f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
                . f 6 1 1 1 1 1 1 6 6 6 f . . . 
                . . c c c c c c c c c f . . . . 
                `, SpriteKind.Enemy)
            tiles.placeOnRandomTile(Boss2, assets.tile`myTile4`)
            Boss_Alive = true
            Boss2.follow(mySprite, 60)
            statusbar = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
            statusbar.max = 8
            statusbar.value = 8
            statusbar.attachToSprite(Boss2)
            statusbar.setColor(2, 3, 11)
        } else if (On_Boss == 3) {
            Boss3 = sprites.create(img`
                999999999999999999999999999
                988888888888888888888888889
                988888888888888888888888889
                988888888888888888888888889
                988888888888888888888888889
                988888888888888888888888889
                988888888888888888888888889
                988888889988899888888888889
                988888889988899888888888889
                988888888888888888888888889
                988888888888888888888888889
                988888888888888888888888889
                988888888888888888888888889
                988888888888888888888888889
                988888888888888888888888889
                988888888888888888888888889
                988888888888888888888888889
                988888888888888888888888889
                988888888888888888888888889
                988888888888888888888888889
                988888888888888888888888889
                988888888888888888888888889
                988888888888888888888888889
                988888888888888888888888889
                988888888888888888888888889
                988888888888888888888888889
                999999999999999999999999999
                `, SpriteKind.Enemy)
            tiles.placeOnRandomTile(Boss3, assets.tile`myTile4`)
            Boss_Alive = true
            Boss3.follow(mySprite, 30)
            statusbar = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
            statusbar.max = 12
            statusbar.value = 12
            statusbar.attachToSprite(Boss3)
            statusbar.setColor(2, 3, 11)
        }
    }
})
function Shoot_Ball () {
    if (Shooting_Direction == 1) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . b . . . . . 
            . . . . b d b . . . . 
            . . . . c d c . . . . 
            . . . c c 5 c c . . . 
            . b c c 5 5 5 c c b . 
            b d d 5 5 5 5 5 d d b 
            . b c c 5 5 5 c c b . 
            . . . c c 5 c c . . . 
            . . . . c d c . . . . 
            . . . . b d b . . . . 
            . . . . . b . . . . . 
            `, mySprite, 0, -100)
    } else if (Shooting_Direction == 2) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . b . . . . . 
            . . . . b d b . . . . 
            . . . . c d c . . . . 
            . . . c c 5 c c . . . 
            . b c c 5 5 5 c c b . 
            b d d 5 5 5 5 5 d d b 
            . b c c 5 5 5 c c b . 
            . . . c c 5 c c . . . 
            . . . . c d c . . . . 
            . . . . b d b . . . . 
            . . . . . b . . . . . 
            `, mySprite, 0, 100)
    } else if (Shooting_Direction == 3) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . b . . . . . 
            . . . . b d b . . . . 
            . . . . c d c . . . . 
            . . . c c 5 c c . . . 
            . b c c 5 5 5 c c b . 
            b d d 5 5 5 5 5 d d b 
            . b c c 5 5 5 c c b . 
            . . . c c 5 c c . . . 
            . . . . c d c . . . . 
            . . . . b d b . . . . 
            . . . . . b . . . . . 
            `, mySprite, -100, 0)
    } else if (Shooting_Direction == 4) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . b . . . . . 
            . . . . b d b . . . . 
            . . . . c d c . . . . 
            . . . c c 5 c c . . . 
            . b c c 5 5 5 c c b . 
            b d d 5 5 5 5 5 d d b 
            . b c c 5 5 5 c c b . 
            . . . c c 5 c c . . . 
            . . . . c d c . . . . 
            . . . . b d b . . . . 
            . . . . . b . . . . . 
            `, mySprite, 100, 0)
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    tiles.setTileAt(tiles.getTileLocation(8, 1), sprites.dungeon.floorDark2)
    Speed = Speed + 10
    controller.moveSprite(mySprite, Speed, Speed)
    info.changeLifeBy(1)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    Shooting_Direction = 1
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (CanThrowDart == true) {
        Shoot_Ball()
        CanThrowDart = false
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    Shooting_Direction = 2
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    Shooting_Direction = 4
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    timer.throttle("action", 1000, function () {
        CanThrowDart = true
    })
})
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
    sprites.destroy(statusbar.spriteAttachedTo())
    tiles.setTileAt(tiles.getTileLocation(8, 1), assets.tile`myTile5`)
    Boss_Alive = false
    On_Boss += 1
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    Shooting_Direction = 3
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -1
})
let projectile: Sprite = null
let Boss3: Sprite = null
let Boss2: Sprite = null
let statusbar: StatusBarSprite = null
let Boss1: Sprite = null
let CanThrowDart = false
let Shooting_Direction = 0
let On_Boss = 0
let Boss_Alive = false
let Speed = 0
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 8 8 8 8 . . . . . . 
    . . . . 8 8 9 9 9 9 8 8 . . . . 
    . . . 8 9 9 9 9 9 9 9 9 8 . . . 
    . . 8 9 9 9 9 9 9 9 9 9 9 8 . . 
    . 8 9 9 9 9 9 9 9 9 9 9 9 9 8 . 
    . 8 9 9 9 9 9 9 9 9 9 9 9 9 8 . 
    8 6 9 9 9 9 f 9 9 9 f 9 9 9 6 8 
    8 6 9 9 9 9 f 9 9 9 f 9 9 9 6 8 
    8 6 9 9 9 9 9 9 9 9 9 9 9 9 6 8 
    8 6 6 9 9 9 9 9 9 9 9 9 9 9 6 8 
    8 6 6 6 6 9 9 9 9 9 9 9 9 6 6 8 
    . 8 6 6 6 6 6 6 6 6 6 6 6 6 8 . 
    . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
    `, SpriteKind.Player)
tiles.setCurrentTilemap(tilemap`level4`)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.floorDark5)
scene.cameraFollowSprite(mySprite)
Speed = 100
controller.moveSprite(mySprite, Speed, Speed)
Boss_Alive = false
On_Boss = 1
Shooting_Direction = 0
CanThrowDart = false
info.setLife(3)
game.onUpdate(function () {
    if (controller.left.isPressed() == true) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 8 8 8 8 . . . . . . 
            . . . . 8 8 9 9 9 9 8 8 . . . . 
            . . . 8 9 9 9 9 9 9 9 9 8 . . . 
            . . 8 9 9 9 9 9 9 9 9 9 9 8 . . 
            . 8 9 9 9 9 9 9 9 9 9 9 9 9 8 . 
            . 8 9 9 9 9 9 9 9 9 9 9 9 9 8 . 
            8 6 9 9 9 f 9 9 9 f 9 9 9 9 6 8 
            8 6 9 9 9 f 9 9 9 f 9 9 9 9 6 8 
            8 6 9 9 9 9 9 9 9 9 9 9 9 9 6 8 
            8 6 6 9 9 9 9 9 9 9 9 9 9 9 6 8 
            8 6 6 6 6 9 9 9 9 9 9 9 9 6 6 8 
            . 8 6 6 6 6 6 6 6 6 6 6 6 6 8 . 
            . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 8 8 8 8 . . . . . . 
            . . . . 8 8 9 9 9 9 8 8 . . . . 
            . . . 8 9 9 9 9 9 9 9 9 8 . . . 
            . . 8 9 9 9 9 9 9 9 9 9 9 8 . . 
            . 8 9 9 9 9 9 9 9 9 9 9 9 9 8 . 
            . 8 9 9 9 9 9 9 9 9 9 9 9 9 8 . 
            8 6 9 9 9 f 9 9 9 f 9 9 9 9 6 8 
            8 6 9 9 9 f 9 9 9 f 9 9 9 9 6 8 
            8 6 9 9 9 9 9 9 9 9 9 9 9 9 6 8 
            8 6 9 9 9 9 9 9 9 9 9 9 9 9 6 8 
            8 6 6 9 9 9 9 9 9 9 9 9 9 9 6 8 
            8 6 6 6 6 9 9 9 9 9 9 9 9 6 6 8 
            . 8 6 6 6 6 6 6 6 6 6 6 6 6 8 . 
            . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 8 8 8 8 . . . . . . . 
            . . . 8 8 9 9 9 9 8 8 . . . . . 
            . . 8 9 9 9 9 9 9 9 9 8 . . . . 
            . 8 9 9 9 9 9 9 9 9 9 9 8 . . . 
            . 8 9 9 9 9 9 9 9 9 9 9 9 8 . . 
            8 6 9 9 9 9 9 9 9 9 9 9 9 9 8 . 
            8 6 9 9 9 f 9 9 9 f 9 9 9 9 8 . 
            8 6 9 9 9 f 9 9 9 f 9 9 9 9 6 8 
            8 6 9 9 9 9 9 9 9 9 9 9 9 9 6 8 
            8 6 9 9 9 9 9 9 9 9 9 9 9 9 6 8 
            8 6 6 9 9 9 9 9 9 9 9 9 9 9 6 8 
            8 6 6 6 6 9 9 9 9 9 9 9 9 6 6 8 
            . 8 6 6 6 6 6 6 6 6 6 6 6 6 8 . 
            . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 8 8 8 8 . . . . . . . 
            . . . 8 8 9 9 9 9 8 8 . . . . . 
            . . 8 9 9 9 9 9 9 9 9 8 . . . . 
            . 8 9 9 9 9 9 9 9 9 9 9 8 . . . 
            . 8 9 9 9 9 9 9 9 9 9 9 9 8 . . 
            8 6 9 9 9 9 9 9 9 9 9 9 9 9 8 . 
            8 6 9 9 9 f 9 9 9 f 9 9 9 9 8 . 
            8 6 9 9 9 f 9 9 9 f 9 9 9 9 6 8 
            8 6 9 9 9 9 9 9 9 9 9 9 9 9 6 8 
            8 6 6 9 9 9 9 9 9 9 9 9 9 9 6 8 
            8 6 6 6 6 9 9 9 9 9 9 9 9 6 6 8 
            . 8 6 6 6 6 6 6 6 6 6 6 6 6 8 . 
            . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 8 8 8 8 . . . . . . 
            . . . . 8 8 9 9 9 9 8 8 . . . . 
            . . . 8 9 9 9 9 9 9 9 9 8 . . . 
            . . 8 9 9 9 9 9 9 9 9 9 9 8 . . 
            . 8 9 9 9 9 9 9 9 9 9 9 9 9 8 . 
            . 8 9 9 9 9 9 9 9 9 9 9 9 9 8 . 
            8 6 9 9 9 f 9 9 9 f 9 9 9 9 6 8 
            8 6 9 9 9 f 9 9 9 f 9 9 9 9 6 8 
            8 6 9 9 9 9 9 9 9 9 9 9 9 9 6 8 
            8 6 6 9 9 9 9 9 9 9 9 9 9 9 6 8 
            8 6 6 6 6 9 9 9 9 9 9 9 9 6 6 8 
            . 8 6 6 6 6 6 6 6 6 6 6 6 6 8 . 
            . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
            `],
        150,
        true
        )
    } else if (controller.right.isPressed() == true) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 8 8 8 8 . . . . . . 
            . . . . 8 8 9 9 9 9 8 8 . . . . 
            . . . 8 9 9 9 9 9 9 9 9 8 . . . 
            . . 8 9 9 9 9 9 9 9 9 9 9 8 . . 
            . 8 9 9 9 9 9 9 9 9 9 9 9 9 8 . 
            . 8 9 9 9 9 9 9 9 9 9 9 9 9 8 . 
            8 6 9 9 9 9 f 9 9 9 f 9 9 9 6 8 
            8 6 9 9 9 9 f 9 9 9 f 9 9 9 6 8 
            8 6 9 9 9 9 9 9 9 9 9 9 9 9 6 8 
            8 6 6 9 9 9 9 9 9 9 9 9 9 9 6 8 
            8 6 6 6 6 9 9 9 9 9 9 9 9 6 6 8 
            . 8 6 6 6 6 6 6 6 6 6 6 6 6 8 . 
            . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 8 8 8 8 . . . . . . 
            . . . . 8 8 9 9 9 9 8 8 . . . . 
            . . . 8 9 9 9 9 9 9 9 9 8 . . . 
            . . 8 9 9 9 9 9 9 9 9 9 9 8 . . 
            . 8 9 9 9 9 9 9 9 9 9 9 9 9 8 . 
            . 8 9 9 9 9 9 9 9 9 9 9 9 9 8 . 
            8 6 9 9 9 9 f 9 9 9 f 9 9 9 6 8 
            8 6 9 9 9 9 f 9 9 9 f 9 9 9 6 8 
            8 6 9 9 9 9 9 9 9 9 9 9 9 9 6 8 
            8 6 9 9 9 9 9 9 9 9 9 9 9 9 6 8 
            8 6 6 9 9 9 9 9 9 9 9 9 9 9 6 8 
            8 6 6 6 6 9 9 9 9 9 9 9 9 6 6 8 
            . 8 6 6 6 6 6 6 6 6 6 6 6 6 8 . 
            . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 8 8 8 8 . . . . . 
            . . . . . 8 8 9 9 9 9 8 8 . . . 
            . . . . 8 9 9 9 9 9 9 9 9 8 . . 
            . . . 8 9 9 9 9 9 9 9 9 9 9 8 . 
            . . 8 9 9 9 9 9 9 9 9 9 9 9 8 . 
            . 8 9 9 9 9 9 9 9 9 9 9 9 9 6 8 
            . 8 9 9 9 9 f 9 9 9 f 9 9 9 6 8 
            8 6 9 9 9 9 f 9 9 9 f 9 9 9 6 8 
            8 6 9 9 9 9 9 9 9 9 9 9 9 9 6 8 
            8 6 9 9 9 9 9 9 9 9 9 9 9 9 6 8 
            8 6 6 9 9 9 9 9 9 9 9 9 9 9 6 8 
            8 6 6 6 6 9 9 9 9 9 9 9 9 6 6 8 
            . 8 6 6 6 6 6 6 6 6 6 6 6 6 8 . 
            . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 8 8 8 8 . . . . . 
            . . . . . 8 8 9 9 9 9 8 8 . . . 
            . . . . 8 9 9 9 9 9 9 9 9 8 . . 
            . . . 8 9 9 9 9 9 9 9 9 9 9 8 . 
            . . 8 9 9 9 9 9 9 9 9 9 9 9 8 . 
            . 8 9 9 9 9 9 9 9 9 9 9 9 9 6 8 
            . 8 9 9 9 9 f 9 9 9 f 9 9 9 6 8 
            8 6 9 9 9 9 f 9 9 9 f 9 9 9 6 8 
            8 6 9 9 9 9 9 9 9 9 9 9 9 9 6 8 
            8 6 6 9 9 9 9 9 9 9 9 9 9 9 6 8 
            8 6 6 6 6 9 9 9 9 9 9 9 9 6 6 8 
            . 8 6 6 6 6 6 6 6 6 6 6 6 6 8 . 
            . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 8 8 8 8 . . . . . . 
            . . . . 8 8 9 9 9 9 8 8 . . . . 
            . . . 8 9 9 9 9 9 9 9 9 8 . . . 
            . . 8 9 9 9 9 9 9 9 9 9 9 8 . . 
            . 8 9 9 9 9 9 9 9 9 9 9 9 9 8 . 
            . 8 9 9 9 9 9 9 9 9 9 9 9 9 8 . 
            8 6 9 9 9 9 f 9 9 9 f 9 9 9 6 8 
            8 6 9 9 9 9 f 9 9 9 f 9 9 9 6 8 
            8 6 9 9 9 9 9 9 9 9 9 9 9 9 6 8 
            8 6 6 9 9 9 9 9 9 9 9 9 9 9 6 8 
            8 6 6 6 6 9 9 9 9 9 9 9 9 6 6 8 
            . 8 6 6 6 6 6 6 6 6 6 6 6 6 8 . 
            . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
            `],
        150,
        true
        )
    }
})
