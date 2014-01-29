chrome.extension.sendRequest({}, function(options) {
  var $a = document.querySelector(options.selector);
  if ($a && $a.getAttribute('href')) {
    window.location = $a.getAttribute('href');
  }
  console.error('element not found:' + options.selector);
});
