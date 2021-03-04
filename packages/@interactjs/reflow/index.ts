/* eslint-disable import/order, no-console, eol-last */
import interact, { init } from '@interactjs/interact'
import plugin from '@interactjs/reflow/plugin'

if (typeof window === 'object' && !!window) {
  init(window)
}

interact.use(plugin)