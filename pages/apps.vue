<template>
  <div class="page">
    <div class="container">
      <h1>Running Apps</h1>
      
      <section class="content">
        <p class="intro">
          ランニングをもっと楽しく、効率的にするための支援アプリケーションを開発しています。
        </p>

        <div class="apps-list">
          <div class="app-card">
            <h2>ランニングコース検索</h2>
            <p>
              距離や地形、景観などの条件から最適なランニングコースを見つけることができます。
            </p>
            <p class="status">準備中</p>
          </div>

          <div class="app-card">
            <h2>ペース計算ツール</h2>
            <p>
              目標タイムやレースペースの計算、トレーニングペースの設定をサポートします。
            </p>
            <p class="status">準備中</p>
          </div>

          <div class="app-card">
            <h2>トレーニングログ</h2>
            <p>
              日々のランニング記録を管理し、パフォーマンスの推移を可視化します。
            </p>
            <p class="status">準備中</p>
          </div>
        </div>

        <div class="note">
          <p>各アプリケーションは順次公開予定です。お楽しみに！</p>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Running Apps',
  meta: [
    { name: 'description', content: 'ランニングをもっと楽しく、効率的にするための支援アプリケーション' }
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

.apps-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.app-card {
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 2rem;
}

.app-card h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #2c3e50;
}

.app-card p {
  font-size: 1.125rem;
  line-height: 1.6;
  color: #666;
  margin-bottom: 1rem;
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
