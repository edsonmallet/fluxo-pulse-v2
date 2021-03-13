export const formatDateBr = (): string => {
  var data = new Date(),
    day = data.getDate().toString().padStart(2, '0'),
    month = (data.getMonth() + 1).toString().padStart(2, '0'),
    year = data.getFullYear()
  return `${day}/${month}/${year}`
}
