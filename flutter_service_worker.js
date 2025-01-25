'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "72157788e7680e6df5a0b1b0a9551c48",
"version.json": "1ec4c375f64d09b5e9814c227830f5d0",
"index.html": "6c90eca67ec7b345f57512c1bb3e19cc",
"/": "6c90eca67ec7b345f57512c1bb3e19cc",
"main.dart.js": "da39b434ddd21097294a11961824c3c8",
"sqlite3.wasm": "fa7637a49a0e434f2a98f9981856d118",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"sqflite_sw.js": "732b0b99e705b1cc07ef548327ac58ff",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "777740f069799b4446c621c0a387ff81",
"assets/AssetManifest.json": "5cf6501b79a99d6bd171e4c4bfbe0b76",
"assets/NOTICES": "c1d63fd8dc084c49712db36080bf8e08",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "a2d88ef5774b0009510c149a26159977",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "9c1fcf4f516e1580e2741d44ff053992",
"assets/fonts/MaterialIcons-Regular.otf": "a1352a0f9d2f97ec3a7035ac7659eedf",
"assets/assets/warmbloods.webp": "ef028129fe0ca510852971fd2cfd689b",
"assets/assets/great_dane.webp": "fe0374da5b64c26188473bfc0ebb053b",
"assets/assets/guernsey.jpg": "6bc28fc76bfce9ca6ec19d8617ed41c1",
"assets/assets/african_grey_parrot.jpeg": "f41060a7940209db7a89a8f4c2fe1105",
"assets/assets/american_quarter.jpg": "23bcb622d11b5f7ca383c1d76d2c39ef",
"assets/assets/shih_tzus.webp": "416c5cd5d22f4ceb1baba4bb567364c6",
"assets/assets/brownswiss.jpg": "31bd99ba99a2d9e2b9b110bf642eddf5",
"assets/assets/appaloosa.webp": "3c72573aa75ad02f5884a50278ff8c37",
"assets/assets/ayrshire.jpg": "1cbc15b1eb93b6e32665b10875842f5e",
"assets/assets/boxer.webp": "55860cc1feacecb0066bbff0ade27f9c",
"assets/assets/indie.webp": "d4b142c186ab5c8853921e1bd462b2fd",
"assets/assets/dove.jpeg": "469cb12c101e5b989eb10f8174df782d",
"assets/assets/tibetan_mastiff.webp": "320962efaa7507d7cb589296abd715c7",
"assets/assets/cockatiel.jpg": "3e1fd5c317044bf1669c867fd1f7e9e3",
"assets/assets/canary.jpeg": "28901cceab671de70f943e069bd2fdf9",
"assets/assets/pug.webp": "4e51cb01079affb1b54587084f821578",
"assets/assets/cocker_spaniel.webp": "479e2b9b795821be0f3ffc6d444970a3",
"assets/assets/morgan.webp": "e376346964d7d87be8b9e3782025628c",
"assets/assets/pionus_parrot.jpeg": "8461825bb3970c6263ed0c515b7ba716",
"assets/assets/arabian.webp": "10fad847fb89cab05c7129983f9580f0",
"assets/assets/rottweiler.webp": "e966080c864aa6aa2425536fb42e33b2",
"assets/assets/grade_horse.jpg": "d0bdbadfd89a99cdb2af71b598acde2e",
"assets/assets/pomeranian.webp": "e76f258879b84dbb379ad2b84fed3960",
"assets/assets/doberman.webp": "dfcc6b935d109febaa384a6801b88fa3",
"assets/assets/persian_cat.webp": "a9a789fdaab64ed54146bca3fe4f6f63",
"assets/assets/hyacinth_macaw.jpeg": "0b31666e6876c1ccb0d11f440151ada8",
"assets/assets/golden_retriever.webp": "b11f1f1c375f609708a79329c1820371",
"assets/assets/jersey.jpg": "5f711a89dace2157e920c6e0e1264f7f",
"assets/assets/holstein.jpg": "1c11018ec786d90ac364b7b78262fefe",
"assets/assets/bengal_cat.jpg": "808aa4759a45f7141dfe7dd519f524f2",
"assets/assets/thoroughbred.webp": "f68011b5ae3becadf660d4dd03546c7c",
"assets/assets/oriental_shorthair_cat.webp": "8517fa9aca2f1707b7a9ce02006dc4ea",
"assets/assets/ponies.webp": "e86b11eb2fef74e86b822fb0846fd30e",
"assets/assets/abyssinian_cat.webp": "1436b1b822029b1b9ffb953c1ebe8efc",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
