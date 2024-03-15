import { BancoDeDados } from './BancoDeDados'
import { Menu } from './Menu'
import * as fs from 'fs'

const bd = BancoDeDados.instancia

const menu = new Menu(bd)

menu.abrir()

const jsonData = JSON.stringify(bd.listar())
fs.writeFileSync('dados.json', jsonData)