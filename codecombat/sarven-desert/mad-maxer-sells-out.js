
loop {
    var closestGold = null;
    var minGoldDist = Infinity;
    var coinIndex = 0;
    var coins = this.findItems();
    while (coinIndex < coins.length){
        var coin = coins[coinIndex];
        coinIndex ++ ;
        if ( coin.value == 3 &&this.distanceTo(coin) < minGoldDist) {
            closestGold = coin;
            minGoldDist = this.distanceTo(coin);
        }
    }
    if (closestGold) {
        this.moveXY(closestGold.pos.x, closestGold.pos.y);
    }
}

/*
 Coins here disappear after a few seconds!
 Get all the gold coins before they vanish.
 Find the closest coin that is gold.
 Remember that gold coins have a value of 3
 Now go to the closest gold coin and get it!

*/
