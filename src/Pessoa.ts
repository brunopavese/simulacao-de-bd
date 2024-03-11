export class Pessoa {
  private _nome: string
  private _idade: number
  private _email: string

  constructor(nome: string, idade: number, email: string) {
    if (!this.validaNome(nome)) throw new Error('Nome inválido')
    if (!this.validaEmail(email)) throw new Error('Email inválido')
    if (!this.validaIdade(idade)) throw new Error('Idade inválida: mínimo 1 e máximo de 150')
    this._nome = nome
    this._idade = idade
    this._email = email
  }

  get nome(): string {
    return this._nome
  }

  set nome(nome: string) {
    if (this.validaNome(nome)) {
      this._nome = nome
    }
  }

  get idade(): number {
    return this._idade
  }

  set idade(idade: number) {
    if (this.validaIdade(idade)) {
      this._idade = idade
    }
  }

  get email(): string {
    return this._email
  }

  private validaNome(nome: string): boolean {
    return nome.length >= 3 && /^[a-zA-ZÀ-ú]+(?: [a-zA-ZÀ-ú]+)*$/.test(nome)
  }

  private validaIdade(idade: number): boolean {
    return idade > 0 && idade <= 150
  }

  private validaEmail(email: string): boolean {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
  }
}
