
loop {
    var coins = this.findItems();
    var coinIndex = 0;
    while (coinIndex < coins.length){
        var coin = coins[coinIndex];
        coinIndex ++;
        if (coin.value == 3) {   
            this.moveXY(coin.pos.x,coin.pos.y);
        }
    }
}

/*
so the statement coinindex <coins.length is just saying as long as the index number is not the same number as the amount of coins/items found
or another way of saying that is as long as there is still coins to scan. If the the index is the same number as the items.length  because of the ++ per loop it
means all items have been scanned.

 To grab the most gold quickly, just go after gold coins.
 Wrap this into a loop that iterates over all coins.
 Gold coins are worth 3.
 Only pick up gold coins.

 var coins = this.findItems();
 var coinIndex = 0;

 while(coinIndex < coins.length) {
  var coin = coins[coinIndex];
  this.moveXY(coin.pos.x, coin.pos.y)
  coinIndex += 1;
}
*/
