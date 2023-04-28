import * as IconComponents from "@element-plus/icons-vue";
const weaponTypeNames = new Set([
  '光锥', 'Light Cone', '光錐', 'Lichtkegel', 'Conos de luz', 'cônes de lumière', '光円錐', '광추', 'Cones de Luz', 'Световые конусы', 'Nón Ánh Sáng'
])

const characterTypeNames = new Set([
  '角色', 'Character', '캐릭터', 'キャラクター', 'Personaje', 'Personnage', 'Персонажи', 'ตัวละคร', 'Nhân Vật', 'Figur', 'Karakter', 'Personagem'
])

const SeeleNames = new Set([
    '希儿', '希兒', 'Seele', 'ゼーレ', '제레', 'Зеле'
])

const isCharacter = (name) => characterTypeNames.has(name)
const isSeele = (name) => SeeleNames.has(name)
const isWeapon = (name) => weaponTypeNames.has(name)

const IconInstaller = (app) => {
  Object.values(IconComponents).forEach(component => {
    app.component(component.name, component)
  })
}

const isUP = (name, type, timestamp) => {
    if (type == "11" && timestamp >= 1682467200000 && timestamp < 1684231200000) return isSeele(name);
    return null;
}

export {
  isWeapon,
  isCharacter,
  IconInstaller,
  isUP
}