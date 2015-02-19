App = function(){};

App.prototype.init = function() {
  this.add_control_listeners();
  this.content = $('#content');
  this._zindex = 10;

  $('#controls .update_floor_size').trigger('click');
};

App.prototype.add_control_listeners = function() {
  $('#controls .add_object').on('click', this.add_object.bind(this));
  $('#controls .update_floor_size').on('click', this.update_floor_size.bind(this));
};

App.prototype.add_object = function(event) {
  $( "#dialog" ).dialog({
    buttons: [{
      text: "OK",
      click: this.generate_object.bind(this)
    }]
  });
};

App.prototype.generate_object = function(event) {
  // debugger;
  var button_container = $('<div>');
  button_container.append($('<button>', {text: '+'}));
  button_container.append($('<button>', {text: '-'}));
  button_container.append($('<button>', {text: 'X'}));

  var el = $('<div>', {'class': 'object'});
  el.append(button_container);
  el.append($('<div>', {text: $('#dialog .name').val()}));

  el.appendTo('#content');
  el.css('z-index', this.next_zindex());
  el.offset($('#content').offset());
  el.height(this.calc_pixels('#dialog .height'));
  el.width(this.calc_pixels('#dialog .width'));
  el.draggable();

  $("#dialog").dialog("close");
};

App.prototype.next_zindex = function() {
  return this._zindex++;
};

App.prototype.calc_pixels = function(selector) {
  return ($('#controls .factor').val() * $(selector).val()) + 'px';
};

App.prototype.update_floor_size = function(event) {
  this.content.height(this.calc_pixels('#controls .height'));
  this.content.width(this.calc_pixels('#controls .width'));
};

$(function () {(new App).init()});
