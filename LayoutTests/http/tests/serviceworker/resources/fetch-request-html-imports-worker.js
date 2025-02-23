self.addEventListener('fetch', function(event) {
    var url = event.request.url;
    if (url.indexOf('dummy-dir') == -1) {
      return;
    }
    var result = 'mode=' + event.request.mode +
      ' credentials=' + event.request.credentials;
    if (url == 'http://127.0.0.1:8000/dummy-dir/same.html') {
      event.respondWith(new Response(
        result +
        '<link id="same-same" rel="import" ' +
        'href="http://127.0.0.1:8000/dummy-dir/same-same.html">' +
        '<link id="same-other" rel="import" ' +
        ' href="http://localhost:8000/dummy-dir/same-other.html">'));
    } else if (url == 'http://localhost:8000/dummy-dir/other.html') {
      event.respondWith(new Response(
        result +
        '<link id="other-same" rel="import" ' +
        ' href="http://127.0.0.1:8000/dummy-dir/other-same.html">' +
        '<link id="other-other" rel="import" ' +
        ' href="http://localhost:8000/dummy-dir/other-other.html">'));
    } else {
      event.respondWith(new Response(result));
    }
  });
