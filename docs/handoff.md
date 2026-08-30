# Handoff

## 2026-08-30 GA4導入

- 変更ファイル: `index.html`、`privacy.html`、`docs/handoff.md`、`docs/changelog.md`
- GA4実装: 全公開HTML（`index.html`、`privacy.html`）の`<head>`上部にGoogle tagを追加（測定ID: `G-M5FPMG34LE`、標準計測のみ）
- 二重計測防止: 導入前に既存Google tag / GA4が存在しないことを確認し、各ページのタグと`config`が各1件であることを検証
- Clarity: `js/clarity.js`（Project ID: `y9t440xzdg`）および既存カスタムイベント処理は変更なし
- プライバシー表記: Google Analyticsの利用、取得情報、Googleによる取り扱い、個人を直接特定する情報を意図的に送信しない旨を最小追記。トップページの分析ツール表記も更新
- テスト結果: HTML構造・GA4設定数・Clarity残存・リンク不変・JS構文・差分チェックPASS。実ブラウザでPC 1280px / モバイル 390pxの表示、横あふれなし、作品カード5件、CTA、プライバシーページを確認
- GitHub Pages公開状態: `main`へ反映済み。公開中の`index.html`と`privacy.html`でGA4タグ、Clarity、プライバシー表記を確認し、Google tag配信先のHTTP 200を確認
- GA4リアルタイム受信: GA4管理画面でPM確認が必要
- 残課題: GA4 Realtime受信のPM確認
- 保留事項: GA4カスタムイベント追加（今回は対象外）

## 既存仕様

- 初期公開作品5件を掲載
- 作品データは `js/projects.js` に集約
- 穴埋めノートのGitHubは非公開のため非表示
- スマートフォン最優先、reduced-motion対応
- PRJ-004専用Clarityを `js/clarity.js` から読み込み（Project ID: `y9t440xzdg`）
- カスタムイベント: `view_works`、`open_app_001`、`open_prj_003`、`open_app_003`、`open_app_006`、`open_app_002`、`open_github_prj_003`、`open_social_x`、`open_privacy`
- 今後は代表画像、Instagram、note、問い合わせ導線を順次追加
