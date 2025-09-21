<template>
  <div class="on-center">
    <h1>Sem nada por enquanto</h1>
  </div>
</template>

<style lang="css">
.on-center {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 90%;
  padding: 6px;
  margin-top: 85px;
  overflow-y: auto;
}

.paragraph {
  text-align: center;
  margin-top: 5rem;
  font-weight: bold;
}

.link-bavarian-grove {
  color: #dbd963;
  text-decoration: none;
}

.link-bavarian-grove:hover {
  animation: rainbow 1.5s linear infinite;
  background: linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet);
  background-size: 400% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

@keyframes rainbow {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}
</style>
