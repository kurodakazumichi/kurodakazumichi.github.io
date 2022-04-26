# ランダム用語アプリ

- 色んな用語をランダムに表示するだけのアプリ
- 数学Ⅰ・A、基本情報などいろんなジャンルを用意



## 要件

- 数学は数式を表示できるようにする
- ボタンを押したらランダムで用語が表示される



## 構成

```
app
┣ deck.js       ... ランダムに用語を取り出すためのクラス
┣ mathjax.js    ... mathjax用の設定など
┣ style.css     ... スタイル
┣ math1a        ... 数学Ⅰ・A
┃ ┣ index.html
┃ ┗ word.js
┣ basicinfo     ... 基本情報
┃ ┣ index.html
┃ ┗ word.js
...
```

- 用語集アプリはジャンルごとにフォルダが別れる
- 新しいジャンルを追加する場合は同じ構成で追加していける



## 数式の表示

ブラウザ上に数式を表示するために`MathJax`というJSライブラリを使用する。

### 導入

- `<head>`内に以下のタグを埋め込む

- 以下の方法は簡単だがあらゆるコンポーネントが組み込まれた大きなファイルである

  (MathJaxは機能ごとに細かくコンポーネントに別れていて個別に導入も可能)

- `mathjax@3`と記述するとCDNで公開されている最新版(3.x.x)を取得する

```html
<script type="text/javascript" id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">
```



## デリミタの変更

- MathJaxを読み込むより前に以下のコードを埋め込む
- MathJaxのデフォルトデリミタは`\[`,`\]`だけど、以下のコードを読みこめば`$`が使えるようになる

```html
<script>
  MathJax = {
    tex: {
      inlineMath: [['$', '$']]
    }
  }
</script>
```



数式をインラインで表示する場合：

```
$
x = -\frac{b}{a}
$
```



ブロックで表示する場合：

```
$$
x = -\frac{b}{a}
$$
```



## 動的に利用する場合

- 通常だとMathJaxは読み込まれたタイミングで自動的にページの内容を数式表示する
- 任意のタイミングで任意の要素だけ数式にしたい場合は`MathJax.typesetPromise()`を使う



### 例

ボタンが押されたタイミングでページ全体を評価：

```html
<div id="tex1"></div>
<div id="tex2"></div>
<button onclick="typeset()">数式表示</button>
<script>
function typeset() {
  
  const tex1 = document.getElementById("tex1");
  const tex2 = document.getElementById("tex2");
  tex1.innerText = tex2.innerText = "$1+1=2$";

  // 引数を指定しない場合、ページ全体を評価
  MathJax.typesetPromise();
}
</script>
```



ボタンが押されたタイミングで`tex1`のみを評価する場合：

```js
MathJax.typesetPromise([tex1]);
```



ボタンが押されたタイミングで`tex1, tex2`を評価する場合：

```js
MathJax.typesetPromise([tex1, tex2]);
```



**Notice**：

- Texは方程式に自動で番号を振る機能がある
- `MathJax.typesetPromise()`をしたときにこの番号が追加、削除されるなどで問題が起こる事がある
- 対処方法として`typesetPromise()`をする前に、`MathJax.texReset()`を呼ぶ

```html
<div id="tex1"></div>
<div id="tex2"></div>
<button onclick="typeset()">数式表示</button>
<script>
function typeset() {
  
  const tex1 = document.getElementById("tex1");
  const tex2 = document.getElementById("tex2");
  tex1.innerText = tex2.innerText = "$1+1=2$";

  MathJax.texReset();
  MathJax.typesetPromise();
}
</script>
```



## 参考サイト

- [Gegging Start with MathJax](https://docs.mathjax.org/en/latest/web/start.html)
- [MathJax3について調べたこと。](https://www.gesource.jp/weblog/?p=8502)
- [おすすめなMathJax3の使い方](https://umemotoctrl.github.io/?id=others:MathjaxUsage)