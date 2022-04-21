// プレイヤーのカード最大枚数
const PLAYER_CARD_MAX = 4;

/**
 * カードデッキクラス
 */
class Deck 
{
  constructor() {
    this.cards = [];
    this.cursor = 0; // デッキの開始位置

    Cards.map((value) => {
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

/**
 * ゲーム
 */
class Game {
  constructor(deck) {
    this.deck = deck;
    this.count = 0;

    // dom取得
    this.dom = {
      cards: document.getElementById("cards"),
      draw : document.getElementById("btn-draw"),  // DRAW!ボタン
      reset: document.getElementById("btn-reset"), // RESETボタン
    }

    // イベント設定
    this.dom.draw.addEventListener("click", () => {
      this.draw();
    })

    this.dom.reset.addEventListener("click", () => {
      this.reset();
    })

    // プレイヤー生成時(ゲーム開始時)はリセットボタンを非表示にしておく
    this.hideReset();
  }

  /**
   * カードを最大枚数引いていっぱいになってる
   */
  get isFulled() {
    return (PLAYER_CARD_MAX <= this.count);
  }

  draw() 
  {
    // もうカードがいっぱいなら引かない
    if (this.isFulled) return;

    // 新たにカードを引く
    const card = document.createElement("div");
    card.className = "card";
    card.innerText = deck.draw();
    this.dom.cards.appendChild(card);
    this.count++;

    // 最大まで引いたらリセットボタンを表示
    if (this.isFulled) {
      this.showReset();
    }
  }

  reset() {
    this.count = 0;
    this.dom.cards.innerHTML = "";
    this.hideReset();
  }

  showReset() {
    this.dom.reset.style = "";
  }

  hideReset() {
    this.dom.reset.style = "display:none;";
  }
}

const deck = new Deck();
const game = new Game(deck);