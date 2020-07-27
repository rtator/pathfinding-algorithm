scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (sprite.vy > 0 || sprite.vy < 0) {
        if (Math.percentChance(50)) {
            mySprite2.vx = -100
        } else {
            mySprite2.vx = 100
        }
    } else if (sprite.vx > 0 || sprite.vx < 0) {
        if (Math.percentChance(50)) {
            mySprite2.vy = -100
        } else {
            mySprite2.vy = 100
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile1, function (sprite, location) {
    game.over(true)
})
let mySprite2: Sprite = null
let mySprite = sprites.create(img`
    . . . . f f f f . . . . 
    . . f f f f f f f f . . 
    . f f f f f f c f f f . 
    f f f f f f c c f f f c 
    f f f c f f f f f f f c 
    c c c f f f e e f f c c 
    f f f f f e e f f c c f 
    f f f b f e e f b f f f 
    . f 4 1 f 4 4 f 1 4 f . 
    . f e 4 4 4 4 4 4 e f . 
    . f f f e e e e f f f . 
    f e f b 7 7 7 7 b f e f 
    e 4 f 7 7 7 7 7 7 f 4 e 
    e e f 6 6 6 6 6 6 f e e 
    . . . f f f f f f . . . 
    . . . f f . . f f . . . 
    `, SpriteKind.Player)
tiles.setTilemap(tiles.createTilemap(hex`0a0008000101010101010101010101020101010000000001010001010101010000010100010100000100000101000101000001000001010001000000010000010100000000000100000101010101010101010101`, img`
    2 2 2 2 2 2 2 2 2 2 
    2 . 2 2 2 2 2 2 2 2 
    2 . 2 2 2 2 2 2 2 2 
    2 . 2 2 . . 2 2 2 2 
    2 . 2 2 . . 2 2 2 2 
    2 . 2 . . . 2 2 2 2 
    2 . . . . . 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 
    `, [myTiles.transparency16,sprites.castle.tilePath5,myTiles.tile1], TileScale.Sixteen))
controller.moveSprite(mySprite, 50, 50)
mySprite2 = sprites.create(img`
    . . . . . . . . . . b b b . . . 
    . . . . . . . . b e e 3 3 b . . 
    . . . . . . b b e 3 2 e 3 a . . 
    . . . . b b 3 3 e 2 2 e 3 3 a . 
    . . b b 3 3 3 3 3 e e 3 3 3 a . 
    b b 3 3 3 3 3 3 3 3 3 3 3 3 3 a 
    b 3 3 3 d d d d 3 3 3 3 3 d d a 
    b b b b b b b 3 d d d d d d 3 a 
    b d 5 5 5 5 d b b b a a a a a a 
    b 3 d d 5 5 5 5 5 5 5 d d d d a 
    b 3 3 3 3 3 3 d 5 5 5 d d d d a 
    b 3 d 5 5 5 3 3 3 3 3 3 b b b a 
    b b b 3 d 5 5 5 5 5 5 5 d d b a 
    . . . b b b 3 d 5 5 5 5 d d 3 a 
    . . . . . . b b b b 3 d d d b a 
    . . . . . . . . . . b b b a a . 
    `, SpriteKind.Player)
mySprite2.vx = 100
