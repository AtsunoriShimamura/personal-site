# shimamurun.dev

個人サイト - ランニングとテクノロジーのハブサイト

## 概要

Nuxt 3 + TypeScript + Nuxt Content で構築された個人サイトです。
ランニング関連のツール、ブログ、技術的な取り組みをまとめています。

## 技術スタック

- **フレームワーク**: Nuxt 3
- **言語**: TypeScript
- **コンテンツ管理**: @nuxt/content (Markdown)
- **デプロイ**: Vercel
- **ドメイン**: shimamurun.dev

## ローカル環境での起動

### 必要な環境

- Node.js 18.x 以上
- npm または yarn

### セットアップ

```bash
# 依存パッケージのインストール
npm install

# 開発サーバーの起動
npm run dev
```

開発サーバーは http://localhost:3000 で起動します。

### ビルド

```bash
# 本番用ビルド
npm run build

# ビルドしたサイトのプレビュー
npm run preview

# 静的サイトとして生成
npm run generate
```

## 記事の追加方法

### ブログ記事の作成

1. `content/blog/` ディレクトリに Markdown ファイルを作成
2. ファイル名が URL のスラッグになります（例: `my-article.md` → `/blog/my-article`）
3. frontmatter に以下の情報を記載:

```markdown
---
title: 記事のタイトル
description: 記事の概要（一覧ページやSEOに使用）
date: 2026-01-15
tags: [タグ1, タグ2]
draft: false
---

# 記事の本文

ここに記事の内容を書きます。
```

### frontmatter の説明

- `title`: 記事のタイトル（必須）
- `description`: 記事の概要（必須）
- `date`: 公開日（YYYY-MM-DD形式、必須）
- `tags`: タグの配列（任意）
- `draft`: `true` に設定すると下書きとして扱われ、一覧に表示されません

### 記事の確認

開発サーバーを起動している状態で、以下の URL にアクセス:

- 記事一覧: http://localhost:3000/blog
- 記事詳細: http://localhost:3000/blog/[スラッグ名]

## デプロイ

### Vercel へのデプロイ

1. GitHub リポジトリを Vercel に接続
2. ビルドコマンド: `npm run build`
3. 出力ディレクトリ: `.output/public`
4. 環境変数（必要に応じて設定）:
   - `NUXT_PUBLIC_SITE_URL`: サイトの URL（例: https://shimamurun.dev）

### 環境変数

`.env.example` をコピーして `.env` を作成し、必要な値を設定してください。

```bash
cp .env.example .env
```

## ディレクトリ構成

```
.
├── app.vue                 # アプリケーションのルート
├── nuxt.config.ts          # Nuxt 設定ファイル
├── assets/
│   └── css/
│       └── main.css        # グローバル CSS
├── components/             # Vue コンポーネント
│   ├── AppHeader.vue       # ヘッダー
│   ├── AppFooter.vue       # フッター
│   ├── Hero.vue            # ヒーローセクション
│   └── CardLink.vue        # カードリンクコンポーネント
├── layouts/
│   └── default.vue         # デフォルトレイアウト
├── pages/                  # ページコンポーネント
│   ├── index.vue           # トップページ
│   ├── about.vue           # About ページ
│   ├── apps.vue            # Apps ページ
│   ├── tech.vue            # Tech ページ
│   └── blog/
│       ├── index.vue       # ブログ一覧
│       └── [slug].vue      # ブログ記事詳細
├── content/
│   └── blog/               # ブログ記事（Markdown）
├── public/                 # 静的ファイル
│   ├── robots.txt          # robots.txt
│   └── og/
│       └── default.png     # OGP デフォルト画像
└── README.md
```

## ライセンス

All rights reserved.

