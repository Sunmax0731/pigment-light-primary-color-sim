# 要件定義

- Repo: `pigment-light-primary-color-sim`
- Domain: Game
- Rank: 43 / P2 / Score 58
- Idea No: 9
- アイデア名: 顔料と光の三原色シミュレーター
- 公開先: GitHub Pages / BOOTH
- Version: 0.1.0-alpha.1

## 背景
顔料を溶かした絵の具を混ぜる減法混色と、照明を重ねる加法混色を、流体、拡散、濃度、照射範囲の物理シミュレーションを使って学ぶ。課題モードでは指定色を顔料や光で再現し、混色過程、RGB/CMYK、補色、明度、彩度の違いを観察できる。

## 課題
色の三原色と光の三原色は混同しやすく、教科書や静止図だけでは、混ぜ方、濃度、照明条件による違いを体感しにくい。

## closed alpha要件
- static web playable prototypeとして実機や本番外部サービスなしで代表フローを確認できる。
- `samples/representative-suite.json`で4代表シナリオを自動検証する。
- MVPだけで止めず、UI/UX、責務分割、運用、配布準備まで整備する。
- 手動テスト未実施を明記し、QCDS最高評価はS-に制限する。
