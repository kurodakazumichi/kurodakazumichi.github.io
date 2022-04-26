/** Mathjaxの設定やUtilを定義しておく */
MathJax = {
  tex: {
    inlineMath: [['$', '$']]
  }
}

/**
 * MathJaxの再評価
 */
function MathJaxTypeset() {
  // 動的にページを変更する場合、TeXの自動採番がうまく振りなおされない事があるのでResetをしておく。
  MathJax.texReset();
  MathJax.typesetPromise();   
}