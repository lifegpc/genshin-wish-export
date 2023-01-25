import { isWeapon, isCharacter, isUP } from './utils'

const itemCount = (map, name) => {
  if (!map.has(name)) {
    map.set(name, 1)
  } else {
    map.set(name, map.get(name) + 1)
  }
}

const gachaDetail = (data) => {
  const detailMap = new Map()
  for (let [key, value] of data) {
    let detail = {
      count3: 0, count4: 0, count5: 0,
      count3w: 0, count4w: 0, count5w: 0, count4c: 0, count5c: 0, upc: 0, nupc: 0,
      weapon3: new Map(), weapon4: new Map(), weapon5: new Map(),
      char4: new Map(), char5: new Map(),
      date: [],
      ssrPos: [], countMio: 0, total: value.length,
      tupc: 0, uknc: 0
    }
    let lastSSR = 0
    let dateMin = 0
    let dateMax = 0
    value.forEach((item, index) => {
      const [time, name, type, rank, wishType] = item
      const timestamp = new Date(time).getTime()
      if (!dateMin) dateMin = timestamp
      if (!dateMax) dateMax = timestamp
      if (dateMin > timestamp) dateMin = timestamp
      if (dateMax < timestamp) dateMax = timestamp
      if (rank === 3) {
        detail.count3++
        detail.countMio++
        if (isWeapon(type)) {
          detail.count3w++
          itemCount(detail.weapon3, name)
        }
      } else if (rank === 4) {
        detail.count4++
        detail.countMio++
        if (isWeapon(type)) {
          detail.count4w++
          itemCount(detail.weapon4, name)
        } else if (isCharacter(type)) {
          detail.count4c++
          itemCount(detail.char4, name)
        }
      } else if (rank === 5) {
        let up = isUP(name, wishType, timestamp);
        let count = index + 1 - lastSSR;
        detail.ssrPos.push([name, count, time, wishType, up])
        if (up === true) {
            detail.upc += 1
            detail.tupc += count
        } else if (up === false) {
            detail.nupc += 1
            detail.tupc += count
        } else if (isCharacter(type)) {
            detail.uknc += count
        }
        lastSSR = index + 1
        detail.count5++
        detail.countMio = 0
        if (isWeapon(type)) {
          detail.count5w++
          itemCount(detail.weapon5, name)
        } else if (isCharacter(type)) {
          detail.count5c++
          itemCount(detail.char5, name)
        }
      }
    })
    detail.date = [dateMin, dateMax]
    if (detail.total) {
      detailMap.set(key, detail)
    }
  }
  return detailMap
}

export default gachaDetail