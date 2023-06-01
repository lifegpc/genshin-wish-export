import * as IconComponents from "@element-plus/icons-vue";
const weaponTypeNames = new Set([
  '武器', 'Weapon', '무기', 'Arma', 'Arme', 'Оружие', 'อาวุธ', 'Vũ Khí', 'Waffe', 'Senjata'
])

const characterTypeNames = new Set([
  '角色', 'Character', '캐릭터', 'キャラクター', 'Personaje', 'Personnage', 'Персонажи', 'ตัวละคร', 'Nhân Vật', 'Figur', 'Karakter', 'Personagem'
])

const AlbedoNames = new Set([
    '阿贝多', 'Albedo', '阿貝多', 'アルベド', 'Альбедо'
])

const AlhaithamNames = new Set([
    '艾尔海森', 'Alhaitham', '艾爾海森', 'Alhacén', 'アルハイゼン', 'Аль-Хайтам', 'Аль-Хайсам'
])

const AratakiIttoNames = new Set([
    '荒泷一斗', 'Arataki Itto', '荒瀧一斗', 'Аратаки Итто', 'Аратакі Ітто'
])

const BaizhuNames = new Set([
    '白术', 'Baizhu', '白朮', '백출', 'Бай Чжу'
])

const CynoNames = new Set([
    '赛诺', 'Cyno', '賽諾', 'セノ', 'Сайно', 'Кіно'
])

const DehyaNames = new Set([
    '迪希雅', 'Dehya', 'ディシア', '데히야', 'Дэхья'
])

const EulaNames = new Set([
    '优菈', 'Eula', '優菈', 'エウルア', 'Эола', 'Евла'
])

const GanyuNames = new Set([
    '甘雨', 'Ganyu', 'Гань Юй', 'Ґанью'
])

const HuTaoNames = new Set([
    '胡桃', 'Hu Tao', 'Hutao', 'Ху Тао'
])

const KaedeharaKazuhaNames = new Set([
    '枫原万叶', 'Kaedehara Kazuha', '楓原萬葉', '楓原万葉', 'Каэдэхара Кадзуха', 'Каедехара Кадзуха'
])

const KamisatoAyakaNames = new Set([
    '神里绫华', 'Kamisato Ayaka', '神里綾華', 'Камисато Аяка', 'Камісато Аяка'
])

const KamisatoAyatoNames = new Set([
    '神里绫人', 'Kamisato Ayato', '神里綾人', 'Камисато Аято', 'Камісато Аято'
])

const KeqingNames = new Set([
    '刻晴', 'Keqing', 'Keching', 'Кэ Цин', 'Кецін'
])

const KleeNames = new Set([
    '可莉', 'Klee', 'クレー', 'Кли', 'Клі'
])

const NahidaNames = new Set([
    '纳西妲', 'Nahida', '納西妲', 'ナヒーダ', 'Нахида'
])

const NilouNames = new Set([
    '妮露', 'Nilou', 'ニィロウ', 'Нилу'
])

const RaidenShogunNames = new Set([
    '雷电将军', 'Raiden Shogun', '雷電將軍', 'Shogun Raiden', '雷電将軍', 'Сёгун Райдэн', 'Райден Шьоґун'
])

const SangonomiyaKokomiNames = new Set([
    '珊瑚宫心海', 'Sangonomiya Kokomi', '珊瑚宮心海', 'Сангономия Кокоми', 'Санґономія Кокомі'
])

const ShenheNames = new Set([
    '申鹤', 'Shenhe', '申鶴', 'Шэнь Хэ'
])

const TartagliaNames = new Set([
    '达达利亚', 'Tartaglia', '達達利亞', 'タルタリヤ', 'Тарталья'
])

const TighnariNames = new Set([
    '提纳里', 'Tighnari', '提納里', 'ティナリ', 'Tignari', 'Тигнари', 'Тігнарі'
])

const VentiNames = new Set([
    '温迪', 'Venti', 'ウェンティ', 'Венти', 'Венті', '溫迪'
])

const WandererNames = new Set([
    '流浪者', 'Wanderer', 'Trotamundos', 'Nomade', 'Vagabondo', '放浪者', 'Wędrowiec', 'Andarilho', 'Странник', 'ผู้พเนจร', 'Avare', 'Блукач', 'Kẻ Lang Thang'
])

const XiaoNames = new Set([
    '魈', 'Xiao', 'Сяо'
])

const YaeMikoNames = new Set([
    '八重神子', 'Yae Miko', 'Яэ Мико', 'Яе Міко'
])

const YelanNames = new Set([
    '夜兰', 'Yelan', '夜蘭', 'Е Лань', 'Єлань'
])

