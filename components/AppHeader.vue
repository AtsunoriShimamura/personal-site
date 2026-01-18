<template>
  <header class="header">
    <div class="container">
      <nav class="nav">
        <NuxtLink to="/" class="logo">shimamurun.dev</NuxtLink>
        <ul class="nav-list">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/apps">Apps</NuxtLink></li>
          <li><NuxtLink to="/blog">Blog</NuxtLink></li>
          <li><NuxtLink to="/tech">Tech</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  background: #fff;
  border-bottom: 1px solid #e0e0e0;
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.25rem;
  font-weight: 700;
  color: #2c3e50;
  text-decoration: none;
}

.nav-list {
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-list a {
  color: #555;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

.nav-list a:hover,
.nav-list a.router-link-active {
  color: #3b82f6;
}
</style>
