import { BancoDeDados } from './BancoDeDados'
import { Pessoa } from './Pessoa'
import promptSync from 'prompt-sync'

export class Menu {
  private static prompt = promptSync()
  private bd: BancoDeDados

  constructor(bancoDeDados: BancoDeDados) {
    this.bd = bancoDeDados
  }

  public abrir(): void {
    let entrada: string
    do {
      console.log(`
      ========================
                Menu
      ========================
      1. Registrar
      2. Ver registros
      3. Buscar registro pelo nome
      4. Atualizar dados
      5. Deletar registro
      0. Sair
      ========================
      `)
      entrada = Menu.prompt('Escolha uma opção: ')

      switch (entrada) {
        case '0':
          console.log('\nSistema encerrado!')
          break
        case '1':
          this.registrarPessoa()
          break
        case '2':
          this.listarBancoDeDados()
          break
        case '3':
          this.buscarPeloNome()
          break
        case '4':
          this.atualizarPessoa()
          break
        case '5':
          this.deletarPessoa()
          break
        default:
          console.log('\nEscolha uma opção válida!')
      }
    } while (entrada !== '0')
  }

  private registrarPessoa(): void {
    const nome = Menu.prompt('Nome: ').trim()
    const idade = parseInt(Menu.prompt('Idade: ').trim())
    const email = Menu.prompt('Email: ').trim()

    try {
      const pessoa = new Pessoa(nome, idade, email)
      this.bd.adicionar(pessoa)
      console.log('\nCadastro realizado com sucesso\n')
    } catch (error) {
      console.error('\nFalha ao registrar:', error)
    }
  }

  private listarBancoDeDados(): void {
    console.table(this.bd.listar())
  }

  private buscarPeloNome(): void {
    const nome = Menu.prompt('Nome para a busca: ').trim()

    try {
      const resultadoDaBusca = this.bd.buscar(nome)
      console.log(`\n${resultadoDaBusca}\n`)
    } catch (error) {
      console.error('\nFalha na busca:', error)
    }
  }

  private atualizarPessoa(): void {
    const nome = Menu.prompt('Nome de quem deseja atualizar: ').trim()
    const novoNome = Menu.prompt('Para alterar o nome digite um novo nome, para manter pressione Enter: ').trim()
    const novaIdade = parseInt(Menu.prompt('Para alterar a idade digite uma nova idade, para manter pressione Enter: ').trim())

    try {
      this.bd.atualizar(nome, novoNome, novaIdade)
      console.log('\nCadastro atualizado com sucesso\n')
    } catch (error) {
      console.error('\nFalha ao atualizar:', error)
    }
  }

  private deletarPessoa(): void {
    const nome = Menu.prompt('Digite o nome de quem deseja deletar: ').trim()

    try {
      this.bd.deletar(nome)
      console.log('\nPessoa deletada com sucesso!\n')
    } catch (error) {
      console.error('\nFalha ao deletar:', error)
    }
  }
}
