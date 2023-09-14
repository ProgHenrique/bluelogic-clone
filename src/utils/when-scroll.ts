export function shadowOnHeader() {
  if (window.scrollY > 0) {
    return true
  }

  return false
}

export function backToTopFunction() {
  if (window.scrollY >= 560) {
    return true
  }

  return false
}
