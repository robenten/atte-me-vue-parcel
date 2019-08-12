# atte-me-vue-parcel

[Vue](https://jp.vuejs.org/v2/guide/components.html) ＆ [Parcel](https://ja.parceljs.org) を使用してコンポーネントを作成する

## 設置

最初にプロジェクトディレクトリに移動します。

```bash
npm install
```

## 使い方

1. 開発環境を準備する

```bash
npm run dev
```

では、ブラウザで http&#58;//localhost:1234/example.html を開いてみましょう。

2. 本番用にビルドする

```bash
npm run build
```

では、distフォルダーを確認してください

## 独自のHTML要素を定義する

```html
<body>
  <div id="app">
    <welcome></welcome>
    <button-counter></button-counter>
    <vue-carousel></vue-carousel>
  </div>
</body>
```
