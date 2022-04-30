// 数学用語の配列
const WORDS = [
  // あ行
  "余り",
  "1次関数",
  "1次不等式",
  "1次不定方程式",
  "1次不等式",
  "1次方程式",
  "一般形",
  "因数",
  "因数分解",
  "上に凸",
  "裏",
  "$n$次式",
  "$n$乗",
  "$n$進数",
  "$n$進法",
  "円周角",
  "円周角の定理",
  "円周角の定理の逆",
  "円順列",
  "オイラーの多面体定理",
  "大きさ(データ)",
  "解",
  "階級",
  "階級値",
  "階級の幅",
  "階乗",
  "外心",
  "外接円",
  "外接円(多角形)",
  "外接する(2つの円)",
  "解の公式",
  "外分する",
  "確立",
  "仮定",
  "加法定理(確率)",
  "仮平均",
  "関数",
  "間接証明法",
  "完全順列",
  "偽",
  "期待値",
  "基本形",
  "基本作図",
  "基本対称式",
  "逆",
  "既約分数",
  "仰角",
  "共通解",
  "共通接線(2つの円)",
  "共通部分",
  "共分散",
  "空事象",
  "空集合",
  "組み合わせ",
  "位取り記数法",
  "グラフ",
  "係数",
  "結論",
  "元",
  "原因の確立",
  "減少する",
  "原点",
  "項",
  "合成数",
  "交線(2平面)",
  "交代式",
  "合同(整数)",
  "合同式",
  "公倍数",
  "降べきの順",
  "公約数",
  "cosine",
  "互除法",
  "根元事象",
  "根号",
  // さ行
  "最小公倍数",
  "最小値",
  "最大公約数",
  "最大値",
  "最頻値",
  "sine",
  "三角形の要素",
  "三角比",
  "三垂線の定理",
  "散布図",
  "軸",
  "試行",
  "事象",
  "辞書式配列法",
  "指数",
  "次数",
  "指数法則",
  "自然数",
  "四則",
  "下に凸",
  "実数解",
  "四分位数",
  "四分位範囲",
  "四分位偏差",
  "斜辺",
  "重解",
  "集合",
  "重心",
  "十分条件",
  "樹形図",
  "じゅず順列",
  "循環小数",
  "順列",
  "商(割り算)",
  "条件",
  "条件式",
  "条件付き確率",
  "小数部分",
  "昇べきの順",
  "乗法定理(確率)",
  "真",
  "垂心",
  "垂線(直線と平面)",
  "垂直(空間の2直線)",
  "垂直(直線と平面)",
  "垂直(2平面)",
  "数直線",
  "正弦",
  "正弦定理",
  "整式",
  "正四面体",
  "正十二面体",
  "整数",
  "整数解(1次不定方程式)",
  "整数部分",
  "正接",
  "正多面体",
  "正十二面体",
  "正の相関",
  "正八面体",
  "正六面体",
  "積事象",
  "積の法則",
  "接弦定理",
  "接弦定理の逆",
  "接する",
  "接する(円と直線)",
  "接する(2つの円)",
  "接線",
  "接線の長さ",
  "絶対値",
  "絶対不等式",
  "接点",
  "接点(円と直線)",
  "接点(2つの円)",
  "全事象",
  "全体集合(集合)",
  "全体集合(命題)",
  "素因数",
  "素因数分解",
  "素因数分解の一意性",
  "増加する",
  "相加平均",
  "相関が強い",
  "相関がない",
  "相関が弱い",
  "相関関係がない",
  "相関係数",
  "相似法(作図)",
  "属する",
  "素数",
  // た行
  "第一四分位数",
  "第一余弦定理",
  "第二四分位数",
  "第二余弦定理",
  "第三四分位数",
  "対角",
  "対偶",
  "対象移動",
  "対称式",
  "代表値",
  "対辺",
  "互いに素",
  "多角形",
  "多項式",
  "たすきがけ",
  "多面体",
  "単位円",
  "単項式",
  "tangent",
  "値域",
  "チェバの定理",
  "チェバの定理の逆",
  "中央値",
  "中線",
  "中線定理",
  "中点連結定理",
  "頂点",
  "重複組み合わせ",
  "重複順列",
  "直交(空間の2直線)",
  "直交(直線と平面)",
  "直交(2平面)",
  "底($n$進法)",
  "定義域",
  "定数項",
  "データ",
  "展開する",
  "転換法",
  "動径",
  "同値",
  "同様に確からしい",
  "同類項",
  "解く",
  "独立",
  "度数",
  "度数分布表",
  "凸多面体",
  "ド・モルガンの法則",

  // 内心
  "内心",
  "内接円",
  "内接する(多角形)",
  "内接する(2つの円)",
  "内分する",
  "2次関数",
  "2次不等式",
  "2次方程式",
  "2重根号",
  "2進法",
  "2直線のなす角(空間)",
  "2平面のなす角",
  // は行
  "排反",
  "排反事象",
  "背理法",
  "箱ひげ図",
  "範囲",
  "反復試行",
  "判別式",
  "反例",
  "ヒストグラム",
  "必要十分条件",
  "必要条件",
  "否定",
  "等しい(集合)",
  "非復元抽出",
  "標準偏差",
  "比例式",
  "俯角",
  "復元抽出",
  "複合",
  "複2次式",
  "含まれる",
  "含む",
  "不等式",
  "負の相関",
  "部分集合",
  "分散",
  "分配法則",
  "分布",
  "分母の有理化",
  "平均値",
  "平行移動",
  "平方完成",
  "平方根",
  "平方数",
  "ヘロンの公式",
  "変域",
  "変換(変量)",
  "偏差",
  "ベン図",
  "変数",
  "変量",
  "法(合同式)",
  "方程式",
  "放物線",
  "放物線の方程式",
  "方べき",
  "方べきの定理",
  "方べきの定理の逆",
  "補集合",
  // ま行
  "無限小数",
  "無理数",
  "命題",
  "メジアン",
  "メネラウスの定理",
  "モード",
  // や行
  "ユークリッドの互除法",
  "有限小数",
  "有理数",
  "要素",
  "余弦",
  "余弦定理",
  "余事象",
  // ら行
  "立方数",
  "輪環の順",
  "隣辺",
  "累乗",
  "連比",
  "連立3元1次方程式",
  "連立不等式",
  // わ行
  "和事象",
  "和集合",
  "和の法則",
  "割り切れない",
  "割り切れる  ",
  // 記号
  "$a^n$",
  "$\\cdot$",
  "$|a|$",
  "$\\sqrt{a}$",
  "$\\pm$",
  "$\\neq$",
  "$\\in$",
  "$\\notin$",
  "$\\subset$",
  "$\\supset$",
  "$=(集合)$",
  "$\\cap$",
  "$\\cup$",
  "$\\phi$",
  "$\\bar{A}$",
  "$p \\implies q$",
  "$p \\iff q$",
  "$\\bar{p}$",
  "$f(x), f(a)$",
  "$D$",
  "$sin\\theta, cos\\theta, tan\\theta$",
  "$\\fallingdotseq$",
  "$sin^2\\theta, cos^2\\theta, tan^2\\theta,$",
  "$\\bar{x}$",
  "$Q_1, Q_2, Q_3$",
  "$n(A)$",
  "$n!$",
  "$_nP_r$",
  "$_nC_r$",
  "$_nH_r$",
  "$P(A)$",
  "$l /\\!/ m$",
  "$l \\perp m$",
  "$l /\\!/ a$",
  "$\\alpha /\\!/ \\beta$",
  "$l \\perp \\alpha$",
  "$\\alpha \\perp \\beta$",
  "$G.C.M.$",
  "$L.C.M.$",
  "$\\equiv$",
  "$mod  $",
];