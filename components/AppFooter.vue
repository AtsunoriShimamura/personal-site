<template>
  <footer class="footer">
    <div class="container">
      <p>&copy; {{ currentYear }} shimamurun.dev. All rights reserved.</p>
      <p class="footer-note">Run. Build. Optimize.</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<style scoped>
.footer {
  background: #2c3e50;
  color: #fff;
  padding: 2rem 0;
  margin-top: 4rem;
  text-align: center;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.footer p {
  margin: 0.5rem 0;
}

.footer-note {
  font-size: 0.875rem;
  opacity: 0.8;
}
</style>
