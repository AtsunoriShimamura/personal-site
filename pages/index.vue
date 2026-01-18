<template>
  <div>
    <Hero />
    
    <section class="sections">
      <div class="container">
        <div class="cards-grid">
          <CardLink
            title="Running Tools"
            description="ランニングコース検索などの支援アプリ"
            to="/apps"
          />
          <CardLink
            title="Running Blog"
            description="トレーニングやペース設計の知見"
            to="/blog"
          />
          <CardLink
            title="Tech / Portfolio"
            description="Web開発やAPI連携など個人開発の技術まとめ"
            to="/tech"
          />
        </div>
      </div>
    </section>

    <section class="about-preview">
      <div class="container">
        <h2>About</h2>
        <p>
          技術職として働きながらランニングを継続中。『どうすれば無駄を減らせるか』を走りとコードの両方で考えるのが好きです。このサイトはその試行錯誤の記録であり、実験場です。
        </p>
        <NuxtLink to="/about" class="read-more">詳しく見る →</NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Home',
  meta: [
    { name: 'description', content: 'ランニングとテクノロジーで、日常とパフォーマンスを最適化する。' }
  ]
});
</script>

<style scoped>
.sections {
  padding: 4rem 0;
  background: #f9fafb;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.about-preview {
  padding: 4rem 0;
}

.about-preview h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #2c3e50;
}

.about-preview p {
  font-size: 1.125rem;
  line-height: 1.8;
  color: #555;
  margin-bottom: 1.5rem;
}

.read-more {
  color: #3b82f6;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s;
}

.read-more:hover {
  color: #2563eb;
}
</style>
