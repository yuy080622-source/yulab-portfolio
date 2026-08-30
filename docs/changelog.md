# Changelog

## 2026-08-30（GA4導入）

- 全公開HTML（`index.html`、`privacy.html`）へGoogle Analytics 4を導入（測定ID: `G-M5FPMG34LE`）
- GA4は標準計測のみとし、カスタムイベントは追加していない
- Google Analytics利用に合わせて、トップページの分析ツール表記とプライバシーポリシーを最小更新
- Microsoft Clarity、既存カスタムイベント、作品・GitHub・X・CTAリンクは変更なし

## 2026-08-29（プライバシー表記）

- Microsoft Clarityの利用、取得する行動データ、利用目的を説明する`privacy.html`を追加
- トップページのフッターにアクセス分析の説明とプライバシーポリシー導線を追加
- プライバシーポリシーへの遷移を`open_privacy`イベントで計測

## 2026-08-29

- PRJ-004専用Microsoft Clarity（Project ID: `y9t440xzdg`）を導入
- Clarity本体を `js/clarity.js` で一元管理
- 制作物一覧、各作品、GitHub、Xのクリックイベントを追加
- 既存デザインと各アプリの公開先は変更なし

## 2026-08-25

- PRJ-004初期版を実装
- 公開済み5カードを掲載
- レスポンシブ、アクセシビリティ、OGPを設定
