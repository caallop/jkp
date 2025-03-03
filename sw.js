/**
 * Service Worker JoKenPo
 * @author Guilherme Rosa, Vitor de Assis, Wellington R Cruz.
 */

// Instalação (cache "armazenamento local")
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('static')
            .then((cache) => {
                cache.add('/jkp/')
                cache.add('/jkp/index.html')
                cache.add('/jkp/style.css')
                cache.add('/jkp/app.js')
                cache.add('/jkp/img/papel.png')
                cache.add('/jkp/img/pc.png')
                cache.add('/jkp/img/pcpapel.png')
                cache.add('/jkp/img/pcpedra.png')
                cache.add('/jkp/img/pctesoura.png')
                cache.add('/jkp/img/pedra.png')
                cache.add('/jkp/img/tesoura.png')
                cache.add('/jkp/img/bgyll.jpg')
            })
    )
})
// Ativação
self.addEventListener('activate', (event) => {
    console.log("Ativando o service worker...", event)
    return self.clients.claim()
})


// Interceptação (solicitações https servindo em cache quando off-line)
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                if (response) {
                    return response
                } else {
                    return fetch(event.request)
                }
            })
    )
})