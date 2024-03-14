import { BancoDeDados } from './BancoDeDados'
import { Pessoa } from './Pessoa'

const p = require('prompt-sync')()

const bd = new BancoDeDados()

const opcoes = `
========================
          Menu
========================
1. Registrar pessoa
2. Atualizar dados de pessoa
3. Deletar pessoa
4. Ver pessoas registradas
5. Buscar pessoa pelo nome
0. Sair
========================
`
let opcao: string

do {
  console.info(opcoes)
  opcao = p('Escolha uma opção: ')

  switch (opcao) {
    case '0':
      console.log('Sistema encerrado!')
      break
    case '1':
      registrarPessoa()
      break
    case '2':
      atualizarPessoa()
      break
    case '3':
      deletarPessoa()
      break
    case '4':
      listarBancoDeDados()
      break
    case '5':
      buscarPeloNome()
      break
  }
} while (opcao !== '0')

function registrarPessoa() {
  try {
    const nome = p('Digite um nome: ')
    const idade = p('Digite a idade: ')
    const email = p('Digite um email ')

    const pessoa = new Pessoa(nome, parseInt(idade), email)
    bd.adicionar(pessoa) 
    console.log(`\nCadastro realizado com sucesso\n${pessoa.toString()}`)
  } catch (error) {
    console.log('Erro ao registrar pessoa:', error)
  }
}

function atualizarPessoa() {
  try {
    const nome = p('Digite um nome de quem deseja atualizar dados: ')
    const novoNome = p('Caso deseje alterar o nome digite um novo nome, se não, pressione Enter: ')
    const novaIdade = p('Caso deseje alterar a idade digite uma nova idade, se não, pressione Enter: ')

    const resposta = bd.atualizar(nome, novoNome, parseInt(novaIdade))
    console.log(`\nCadastro atualizado com sucesso\n${resposta.toString()}`)
  } catch (error) {
    console.error('Erro ao atualizar pessoa:', error)
  }
}

function deletarPessoa() {
  const nome = p('Digite um nome de quem deseja deletar: ')

  const resposta = bd.deletar(nome) ? 'Pessoa deletada com sucesso!' : 'Não foi possível achar nenhum registro no nome desejado'
  console.log(resposta)
}

function listarBancoDeDados() {
  console.table(bd.listar())
}

function buscarPeloNome() {
  const nome = p('Digite um nome de quem deseja buscar: ')

  const resultadoDaBusca = bd.buscarPeloNome(nome)
  const resposta = resultadoDaBusca?.toString() ?? 'Não foi possível achar nenhum registro no nome desejado'
  console.log(resposta)
}