const YoimiyaNames = new Set([
    '宵宮', 'Yoimiya', 'Ёимия', 'Йоімія'
])

const ZhongliNames = new Set([
    '钟离', '鍾離', 'Zhongli', 'Чжун Ли', 'Джонлі'
])

const isAlbedo = (name) => AlbedoNames.has(name)
const isAlhaitham = (name) => AlhaithamNames.has(name)
const isAratakiItto = (name) => AratakiIttoNames.has(name)
const isBaizhu = (name) => BaizhuNames.has(name)
const isCyno = (name) => CynoNames.has(name)
const isDehya = (name) => DehyaNames.has(name)
const isEula = (name) => EulaNames.has(name)
const isCharacter = (name) => characterTypeNames.has(name)
const isGanyu = (name) => GanyuNames.has(name)
const isHuTao = (name) => HuTaoNames.has(name)
const isKaedeharaKazuha = (name) => KaedeharaKazuhaNames.has(name)
const isKamisatoAyaka = (name) => KamisatoAyakaNames.has(name)
const isKamisatoAyato = (name) => KamisatoAyatoNames.has(name)
const isKeqing = (name) => KeqingNames.has(name)
const isKlee = (name) => KleeNames.has(name)
const isNahida = (name) => NahidaNames.has(name)
const isNilou = (name) => NilouNames.has(name)
const isRaidenShogun = (name) => RaidenShogunNames.has(name)
const isSangonomiyaKokomi = (name) => SangonomiyaKokomiNames.has(name)
const isShenhe = (name) => ShenheNames.has(name)
const isTartaglia = (name) => TartagliaNames.has(name)
const isTighnari = (name) => TighnariNames.has(name)
const isVenti = (name) => VentiNames.has(name)
const isWanderer = (name) => WandererNames.has(name)
const isWeapon = (name) => weaponTypeNames.has(name)
const isXiao = (name) => XiaoNames.has(name)
const isYaeMiko = (name) => YaeMikoNames.has(name)
const isYelan = (name) => YelanNames.has(name)
const isYoimiya = (name) => YoimiyaNames.has(name)
const isZhongli = (name) => ZhongliNames.has(name)

const IconInstaller = (app) => {
  Object.values(IconComponents).forEach(component => {
    app.component(component.name, component)
  })
}

