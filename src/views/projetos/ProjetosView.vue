<script setup lang="ts">
/**
*****************************************************************************
* Busca e exibe os READMEs dos repositórios da organização Devstao, exceto o website *
*****************************************************************************
Args:
  Nenhum argumento é necessário.

Returns:
  void: Não retorna valor.

Raises:
  Nenhuma exceção é lançada.
*/
import { marked } from 'marked'
import { onMounted, ref } from 'vue'

/**
 * Interface para o conteúdo do README de cada repositório.
 */
interface RepoReadme {
  name: string
  readme: string
}

/**
 * Interface para o repositório retornado pela API do GitHub.
 */
interface GithubRepo {
  name: string
}

const repos = ref<RepoReadme[]>([])

/**
*****************************************************************************
* Implemente busca dos READMEs sem exceder limites e ignore repositórios sem README *
*****************************************************************************
Args:
  Nenhum argumento é necessário.

Returns:
  void: Não retorna valor.

Raises:
  Nenhuma exceção é lançada.
*/
async function fetchReposAndReadmes(): Promise<void> {
  // Busca todos os repositórios da organização
  const res = await fetch('https://api.github.com/orgs/Devstao/repos')
  const data: GithubRepo[] = await res.json()
  const filtered: GithubRepo[] = data.filter(
    (repo) => repo.name !== 'website' && repo.name !== '.github',
  )

  // Função utilitária para limitar requisições concorrentes
  async function fetchWithConcurrency<T>(
    items: GithubRepo[],
    handler: (repo: GithubRepo) => Promise<T>,
    limit: number,
  ): Promise<T[]> {
    const results: T[] = []
    let idx = 0
    async function next(): Promise<void> {
      if (idx >= items.length) return
      const current = idx++
      const result = await handler(items[current])
      if (result) results.push(result)
      await next()
    }
    await Promise.all(
      Array(limit)
        .fill(0)
        .map(() => next()),
    )
    return results
  }

  // Handler para buscar README e ignorar repositórios sem README
  async function fetchReadme(repo: GithubRepo): Promise<RepoReadme | null> {
    const readmeRes = await fetch(`https://api.github.com/repos/Devstao/${repo.name}/readme`)
    if (readmeRes.ok) {
      const readmeData: { content: string } = await readmeRes.json()
      const binary = atob(readmeData.content)
      const bytes = Uint8Array.from(binary, (c) => c.charCodeAt(0))
      const content: string = new TextDecoder('utf-8').decode(bytes)
      return { name: repo.name, readme: content }
    }
    // Ignora repositórios sem README
    return null
  }

  // Limite de concorrência para evitar rate limit (ex: 5 requisições simultâneas)
  const readmes = await fetchWithConcurrency(filtered, fetchReadme, 5)
  // Filtra valores nulos para garantir tipagem correta
  repos.value = readmes.filter((r): r is RepoReadme => r !== null)
}

onMounted(fetchReposAndReadmes)
</script>

<template>
  <div class="on-center">
    <div v-for="repo in repos" :key="repo.name" class="repo-readme">
      <h2>{{ repo.name }}</h2>
      <pre v-html="marked(repo.readme)" class="readme-content"></pre>
    </div>
  </div>
</template>

<style lang="css" scoped>
.on-center {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100% - 90px);
  padding: 6px;
  overflow-y: auto;
}

.repo-readme {
  margin: 65px;
  background-color: rgba(53, 53, 53, 0.397);
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 20px;
}

.readme-content {
  font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
  font-size: 1rem;
  color: #eaeaea;
  white-space: pre-line;
  word-break: break-word;
}
</style>
