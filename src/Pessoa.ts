export class Pessoa {
  private _nome: string
  private _idade: number
  private _email: string

  constructor(nome: string, idade: number, email: string) {
    if (!Pessoa.validaNome(nome)) throw new Error('Nome inválido')
    if (!Pessoa.validaEmail(email)) throw new Error('Email inválido')
    if (!Pessoa.validaIdade(idade)) throw new Error('Idade inválida: mínimo 1 e máximo de 150')
    this._nome = nome.toUpperCase()
    this._idade = idade
    this._email = email.toLowerCase()
  }

  static validaNome(nome: string): boolean {
    return nome.length >= 3 && /^[a-zA-ZÀ-ú]+(?: [a-zA-ZÀ-ú]+)*$/.test(nome)
  }

  static validaIdade(idade: number): boolean {
    return idade > 0 && idade <= 150
  }

  static validaEmail(email: string): boolean {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
  }

  get nome(): string {
    return this._nome
  }

  set nome(nome: string) {
    if (Pessoa.validaNome(nome)) {
      this._nome = nome.toUpperCase()
    }
  }

  get idade(): number {
    return this._idade
  }

  set idade(idade: number) {
    if (Pessoa.validaIdade(idade)) {
      this._idade = idade
    }
  }

  get email(): string {
    return this._email
  }
}
