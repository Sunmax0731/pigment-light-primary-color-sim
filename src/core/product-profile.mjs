export const productProfile = {
  "repo": "pigment-light-primary-color-sim",
  "title": "顔料と光の三原色シミュレーター",
  "domain": "Game",
  "version": "0.1.0-alpha.1",
  "rank": 43,
  "tier": "P2",
  "score": 58,
  "publicTarget": "GitHub Pages / BOOTH",
  "overview": "顔料を溶かした絵の具を混ぜる減法混色と、照明を重ねる加法混色を、流体、拡散、濃度、照射範囲の物理シミュレーションを使って学ぶ。課題モードでは指定色を顔料や光で再現し、混色過程、RGB/CMYK、補色、明度、彩度の違いを観察できる。",
  "problem": "色の三原色と光の三原色は混同しやすく、教科書や静止図だけでは、混ぜ方、濃度、照明条件による違いを体感しにくい。",
  "differentiation": "減法混色と加法混色を同じ画面で比較し、物理的な混ざり方と色彩理論を遊びながら結びつける。",
  "modules": [
    "src/core",
    "src/validators",
    "src/report",
    "src/review-model",
    "src/cli",
    "app",
    "src/game",
    "src/content"
  ],
  "manualTestStatus": "not-run",
  "qcdsGrades": {
    "Quality": "S-",
    "Cost": "A+",
    "Delivery": "A+",
    "Satisfaction": "S-"
  },
  "securityBoundaries": [
    "GitHub Pages向け静的Webとして外部API、課金、ランキング送信、ユーザー投稿公開をclosed alphaでは扱わない。",
    "レベルや課題データはsamples配下に閉じ、素材は自作の軽量SVGだけを同梱する。",
    "BOOTH配布前に著作権、年齢表現、保存データの説明を確認する。"
  ]
};
