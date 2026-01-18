<template>
  <div class="page">
    <div class="container">
      <h1>About</h1>
      
      <section class="content">
        <h2>プロフィール</h2>
        <p>
          技術職として働きながらランニングを継続中。『どうすれば無駄を減らせるか』を走りとコードの両方で考えるのが好きです。このサイトはその試行錯誤の記録であり、実験場です。
        </p>

        <h2>このサイトについて</h2>
        <p>
          shimamurun.dev は、ランニングとテクノロジーを融合させた個人的なハブサイトです。
          日々のランニングで得た知見、開発したツール、そして技術的な実験の記録を共有しています。
        </p>

        <h2>興味・関心</h2>
        <ul>
          <li>ランニング（マラソン、トレーニング理論、ペース設計）</li>
          <li>Web開発（フロントエンド、バックエンド、API設計）</li>
          <li>パフォーマンス最適化（コードとランニングの両方）</li>
          <li>個人開発（アイデアから実装まで）</li>
        </ul>

        <h2>連絡先</h2>
        <p>
          お問い合わせやフィードバックがありましたら、お気軽にご連絡ください。
        </p>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'About',
  meta: [
    { name: 'description', content: '技術職として働きながらランニングを継続中。走りとコードの両方で最適化を追求しています。' }
  ]
});
</script>

<style scoped>
.page {
  padding: 3rem 0;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #2c3e50;
}

.content h2 {
  font-size: 1.75rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: #2c3e50;
}

.content p {
  font-size: 1.125rem;
  line-height: 1.8;
  color: #555;
  margin-bottom: 1.5rem;
}

.content ul {
  font-size: 1.125rem;
  line-height: 1.8;
  color: #555;
  margin-bottom: 1.5rem;
  padding-left: 2rem;
}

.content li {
  margin-bottom: 0.5rem;
}
</style>
