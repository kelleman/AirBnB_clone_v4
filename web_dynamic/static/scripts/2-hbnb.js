$(document).ready(function () {
  let amenitiesObj = {};
  $('input:checkbox').change(function () {
    if (this.checked) {
      amenitiesObj[$(this).data('id')] = ' ' + $(this).data('name');
    } else {
      delete amenitiesObj[$(this).data('id')];
    }
    $('DIV.amenities h4').text(Object.values(amenitiesObj));
  });
});

$.get('http://0.0.0.0:5001/api/v1/status/', function (data) {
  if (data.status === 'OK') {
    $('div#api_status').addClass('available');
  } else {
    $('div#api_status').removeClass('available');
  }
});
