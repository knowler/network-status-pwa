const app = document.getElementById('root')
const status = document.createElement('h1')

// Status change handler
const setStatus = value => {
  status.textContent = `We are ${value ? 'online' : 'offline'}.`
}

// Set the initial status
setStatus(navigator.onLine)

// Handle changes to the status
window.addEventListener('offline', () => setStatus(false))
window.addEventListener('online', () => setStatus(true))

app.appendChild(status)

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
  })
}
