<template>
  <NuxtLink :to="to" class="card-link">
    <article class="card">
      <h3 class="card-title">{{ title }}</h3>
      <p class="card-description">{{ description }}</p>
    </article>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  to: string;
}>();
</script>

<style scoped>
.card-link {
  text-decoration: none;
  color: inherit;
  display: block;
}

.card {
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 2rem;
  transition: all 0.3s ease;
  height: 100%;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-color: #3b82f6;
}

.card-title {
  margin: 0 0 1rem;
  font-size: 1.5rem;
  color: #2c3e50;
}

.card-description {
  margin: 0;
  color: #666;
  line-height: 1.6;
}
</style>
