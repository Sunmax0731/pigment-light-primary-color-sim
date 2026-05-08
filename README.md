# pigment-light-primary-color-sim

顔料と光の三原色シミュレーター の closed alpha prototype。顔料を溶かした絵の具を混ぜる減法混色と、照明を重ねる加法混色を、流体、拡散、濃度、照射範囲の物理シミュレーションを使って学ぶ。課題モードでは指定色を顔料や光で再現し、混色過程、RGB/CMYK、補色、明度、彩度の違いを観察できる。

## Status

- Version: 0.1.0-alpha.1
- Rank: 43 / P2 / Score 58
- Domain: Game
- Public target: GitHub Pages / BOOTH
- Manual testing: not run by Codex

## Included

- static web playable prototype
- core / validators / report / review-model / CLI / UI の責務分割
- happy-path、missing-required、warning、mixed-batch の代表suite
- QCDS、security/privacy、release evidence、docs ZIP

## Commands

```powershell
npm test
npm run serve -- --port 4173
```

Open `http://localhost:4173/app/` for the closed alpha UI.