const isUP = (name, type, timestamp) => {
    if (type != "301" && type != "400") return null;
    // 1.0
    if (timestamp >= 1601258400000 && timestamp < 1603015200000 && type == "301") return isVenti(name)
    if (timestamp >= 1603188000000 && timestamp < 1604991600000 && type == "301") return isKlee(name)
    // 1.1
    if (timestamp >= 1605060000000 && timestamp < 1606809600000 && type == "301") return isTartaglia(name)
    if (timestamp >= 1606816800000 && timestamp < 1608620400000 && type == "301") return isZhongli(name)
    // 1.2
    if (timestamp >= 1608688800000 && timestamp < 1610438400000 && type == "301") return isAlbedo(name)
    if (timestamp >= 1610445600000 && timestamp < 1612249200000 && type == "301") return isGanyu(name)
    // 1.3
    if (timestamp >= 1612316940000 && timestamp < 1613548800000 && type == "301") return isXiao(name)
    if (timestamp >= 1613556000000 && timestamp < 1614672000000 && type == "301") return isKeqing(name)
    if (timestamp >= 1614679200000 && timestamp < 1615878000000 && type == "301") return isHuTao(name)
    // 1.4
    if (timestamp >= 1615950000000 && timestamp < 1617696000000 && type == "301") return isVenti(name)
    if (timestamp >= 1617703200000 && timestamp < 1619506800000 && type == "301") return isTartaglia(name)
    // 1.5
    if (timestamp >= 1619578800000 && timestamp < 1621331940000 && type == "301") return isZhongli(name)
    if (timestamp >= 1621332000000 && timestamp < 1623135600000 && type == "301") return isEula(name)
    // 1.6
    if (timestamp >= 1623207600000 && timestamp < 1624960740000 && type == "301") return isKlee(name)
    if (timestamp >= 1624960800000 && timestamp < 1626764400000 && type == "301") return isKaedeharaKazuha(name)
    // 2.0
    if (timestamp >= 1626836400000 && timestamp < 1628589600000 && type == "301") return isKamisatoAyaka(name)
    if (timestamp >= 1628589600000 && timestamp < 1630393200000 && type == "301") return isYoimiya(name)
    // 2.1
    if (timestamp >= 1630465200000 && timestamp < 1632218400000 && type == "301") return isRaidenShogun(name)
    if (timestamp >= 1632218400000 && timestamp < 1634022000000 && type == "301") return isSangonomiyaKokomi(name)
    // 2.2
    if (timestamp >= 1634094000000 && timestamp < 1635847200000 && type == "301") return isTartaglia(name)
    if (timestamp >= 1635847200000 && timestamp < 1637650800000 && type == "301") return isHuTao(name)
    // 2.3
    if (timestamp >= 1637722800000 && timestamp < 1639476000000) return type == "301" ? isAlbedo(name) : isEula(name)
    if (timestamp >= 1639476000000 && timestamp < 1641279600000 && type == "301") return isAratakiItto(name)
    // 2.4
    if (timestamp >= 1641351600000 && timestamp < 1643104800000) return type == "301" ? isShenhe(name) : isXiao(name)
    if (timestamp >= 1643104800000 && timestamp < 1644908400000) return type == "301" ? isZhongli(name) : isGanyu(name)
    // 2.5
    if (timestamp >= 1644980400000 && timestamp < 1646733600000 && type == "301") return isYaeMiko(name)
    if (timestamp >= 1646733600000 && timestamp < 1648537200000) return type == "301" ? isRaidenShogun(name) : isSangonomiyaKokomi(name)
    // 2.6
    if (timestamp >= 1648609200000 && timestamp < 1650362340000) return type == "301" ? isKamisatoAyato(name) : isVenti(name)
    if (timestamp >= 1650362400000 && timestamp < 1653948000000 && type == "301") return isKamisatoAyaka(name)
    // 2.7
    if (timestamp >= 1653966000000 && timestamp < 1655805540000) return type == "301" ? isYelan(name) : isXiao(name)
    if (timestamp >= 1655805600000 && timestamp < 1657609200000 && type == "301") return isAratakiItto(name)
    // 2.8
    if (timestamp >= 1657681200000 && timestamp < 1659434400000) return type == "301" ? isKaedeharaKazuha(name) : isKlee(name)
    if (timestamp >= 1659434400000 && timestamp < 1661238000000 && type == "301") return isYoimiya(name)
    // 3.0
    if (timestamp >= 1661310000000 && timestamp < 1662717600000) return type == "301" ? isTighnari(name) : isZhongli(name)
    if (timestamp >= 1662717600000 && timestamp < 1664262000000) return type == "301" ? isGanyu(name) : isSangonomiyaKokomi(name)
    // 3.1
    if (timestamp >= 1664334000000 && timestamp < 1665741600000) return type == "301" ? isCyno(name) : isVenti(name)
    if (timestamp >= 1665741600000 && timestamp < 1667286000000) return type == "301" ? isNilou(name) : isAlbedo(name)
    // 3.2
    if (timestamp >= 1667358000000 && timestamp < 1668765600000) return type == "301" ? isNahida(name) : isYoimiya(name)
    if (timestamp >= 1668765600000 && timestamp < 1670310000000) return type == '301' ? isYaeMiko(name) : isTartaglia(name)
    // 3.3
    if (timestamp >= 1670382000000 && timestamp < 1672135200000) return type == "301" ? isWanderer(name) : isAratakiItto(name)
    if (timestamp >= 1672135200000 && timestamp < 1673938800000) return type == "301" ? isRaidenShogun(name) : isKamisatoAyato(name)
    // 3.4
    if (timestamp >= 1674007201000 && timestamp < 1675764000000) return type == "301" ? isAlhaitham(name) : isXiao(name)
    if (timestamp >= 1675764000000 && timestamp < 1677567600000) return type == "301" ? isHuTao(name) : isYelan(name)
    // 3.5
    if (timestamp >= 1677621600000 && timestamp < 1679392800000) return type == "301" ? isDehya(name) : isCyno(name)
    if (timestamp >= 1679392800000 && timestamp < 1681196400000) return type == "301" ? isShenhe(name) : isKamisatoAyaka(name)
    // 3.6
    if (timestamp >= 1681250400000 && timestamp < 1683021600000) return type == "301" ? isNahida(name) : isNilou(name)
    if (timestamp >= 1683021600000 && timestamp < 1684825200000) return type == "301" ? isBaizhu(name) : isGanyu(name)
    // 3.7
    if (timestamp >= 1684897200000 && timestamp < 1686650400000) return type == "301" ? isYoimiya(name) : isYaeMiko(name)
    if (timestamp >= 1686650400000 && timestamp < 1688454000000) return type == "301" ? isKaedeharaKazuha(name) : isAlhaitham(name)
    return null;
}

export {
  isWeapon,
  isCharacter,
  IconInstaller,
  isUP
}