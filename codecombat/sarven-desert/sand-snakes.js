loop {
    var coins = this.findItems();
    var coinIndex = 0;
    var nearest = null;
    var nearestDistance = 9999;
    while(coinIndex < coins.length) {
        var coin = coins[coinIndex];
        coinIndex++;
        var distance = this.distanceTo(coin);
            if (distance < nearestDistance){
                nearest = coin ;
                nearestDistance = this.distanceTo(coin);
            }
    }
    if (nearest){
        this.moveXY(nearest.pos.x, nearest.pos.y);
    }
}

/*
had to define the nearest coin the coins and an index to reference them, then scan all coins (coinindex < coin.length) (so if == then while loop over), increase index, define the distance to each coin and if closer redefine original variables.
keep the move out of the loop until the the while loop was over to find closest then contine back on with the original loop.
 You'll need to find the nearest coins on your own, findnearest doesnt work.
 Loop through all the coins to find the nearest one.
 If this coin's distance is less than the nearestDistance
 Set nearest to coin
 Set nearestDistance to distance
 If there's a nearest coin, move to its position. You'll need moveXY so you don't cut corners and hit a trap.

*/
