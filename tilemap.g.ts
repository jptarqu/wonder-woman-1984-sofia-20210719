// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level":
            case "level":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
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
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001010101010101010101010101010101020000000000000001010101010101010101010001010100000000000101010101010000010000000101000101010101010100010100010101010000010101010101010101000101010101010100000101010101010001010101010101010001000100000000000000010000000000010000000101010101000100010101010101010001010000000001000101010101010100010000010100000000010100010101000100010101010101000000000101010101010101010001010001010101010101010101000000000000010101010101010101010001010101000000000101010101010101010101010101010003`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . . . . . . . 2 2 2 2 2 2 2 2 
2 2 2 . 2 2 2 . . . . . 2 2 2 2 
2 2 . . 2 . . . 2 2 . 2 2 2 2 2 
2 2 . 2 2 . 2 2 2 2 . . 2 2 2 2 
2 2 2 2 2 . 2 2 2 2 2 2 2 . . 2 
2 2 2 2 2 . 2 2 2 2 2 2 2 2 . 2 
. 2 . . . . . . . 2 . . . . . 2 
. . . 2 2 2 2 2 . 2 . 2 2 2 2 2 
2 2 . 2 2 . . . . 2 . 2 2 2 2 2 
2 2 . 2 . . 2 2 . . . . 2 2 . 2 
2 2 . 2 . 2 2 2 2 2 2 . . . . 2 
2 2 2 2 2 2 2 2 . 2 2 . 2 2 2 2 
2 2 2 2 2 2 . . . . . . 2 2 2 2 
2 2 2 2 2 2 . 2 2 2 2 . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
`, [myTiles.transparency16,sprites.castle.tileGrass1,myTiles.tile1,myTiles.tile2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
