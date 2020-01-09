namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
`
    //% blockIdentity=images._tile
    export const tile2 = img`
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
`
    //% blockIdentity=images._tile
    export const tile3 = img`
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
`
}
let Cursor1 = sprites.create(img`
. . . . . . . 2 2 2 2 2 2 2 2 2 
. . . . . . . 2 f f f f f f f 2 
. . . . . . . . 2 f f f f f f 2 
. . . . . . . . . 2 f f f f f 2 
. . . . . . . . 2 f f f f f f 2 
. . . . . . . 2 f f f f f f f 2 
. . . . . . 2 f f f f f 2 f f 2 
. . . . . 2 f f f f f 2 . 2 f 2 
. . . . 2 f f f f f 2 . . . 2 2 
. . . 2 f f f f f 2 . . . . . . 
. . 2 f f f f f 2 . . . . . . . 
. 2 f f f f f 2 . . . . . . . . 
. 2 f f f f 2 . . . . . . . . . 
. 2 f f f 2 . . . . . . . . . . 
. . 2 2 2 . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
let Cursor2 = sprites.create(img`
. . . . . . . 8 8 8 8 8 8 8 8 8 
. . . . . . . 8 f f f f f f f 8 
. . . . . . . . 8 f f f f f f 8 
. . . . . . . . . 8 f f f f f 8 
. . . . . . . . 8 f f f f f f 8 
. . . . . . . 8 f f f f f f f 8 
. . . . . . 8 f f f f f 8 f f 8 
. . . . . 8 f f f f f 8 . 8 f 8 
. . . . 8 f f f f f 8 . . . 8 8 
. . . 8 f f f f f 8 . . . . . . 
. . 8 f f f f f 8 . . . . . . . 
. 8 f f f f f 8 . . . . . . . . 
. 8 f f f f 8 . . . . . . . . . 
. 8 f f f 8 . . . . . . . . . . 
. . 8 8 8 . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(Cursor1, 100, 100)
controller.player2.moveSprite(Cursor2, 100, 100)
scene.setBackgroundColor(1)
tiles.setTilemap(tiles.createTilemap(
            hex`09000700010101010101010101010001010001010001010101010101010101010001010001010001010101010101010101020202020202020202020203020202030202`,
            img`
. . . . . . . . . 
. . . . . . . . . 
. . . . . . . . . 
. . . . . . . . . 
. . . . . . . . . 
. . . . . . . . . 
. . . . . . . . . 
`,
            [myTiles.tile0,myTiles.tile1,myTiles.tile2,myTiles.tile3],
            TileScale.Sixteen
        ))
