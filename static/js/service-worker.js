self.addEventListener('install', function(event) {
    event.waitUntil(
    caches.open('v1').then(function(cache) {
        return cache.addAll([
        '/static/css/bootstrap.min.css',
        '/static/fonts/fontawesome-free-6.5.2-web/js/all.js',
        '/static/js/bootstrap.bundle.min.js'
        ]);
    })
    );
});
