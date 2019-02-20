const updateProperties = (elem, state) => {

  elem.style.setProperty('--x', `${ state.x }px`)
  elem.style.setProperty('--y', `${ state.y }px`)
  elem.style.setProperty('--width', `${ state.width }px`)
  elem.style.setProperty('--height', `${ state.height }px`)
  elem.style.setProperty('--radius', state.radius)
  elem.style.setProperty('--scale', state.scale)

}

document.querySelectorAll('.cursor').forEach((cursor) => {

  let onElement

  const createState = (e) => {

    const defaultState = {
      x: e.clientX,
      y: e.clientY,
      width: 20,
      height: 20,
      radius: '100px'
    }

    const computedState = {}

    if (onElement != null) {
      const { top, left, width, height } = onElement.getBoundingClientRect()
      const radius = window.getComputedStyle(onElement).borderTopLeftRadius

      computedState.x = left + width / 2
      computedState.y = top + height / 2
      computedState.width = width
      computedState.height = height
      computedState.radius = radius
    }

    return {
      ...defaultState,
      ...computedState
    }

  }

  document.addEventListener('mousemove', (e) => {
    const state = createState(e)
    updateProperties(cursor, state)
  })

  document.querySelectorAll('a, button').forEach((elem) => {
    elem.addEventListener('mouseenter', () => onElement = elem)
    elem.addEventListener('mouseleave', () => onElement = undefined)
  })

})
