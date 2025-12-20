/**
 * Seleciona aleatoriamente um elemento de uma lista fornecida pelo usuário.
 *
 * Args:
 * lista (Array<T>): Lista de elementos do tipo T para seleção aleatória.
 *
 * Returns:
 * T: Elemento selecionado aleatoriamente da lista fornecida.
 *
 * Raises:
 * Error: Lança erro se a lista estiver vazia.
 */
/**
 * Seleciona aleatoriamente um elemento, favorecendo o primeiro da lista.
 *
 * Args:
 * lista (Array<T>): Lista de elementos do tipo T para seleção aleatória.
 *
 * Returns:
 * T: Elemento selecionado aleatoriamente da lista fornecida, com maior
 *     probabilidade para o primeiro elemento.
 *
 * Raises:
 * Error: Lança erro se a lista estiver vazia.
 */
export function selecionarAleatorio<T>(lista: Array<T>): T {
  // Verifica se a lista está vazia
  if (lista.length === 0) {
    throw new Error('A lista não pode estar vazia.')
  }
  // Define peso maior para o primeiro elemento
  const pesos: number[] = lista.map((_, i) => (i === 0 ? 0.6 : 0.4 / (lista.length - 1)))
  // Gera número aleatório entre 0 e 1
  const r: number = Math.random()
  // Acumula pesos para seleção
  let acumulado = 0
  for (let i = 0; i < lista.length; i++) {
    acumulado += pesos[i]
    if (r < acumulado) {
      return lista[i]
    }
  }
  // Retorna último elemento como fallback
  return lista[lista.length - 1]
}

export function abrirCanalPardo() {
  window.open('https://www.youtube.com/@RenatoImpera', '_blank')
}
