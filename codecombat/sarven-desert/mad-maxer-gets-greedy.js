
loop {
    var bestCoin = null;
    var maxRating = 0;
    var coinIndex = 0;
    var coins = this.findItems();
    while (coinIndex < coins.length){
        var coin = coins[coinIndex];
        coinIndex ++;
        var distance = this.distanceTo(coin);
        var coinValue = coin.value;
        if (coinValue / distance > maxRating && coin.pos.x < 40){
            bestCoin = coin;
            maxRating = coinValue / distance ;
        }
    }
    if (bestCoin) {
        var enemy = this.findNearest(this.findEnemies());
        if ( this.distanceTo(enemy)  < 15 && this.isReady("electrocute")){
            this.electrocute(enemy);
        }
        else {
            this.moveXY(bestCoin.pos.x,bestCoin.pos.y);
        }
    }
}

/*
 Collect more coins than your doppelganger.
 You only have a few seconds to collect coins. Choose your path wisely!
 Try calculating "value / distance" to decide which coins to get.

*/
