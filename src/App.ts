import { BancoDeDados } from './BancoDeDados'
import { Menu } from './Menu'

const bd = BancoDeDados.instancia

const menu = new Menu(bd)

menu.abrir()

console.log(bd.listar());
