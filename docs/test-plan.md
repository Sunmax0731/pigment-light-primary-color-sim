# テスト計画

- Repo: `pigment-light-primary-color-sim`
- Domain: Game
- Rank: 43 / P2 / Score 58
- Idea No: 9
- アイデア名: 顔料と光の三原色シミュレーター
- 公開先: GitHub Pages / BOOTH
- Version: 0.1.0-alpha.1

## 自動テスト
- Command: `npm test`
- Working directory: `D:\AI\Game\pigment-light-primary-color-sim`
- Expected: `dist/validation-result.json`、`dist/web-smoke-result.json`、`dist/pigment-light-primary-color-sim-docs.zip` が生成される。

## 代表シナリオ
| ID | 期待 |
| --- | --- |
| happy-path | pass |
| missing-required | fail |
| warning | warning |
| mixed-batch | fail |

## 手動テスト
Codex側では未実施。手順はmanual-testとstrict addendumに記載。
