// プレイヤーのカード最大枚数
const PLAYER_CARD_MAX = 4;

/**
 * カードデッキクラス
 */
class Deck 
{
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
   * デッキを仕切りなおす
   */
  resume() {
    this.cursor = 0;
  }

  /**
   * ランダムにカードを1枚引く。
   * 引いたカードはthis.cursorが示す位置と内容を交換し、this.cursorを1増やす
   * 結果的に引いたカードは配列の先頭にあつまり、まだ引いていないカードの位置をthis.cursorが示す事になる。
   * this.cursorが配列のサイズを超えたとき、デッキにはカードが残っていない状態になる。
   */
  draw() {
    // デッキが空の場合はthis.cursorを仕切りなおす
    if (this.isEmpty) {
      this.resume();
    }

    const cardIndex = this.random();
    const card = this.cards[cardIndex];

    this.cards[cardIndex] = this.cards[this.cursor];
    this.cards[this.cursor] = card;
    this.cursor++;

    return card;
  }

  /**
   * 残りのカードから引く可能性のあるカード候補を一枚っ取得
   * @returns 
   */
  getCandidate() {
    return this.cards[this.random()];
  }
}

/**
 * ゲーム
 */
class Game {
  constructor(deck) {
    this.deck = deck;
    this.count = 0;
    this.rouletteFrame = 0;
    this.currentCard = null;

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

  /**
   * ルーレット中かどうか
   */
  get isDuringRoulette() {
    return (0 < this.rouletteFrame);
  }

  draw() 
  {
    // もうカードがいっぱいなら引かない
    if (this.isFulled) return;

    // ルーレット中は引かない
    if (this.isDuringRoulette) return;

    // 一枚目のカードを引くときにデッキの枚数が1回分に見たない場合はデッキを仕切りなおす
    if (this.count === 0 && deck.count <= PLAYER_CARD_MAX) {
      deck.resume();
    }

    // 新たにカードを引く
    const card = document.createElement("div");
    card.className = "card";
    this.dom.cards.appendChild(card);
    this.currentCard = card;
    this.count++;

    this.rouletteFrame = 30;
    this.roulette();
  }

  reset() {
    this.count = 0;
    this.dom.cards.innerHTML = "";
    this.hideReset();
  }

  roulette() 
  {
    // ルーレット中でなければ終了
    if (!this.isDuringRoulette) return;

    this.currentCard.innerText = this.deck.getCandidate();
    this.rouletteFrame--;

    // ルーレット終了時にちゃんとカードを引く
    if (!this.isDuringRoulette) {
      this.currentCard.innerText = this.deck.draw();
    }

    // 最後のカードを引いてルーレットが終わったタイミングでリセットボタンを表示
    if (this.isFulled && !this.isDuringRoulette) {
      this.showReset();
    }    

    requestAnimationFrame(this.roulette.bind(this));
  }  

  showReset() {
    this.dom.reset.style = "";
  }

  hideReset() {
    this.dom.reset.style = "display:none;";
  }
}

const deck = new Deck(Cards);
const game = new Game(deck);