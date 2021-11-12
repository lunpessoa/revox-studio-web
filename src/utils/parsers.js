export const parseMonthToString = (monthNumber) => {
  const months = [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez',
  ]

  return months[monthNumber]
}

export const parseNumberWithDots = number => {
  return number.toString().replace('.', ',') // replace decimal point character with ,
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}
