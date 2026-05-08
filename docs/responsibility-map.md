# 責務分割

- Repo: `pigment-light-primary-color-sim`
- Domain: Game
- Rank: 43 / P2 / Score 58
- Idea No: 9
- アイデア名: 顔料と光の三原色シミュレーター
- 公開先: GitHub Pages / BOOTH
- Version: 0.1.0-alpha.1

| 領域 | 責務 |
| --- | --- |
| `src/core` | ドメイン判定 |
| `src/validators` | 入力検証 |
| `src/report` | 結果整形 |
| `src/review-model` | QCDS評価 |
| `src/cli` | CLI入口 |
| `app` | UI |
| `src/game` | 境界adapter |
| `src/content` | 境界adapter |

coreはDOM、GitHub、実機に依存させない。adapterは将来の実機、Android、LAN連携を差し替える境界とする。
