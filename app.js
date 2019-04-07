const app = document.getElementById('root')
const status = document.createElement('h1')

// Status change handler
const setStatus = value => {
  status.textContent = `You are ${value ? 'online' : 'offline'}.`
}

// Set the initial status
setStatus(navigator.onLine)

// Handle changes to the status
window.addEventListener('offline', () => setStatus(false))
window.addEventListener('online', () => setStatus(true))

// Add the status element to the app
app.appendChild(status)

// Register service worker if supported
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
  })
}
