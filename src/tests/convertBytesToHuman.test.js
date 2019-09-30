/*
 * Необходимо покрыть все возможные
 * и невозможные кейсы. Например,
 * convertBytesToHuman(-1) === false,
 * convertBytesToHuman(-1) !== 1,
 * convertBytesToHuman('string') === false
 * convertBytesToHuman(5) === 5
 */
import convertBytesToHuman from "../convertBytesToHuman.js"

test('Возвращает false для неправильного типа данных', () => {
  expect(convertBytesToHuman('some')).toBe(false)
  expect(convertBytesToHuman(Infinity)).toBe(false)
  expect(convertBytesToHuman(-17)).toBe(false)
  expect(convertBytesToHuman(17.23)).toBe(false)
  expect(convertBytesToHuman(NaN)).toBe(false)
  expect(convertBytesToHuman(true)).toBe(false)
  expect(convertBytesToHuman(undefined)).toBe(false)
  expect(convertBytesToHuman(Math)).toBe(false)
  expect(convertBytesToHuman(null)).toBe(false)
})

test('Возвращает корректное значение для чисел', () => {
  expect(convertBytesToHuman(0)).toBe('0 B')
  expect(convertBytesToHuman(17)).toBe('17 B')
  expect(convertBytesToHuman(1024)).toBe('1 KB')
  expect(convertBytesToHuman(123123123)).toBe('117.42 MB')
  expect(convertBytesToHuman(1099511627776)).toBe('1 TB')
})

test('Возвращает false для неправильного класса чисел', () => {
  expect(convertBytesToHuman(Infinity)).toBe(false)
  expect(convertBytesToHuman(-17)).toBe(false)
  expect(convertBytesToHuman(17.23)).toBe(false)
  expect(convertBytesToHuman(1180591620717411303424)).toBe(false)
})
