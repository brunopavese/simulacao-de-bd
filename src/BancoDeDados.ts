import { Pessoa } from './Pessoa'

export class BancoDeDados {
  private static _instancia: BancoDeDados
  private _pessoas: Array<Pessoa>

  private constructor() {
    this._pessoas = []
  }

  public static get instancia(): BancoDeDados {
    if (!BancoDeDados._instancia) {
      BancoDeDados._instancia = new BancoDeDados()
    }

    return BancoDeDados._instancia
  }

  public adicionar(pessoa: Pessoa): void {
    if (this._pessoas.some(elemento => elemento.nome === pessoa.nome)) {
      throw new Error('Pessoa já cadastrada')
    }
    this._pessoas.push(pessoa)
  }

  public listar(): Array<Pessoa> {
    return this._pessoas
  }

  public buscar(nome: string): string {
    const index = this.indexOf(nome)

    return this._pessoas[index].toString()
  }

  public atualizar(nome: string, novoNome?: string, novaIdade?: number): void {
    const index = this.indexOf(nome)

    if (!novoNome && !novaIdade)
      throw new Error('Você precisa informar ao menos um novo dado (Nome ou Idade)')

    if (novoNome) {
      if (Pessoa.validaNome(novoNome)) {
        this._pessoas[index].nome = novoNome
      } else
        throw new Error('Nome inválido')
    }

    if (novaIdade) {
      if (Pessoa.validaIdade(novaIdade)) {
        this._pessoas[index].idade = novaIdade
      } else
        throw new Error('Idade inválida: mínimo 1 e máximo de 150')
    }
  }

  public deletar(nome: string): void {
    const index = this.indexOf(nome)

    this._pessoas.splice(index, 1)
  }

  private indexOf(nome: string): number {
    const index = this._pessoas.findIndex(elemento => elemento.nome === nome.toUpperCase())

    if (index === -1)
      throw new Error('Não foi possível achar nenhum registro no nome desejado')

    return index
  }
}
