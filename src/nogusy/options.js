var lsKey = 'nogusy';
var _defaults = {
  selector: '.articles-show-click'
};
var $input = document.getElementById('gunosy-selector');

var save = function(val) {
  return localStorage.setItem(lsKey, JSON.stringify(val));
}
var load = function() {
  return JSON.parse(localStorage.getItem(lsKey));
}
// ini
var options = load() || _defaults;

$input.addEventListener('change', function(e){
  options = {
    selector: this.getAttribute('value')
  } || load() || _defaults;
  save(options);
});

$input.setAttribute('value', options.selector);
$input.setAttribute('placeholder', options.selector);
save(options);
