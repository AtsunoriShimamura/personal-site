<template>
  <div class="page">
    <div class="container">
      <h1>Blog</h1>
      
      <div v-if="!articles" class="loading">読み込み中...</div>
      
      <div v-else-if="articles && articles.length > 0" class="articles-list">
        <article 
          v-for="article in articles" 
          :key="article._path"
          class="article-card"
        >
          <NuxtLink :to="`/blog/${article.stem.replace('blog/', '')}`" class="article-link">
            <h2>{{ article.title }}</h2>
            <p class="description">{{ article.description }}</p>
            <div class="meta">
              <time v-if="article.meta?.date" :datetime="article.meta.date">{{ formatDate(article.meta.date) }}</time>
              <div v-if="article.meta?.tags && article.meta.tags.length" class="tags">
                <span v-for="tag in article.meta.tags" :key="tag" class="tag">{{ tag }}</span>
              </div>
            </div>
          </NuxtLink>
        </article>
      </div>
      
      <div v-else class="empty">
        <p>まだ記事がありません。</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Blog',
  meta: [
    { name: 'description', content: 'ランニングとテクノロジーに関するブログ記事' }
  ]
});

// Fetch all blog articles from the blog collection
const { data: articles } = await useAsyncData('blog-articles', async () => {
  const allArticles = await queryCollection('blog').all();
  // Filter out drafts and sort by date descending
  return allArticles
    .filter((item: any) => !item.draft)
    .sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime());
});

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('ja-JP', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
};
</script>

<style scoped>
.page {
  padding: 3rem 0;
}

.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #2c3e50;
}

.loading,
.error,
.empty {
  text-align: center;
  padding: 3rem 0;
  color: #666;
  font-size: 1.125rem;
}

.error {
  color: #e74c3c;
}

.articles-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.article-card {
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 2rem;
  transition: all 0.3s ease;
}

.article-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-color: #3b82f6;
}

.article-link {
  text-decoration: none;
  color: inherit;
}

.article-card h2 {
  margin: 0 0 1rem;
  font-size: 1.75rem;
  color: #2c3e50;
}

.description {
  margin: 0 0 1rem;
  color: #666;
  font-size: 1.125rem;
  line-height: 1.6;
}

.meta {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  font-size: 0.875rem;
  color: #888;
}

.tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.tag {
  background: #f0f0f0;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.875rem;
  color: #555;
}
</style>
