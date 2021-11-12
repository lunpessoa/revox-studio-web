export const filterValids =(filters) => {
  const { years, products } = filters

  if (!years) return false
  if (years && !products) return true
  if (products && !years) return false
  if (products && years) return true

  return true
}
