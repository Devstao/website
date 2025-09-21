<template>
  <header class="header">
    <nav class="navbar">
      <h1 class="navbar-brand" style="">DEVstão</h1>

      <ul class="nav-links" style="list-style: none; margin: 0; padding: 0">
        <li class="nav-items">
          <RouterLink :to="{ name: 'index' }" class="nav-links" active-class="current-item">
            Início
          </RouterLink>
        </li>
        <li class="nav-items">
          <RouterLink :to="{ name: 'sobre' }" class="nav-links" active-class="current-item">
            Sobre
          </RouterLink>
        </li>
        <li class="nav-items">
          <a class="nav-links" href="#">Projetos</a>
        </li>
        <li class="nav-items">
          <a class="nav-links" href="#">Blog</a>
        </li>
        <li class="nav-items">
          <a class="nav-links" href="#">Contato</a>
        </li>
        <li class="nav-items">
          <a class="nav-links" href="https://linktr.ee/BavarianGrove" target="_blank">Comunidade</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="css">
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  color: var(--ash-gray);
}

.header {
  font-size: 1.3rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: #fff;
  background: linear-gradient(180deg, #29230ade 5%, #000000ee 100%);
}

.nav-links {
  display: flex;
  align-items: center;
  margin-right: 2rem;
  height: 100%;
  text-decoration: none;
}

.nav-items a {
  color: var(--ash-gray);
  text-decoration: none;
  font-size: 1.2rem;

  font-weight: 800;

  padding: 0.5rem 0.8rem;
  border-radius: 4px;
  transition:
    background 0.2s,
    text-decoration 0.2s;
}

.nav-items a:hover {
  background: rgba(255, 255, 255, 0.08);
  color: whitesmoke;
}

.current-item {
  background: rgba(255, 255, 255, 0.08);
  color: rgba(223, 184, 77, 0.644);
}

.navbar-brand {
  color: var(--ash-gray);
  margin-left: 1rem;
  line-height: 60px;
  transition: all 0.6;
}

.navbar-brand:hover {
  animation: rainbow 1.5s linear infinite;
  background: linear-gradient(
    90deg,
    rgba(255, 217, 0, 0.753),
    rgba(255, 195, 0, 0.753),
    rgba(255, 179, 0, 0.753),
    rgba(230, 190, 138, 0.753),
    rgba(191, 166, 64, 0.753)
  );
  background-size: 400% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
