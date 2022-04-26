/**
 * カードデッキクラス
 */
 class Deck 
 {
   /**
    * @param {string[]} cards 文字列の配列
    */
   constructor(cards) {
     this.cards = [];
     this.cursor = 0; // デッキの開始位置
 
     cards.map((value) => {
       this.cards.push(value);
     })
   }
 
   /**
    * カードの残りの枚数
    */
   get count() {
     return this.cards.length - this.cursor;
   }
 
   /**
    * デッキが空かどうか
    */
   get isEmpty() {
     return (this.cards.length <= this.cursor);
   }
 
   /**
    * デッキに残っているカードの中からランダムなカードのIndexを取得する
    */
   random() {
     const min = this.cursor;
     const max = this.cards.length;
     return Math.floor(Math.random() * (max - min)) + min;
   }
 
   /**
    * ランダムにカードを1枚引く。
    * 引いたカードはthis.cursorが示す位置と内容を交換し、this.cursorを1増やす
    * 結果的に引いたカードは配列の先頭にあつまり、まだ引いていないカードの位置をthis.cursorが示す事になる。
    * this.cursorが配列のサイズを超えたとき、デッキにはカードが残っていない状態になる。
    */
   draw() {
     // デッキが空の場合はthis.cursorをリセット
     if (this.isEmpty) {
       this.cursor = 0;
     }
 
     const cardIndex = this.random();
     const card = this.cards[cardIndex];
 
     this.cards[cardIndex] = this.cards[this.cursor];
     this.cards[this.cursor] = card;
     this.cursor++;
 
     return card;
   }
 }