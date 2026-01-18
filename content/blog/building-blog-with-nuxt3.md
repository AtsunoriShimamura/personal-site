---
title: Nuxt 3でブログを構築した話
description: Nuxt 3 + Nuxt Content で個人ブログを構築。技術選定から実装まで、実際に試して分かったことをまとめました。
date: 2026-01-10
tags: [Web開発, Nuxt, TypeScript]
draft: false
---

# Nuxt 3でブログを構築した話

このサイトを Nuxt 3 + Nuxt Content で構築しました。その過程で得た知見を共有します。

## なぜ Nuxt 3 を選んだのか

静的サイトジェネレーターは多数ありますが、Nuxt 3 を選んだ理由は以下の通りです。

1. **Vue.js の知見を活かせる**  
   普段から Vue を使っているため、学習コストが低い

2. **Nuxt Content が強力**  
   Markdown でのコンテンツ管理が簡単で、frontmatter もサポート

3. **柔軟な展開が可能**  
   静的サイトとして生成も、SSR も選択できる

## 実装のポイント

### TypeScript の導入

Nuxt 3 は TypeScript がデフォルトでサポートされています。

```typescript
// pages/blog/[slug].vue
const { data: article } = await useAsyncData(`blog-${slug}`, () =>
  queryContent('/blog', slug).findOne()
);
```

型安全性が高く、開発体験が良好です。

### SEO 対策

`nuxt.config.ts` で基本的な SEO 設定を行い、各ページで `useHead()` を使用してメタ情報を設定しています。

```typescript
useHead({
  title: article.value?.title || 'Article',
  meta: [
    { name: 'description', content: article.value?.description || '' }
  ]
});
```

### コンテンツのクエリ

Nuxt Content の `queryContent()` は強力で、柔軟なクエリが可能です。

```typescript
// draft を除外して、日付降順で取得
const articles = await queryContent('/blog')
  .where({ draft: { $ne: true } })
  .sort({ date: -1 })
  .find();
```

## つまずいたポイント

### 1. Nuxt 4 との互換性

Nuxt 4 が間もなくリリースされるため、互換性に注意が必要でした。
`compatibilityDate` を設定することで対応しています。

### 2. 画像の最適化

現状は素の HTML で実装していますが、今後 `@nuxt/image` の導入を検討中です。

## パフォーマンス

Vercel にデプロイした結果:
- ビルド時間: 約 30 秒
- ページロード: 1 秒以内
- Lighthouse スコア: 95+ (デスクトップ)

静的生成のため、高速なサイトが実現できました。

## まとめ

Nuxt 3 は開発体験が良く、パフォーマンスも優れています。
個人サイトやブログには最適な選択肢だと感じました。

次は「Vercel でのデプロイ戦略」について書く予定です。
