'use strict'

module.exports = modules => {
  if (!modules) return

  if (!Array.isArray(modules)) modules = [modules]

  modules = modules.filter(Boolean)

  const origExit = process.exit

  process.exit = (...args) => {
    const { stack } = new Error
    const hasModule = modules.some(mod => stack.includes(`/node_modules/${mod}/`))
    if (hasModule) {
      console.log(stack.replace('Error', '[Mask Exit]'))
      return
    }
    origExit(...args)
  }
}
