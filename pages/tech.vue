<template>
  <div class="page">
    <div class="container">
      <h1>Tech / Portfolio</h1>
      
      <section class="content">
        <p class="intro">
          Web開発やAPI連携など、個人開発の技術的な取り組みをまとめています。
        </p>

        <div class="tech-sections">
          <div class="tech-card">
            <h2>使用技術</h2>
            <ul>
              <li>フロントエンド: Vue.js, Nuxt.js, TypeScript</li>
              <li>バックエンド: Node.js, Python</li>
              <li>インフラ: Vercel, AWS</li>
              <li>データベース: PostgreSQL, MongoDB</li>
            </ul>
          </div>

          <div class="tech-card">
            <h2>開発プロジェクト</h2>
            <p>
              個人的なプロジェクトやOSS活動について、技術的な詳細や学んだことを記録していきます。
            </p>
            <p class="status">コンテンツ準備中</p>
          </div>

          <div class="tech-card">
            <h2>技術記事</h2>
            <p>
              実装の際に得た知見や、ハマったポイントの解決方法などを共有します。
            </p>
            <p class="status">近日公開予定</p>
          </div>
        </div>

        <div class="note">
          <p>技術的なコンテンツは順次追加していきます。</p>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Tech / Portfolio',
  meta: [
    { name: 'description', content: 'Web開発やAPI連携など、個人開発の技術的な取り組みのまとめ' }
  ]
});
</script>

<style scoped>
.page {
  padding: 3rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #2c3e50;
}

.intro {
  font-size: 1.25rem;
  line-height: 1.8;
  color: #555;
  margin-bottom: 3rem;
}

.tech-sections {
  display: grid;
  gap: 2rem;
  margin-bottom: 3rem;
}

.tech-card {
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 2rem;
}

.tech-card h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #2c3e50;
}

.tech-card p {
  font-size: 1.125rem;
  line-height: 1.6;
  color: #666;
  margin-bottom: 1rem;
}

.tech-card ul {
  font-size: 1.125rem;
  line-height: 1.8;
  color: #555;
  padding-left: 2rem;
}

.tech-card li {
  margin-bottom: 0.5rem;
}

.status {
  color: #3b82f6;
  font-weight: 600;
  font-size: 0.875rem;
}

.note {
  background: #f9fafb;
  border-left: 4px solid #3b82f6;
  padding: 1.5rem;
  border-radius: 4px;
}

.note p {
  margin: 0;
  color: #555;
  font-size: 1.125rem;
}
</style>
