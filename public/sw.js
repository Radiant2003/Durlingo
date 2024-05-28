self.addEventListener("install", function (event) {
    console.log("Hello world from the Service Worker 🤙");
  });
  
  self.addEventListener('activate', () => {
    console.log('service worker activated');
  });