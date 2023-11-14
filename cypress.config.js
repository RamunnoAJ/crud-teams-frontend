import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    testIsolation: false,
    viewportWidth: 1280,
    viewportHeight: 720,
  },
})
