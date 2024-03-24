const $ = (selector) => {
  const result = document.querySelector(selector)
  if (!(result instanceof HTMLElement)) return null

  return result
}

export default $
