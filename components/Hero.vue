<template>
  <section class="hero">
    <div class="container">
      <h1 class="hero-title">Run. Build. Optimize.</h1>
      <p class="hero-subtitle">ランニングとテクノロジーで、日常とパフォーマンスを最適化する。</p>
    </div>
  </section>
</template>

<style scoped>
.hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  padding: 4rem 0;
  text-align: center;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.hero-title {
  font-size: 3rem;
  margin: 0 0 1rem;
  font-weight: 700;
}

.hero-subtitle {
  font-size: 1.25rem;
  margin: 0;
  opacity: 0.95;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: 1rem;
  }
}
</style>
