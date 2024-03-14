import { Pessoa } from './Pessoa'

export class BancoDeDados {
  private _listaDePessoas: Array<Pessoa>

  constructor() {
    this._listaDePessoas = []
  }

  adicionar(pessoa: Pessoa) {
    if (this._listaDePessoas.some(element => element.nome === pessoa.nome)) {
      throw new Error('Pessoa já cadastrada')
    }
    this._listaDePessoas.push(pessoa)
  }

  listar(): Array<Pessoa> {
    return this._listaDePessoas
  }

  atualizar(nome: string, novoNome?: string, novaIdade?: number): Pessoa {
    const index = this._listaDePessoas.findIndex(element => element.nome === nome.toUpperCase())

    if (index === -1) throw new Error('Não foi possível achar nenhum registro no nome desejado')

    if (!novoNome && !novaIdade) throw new Error('Você precisa informar ao menos um novo dado (Nome ou idade)')

    if (novoNome) {
      if (Pessoa.validaNome(novoNome)) {
        this._listaDePessoas[index].nome = novoNome
      } else
        throw new Error('Nome inválido')
    }

    if (novaIdade) {
      if (Pessoa.validaIdade(novaIdade)) {
        this._listaDePessoas[index].idade = novaIdade
      } else
        throw new Error('Idade inválida: mínimo 1 e máximo de 150')
    }
    return this._listaDePessoas[index]
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
