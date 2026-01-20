'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "60b2c4b871c1679c92958081aaedf57a",
"assets/AssetManifest.bin.json": "a51095d8a37232bcdc0d3b331a0dc855",
"assets/AssetManifest.json": "c3bc4e56bbe4697140eb7422402f8216",
"assets/assets/fonts/BoxIcons.ttf": "92ba7cbb384d35ae4858f9b59d8fc373",
"assets/assets/fonts/FontAwesome.ttf": "de6bf66865cf2734984feeeb9c638a3a",
"assets/assets/fonts/Nunito-Bold.ttf": "91019ffb3b1df640e444b34e5a73dfc3",
"assets/assets/fonts/Nunito-Regular.ttf": "0c890be2af0d241a2387ad2c4c16af2c",
"assets/assets/fonts/OctIcons.ttf": "71c7d381e58ae844420306f7a3bbbe5a",
"assets/assets/icons/flags/egypt.svg": "f42f4401fa8457ff9227bcf48dce7146",
"assets/assets/icons/flags/united-states-of-america.svg": "cfe34e9f0aee58b9de91362c139a90bd",
"assets/assets/icons/other/dart.svg": "4a0a9df85742ff469633877bd6e7bdaf",
"assets/assets/icons/other/firebase.svg": "a4cdca210685e2b66e70f9863d03a2de",
"assets/assets/icons/other/flask.svg": "ce8d0b878dbfc6f8eac23220ea3de765",
"assets/assets/icons/other/unity.svg": "435de37ddee95ac813182d4809a2a3fe",
"assets/assets/icons/software-development/flask.svg": "44fcfcf73e810db529833d2a47b32e81",
"assets/assets/icons/software-development/flutter.svg": "030f81e13f1a723e090651610a5d8c11",
"assets/assets/icons/software-development/java.svg": "64f6e32092e90b8a7fb090d3d003ccb1",
"assets/assets/icons/software-development/jenkins-svgrepo-com.svg": "f2e63a9cfdd3c2c9806a5413131ca0dd",
"assets/assets/icons/software-development/python.svg": "5a2e6e251257f03ebc51e5918cfcb4ae",
"assets/assets/images/gemini-ai.svg": "0334ff39340e3177666ff41b56170d4c",
"assets/assets/images/hands.png": "4eb9064ab383fc2ea3dc5813c959b7a5",
"assets/assets/images/icons8-gemini-ai.svg": "91411781f671f61ea8dd866dc2b7e912",
"assets/assets/images/logo.png": "ec4e40868695ea191ece5a171600c7bf",
"assets/assets/images/logo.svg": "56df167d29755c7b0d4052d9c53bb623",
"assets/assets/images/meal_recommendation.png": "c6876af1c1bc5c034f0a6b46aded551c",
"assets/assets/images/Recipe_app.png": "e71db9366f3eda85dc75450e0f216f6d",
"assets/assets/images/rest-api-icon.svg": "e82ea9c4960d7e9dc5c7f8fbaba4b053",
"assets/assets/images/spinner-dark.apng": "d7f6e0cca2ae052bdb7973799975027a",
"assets/assets/images/spinner-light.apng": "0aa2c9bee051117e80ffaafb604e9258",
"assets/assets/images/supabase.svg": "525c7eec6ffb91bd0434e462e59689c3",
"assets/assets/images/weather_app.jpg": "afb36142fbe38ea756338d0fa10a75a5",
"assets/assets/translations/ar.json": "57d11fa58154fa742e6d761b3db68415",
"assets/assets/translations/en.json": "20610c272a9b3a7a8f53de2a230aa030",
"assets/FontManifest.json": "0361baae30adca8ebc149077152a854a",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "28868ef3f5872572915a48a020655cf4",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "149c1bac4a2546b0d22be7b1ec237677",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "5e7ab1f8171e70d42f83f511d2e731d6",
"icons/Icon-192.png": "3a01c05f5a0299feb1c2b4597bf9c657",
"icons/Icon-512.png": "a9e5f75bed19237e146018bee3e2d8b6",
"icons/Icon-maskable-192.png": "3a01c05f5a0299feb1c2b4597bf9c657",
"icons/Icon-maskable-512.png": "a9e5f75bed19237e146018bee3e2d8b6",
"index.html": "084655fdcbc8b20e07adb0935f5f29fb",
"/": "084655fdcbc8b20e07adb0935f5f29fb",
"main.dart.js": "da296d7a243f2a98a7c55248a430b8fa",
"manifest.json": "ef85578c29305d1f1a034f8051df9667",
"splash/img/dark-1x.png": "f587552e1d189e0979afb3e29a238e35",
"splash/img/dark-2x.png": "296c43e81ae9399134bac6809d90744b",
"splash/img/dark-3x.png": "f454f889b737b180680ef785244e7408",
"splash/img/dark-4x.png": "0f13643cdba62f42f53ab20b45018b39",
"splash/img/light-1x.png": "64453cbe2aee44b2bbda46bff3c4ce26",
"splash/img/light-2x.png": "3e8fc278c35d56382b9fdda7cfeb12b8",
"splash/img/light-3x.png": "62a038592ad62b1c87b2fd0c8199b163",
"splash/img/light-4x.png": "82669e92227a3034fc4f2b7cc84b3872",
"version.json": "009c9e65172e010890f7f65fde438006"};
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
