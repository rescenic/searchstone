self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('searchstone').then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html',
       '/app.css',
       '/js/app.js',
       '/js/sunwell.js',
       '/fonts/Belwe.ttf',
       '/fonts/Belwe.woff',
       '/fonts/Belwe.woff2',
       '/img/1px-transparent.png',
       '/img/attack.svg',
       '/img/back-loading.png',
       '/img/cardback-legendrank.png',
       '/img/ClassHeaders.png',
       '/img/classIcons.svg',
       '/img/common.svg',
       '/img/cristal--active.svg',
       '/img/cristal.svg',
       '/img/dust.png',
       '/img/epic.svg',
       '/img/free.svg',
       '/img/health.svg',
       '/img/icon-collapse.svg',
       '/img/icon-expand.svg',
       '/img/legendary.svg',
       '/img/logo-instantsearch.svg',
       '/img/og_screen.png',
       '/img/powered-by-algolia.svg',
       '/img/rare.svg',
       '/img/ripple.svg',
       '/img/searchstone.svg',
       '/img/setIcons.svg',
       '/img/shield.svg',
       '/img/swords.svg',
     ]);
   })
 );
});
