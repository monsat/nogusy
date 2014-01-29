var lsKey = 'nogusy';
var _defaults = {
  selector: '.articles-show-click'
};
chrome.extension.onRequest.addListener(
  function(request, sender, sendResponse) {
    var options = JSON.parse(localStorage.getItem(lsKey)) || _defaults;
    sendResponse(options);
  }
);
