import { Pessoa } from './Pessoa'

export class BancoDeDados {
  private _listaDePessoas: Array<Pessoa>

  constructor() {
    this._listaDePessoas = []
  }

  adicionar(pessoa: Pessoa): boolean {
    if (this._listaDePessoas.some(element => element.nome === pessoa.nome)) {
      return false
    }
    this._listaDePessoas.push(pessoa)
    return true
  }

  listar(): Array<Pessoa> {
    return this._listaDePessoas
  }

  atualizar(nome: string, novoNome?: string, novaIdade?: number): boolean {
    const index = this._listaDePessoas.findIndex(element => element.nome === nome.toUpperCase())

    if (index === -1) return false

    if (novoNome) this._listaDePessoas[index].nome = novoNome
    if (novaIdade) this._listaDePessoas[index].idade = novaIdade

    return true
  }

  buscarPeloNome(nome: string): Pessoa | undefined {
    return this._listaDePessoas.find(element => element.nome === nome.toUpperCase())
  }

  deletar(nome: string): boolean {
    const index = this._listaDePessoas.findIndex(element => element.nome === nome.toUpperCase())

    if (index === -1) {
      return false
    }
    this._listaDePessoas.splice(index, 1)
    return true
  }
}
