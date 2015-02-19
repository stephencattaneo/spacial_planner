App = function(){};

App.prototype.init = function() {
  this.add_control_listeners();
  this.content = $('#content');
};

App.prototype.add_control_listeners = function() {
  $('#controls .add_object').on('click', this.add_object.bind(this));
  $('#controls .update_floor_size').on('click', this.update_floor_size.bind(this));
};

App.prototype.add_object = function(event) {
  // body...
};

App.prototype.calc_pixels = function(selector) {
  return ($('#controls .height').val() * $(selector).val()) + 'px';
};

App.prototype.update_floor_size = function(event) {
  this.height(this.calc_pixels('#controls .height'));
  this.width(this.calc_pixels('#controls .width'));
};

$(function () {(new App).init()});
