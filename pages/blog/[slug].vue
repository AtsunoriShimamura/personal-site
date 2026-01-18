<template>
  <div class="page">
    <div class="container">
      <div v-if="!article" class="loading">読み込み中...</div>
      
      <div v-else-if="!article" class="error">
        <h1>404 - Not Found</h1>
        <p>お探しの記事が見つかりませんでした。</p>
        <NuxtLink to="/blog" class="back-link">ブログ一覧に戻る</NuxtLink>
      </div>
      
      <article v-else class="article">
        <header class="article-header">
          <h1>{{ article.title }}</h1>
          <div class="meta">
            <time v-if="article.meta?.date" :datetime="article.meta.date">{{ formatDate(article.meta.date) }}</time>
            <div v-if="article.meta?.tags && article.meta.tags.length" class="tags">
              <span v-for="tag in article.meta.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
          </div>
        </header>
        
        <div class="article-content">
          <ContentRenderer :value="article" />
        </div>
        
        <footer class="article-footer">
          <NuxtLink to="/blog" class="back-link">← ブログ一覧に戻る</NuxtLink>
        </footer>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const slug = route.params.slug as string;

const { data: article } = await useAsyncData(`blog-${slug}`, async () => {
  // Query by stem which includes the "blog/" prefix
  const result = await queryCollection('blog').where('stem', '==', `blog/${slug}`).first();
  return result;
});

// 404 handling
if (!article.value || article.value.draft) {
  throw createError({
    statusCode: 404,
    message: 'Article not found'
  });
}

useHead({
  title: article.value?.title || 'Article',
  meta: [
    { name: 'description', content: article.value?.description || '' },
    { property: 'og:title', content: article.value?.title || '' },
    { property: 'og:description', content: article.value?.description || '' }
  ]
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
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.loading,
.error {
  text-align: center;
  padding: 3rem 0;
}

.error h1 {
  font-size: 2.5rem;
  color: #e74c3c;
  margin-bottom: 1rem;
}

.error p {
  color: #666;
  font-size: 1.125rem;
  margin-bottom: 2rem;
}

.article-header {
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #e0e0e0;
}

.article-header h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #2c3e50;
  line-height: 1.3;
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

.article-content {
  font-size: 1.125rem;
  line-height: 1.8;
  color: #333;
}

.article-content :deep(h2) {
  font-size: 2rem;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  color: #2c3e50;
}

.article-content :deep(h3) {
  font-size: 1.5rem;
  margin-top: 2rem;
  margin-bottom: 0.75rem;
  color: #2c3e50;
}

.article-content :deep(p) {
  margin-bottom: 1.5rem;
}

.article-content :deep(ul),
.article-content :deep(ol) {
  margin-bottom: 1.5rem;
  padding-left: 2rem;
}

.article-content :deep(li) {
  margin-bottom: 0.5rem;
}

.article-content :deep(code) {
  background: #f5f5f5;
  padding: 0.2rem 0.4rem;
  border-radius: 3px;
  font-size: 0.9em;
  font-family: 'Courier New', monospace;
}

.article-content :deep(pre) {
  background: #282c34;
  color: #abb2bf;
  padding: 1.5rem;
  border-radius: 8px;
  overflow-x: auto;
  margin-bottom: 1.5rem;
}

.article-content :deep(pre code) {
  background: transparent;
  padding: 0;
  color: inherit;
}

.article-footer {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #e0e0e0;
}

.back-link {
  color: #3b82f6;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s;
}

.back-link:hover {
  color: #2563eb;
}
</style>
