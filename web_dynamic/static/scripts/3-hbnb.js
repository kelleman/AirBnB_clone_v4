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

$.ajax({
  url: 'http://0.0.0.0:5001/api/v1/places_search/',
  method: 'POST',
  dataType: 'json',
  contentType: 'application/JSON',
  data: JSON.stringify({}),
  success: function (data) {
    $.each(data, function (k, v) {
      console.log(k, v);
      $(`<article>
      <div class="title">
      <h2>${v.name}</h2>
      <div class="price_by_night">
      ${v.price_by_night}
      </div>
      </div>
      <div class="information">
      <div class="max_guest">
      <i class = "fa fa-users fa-3x" aria - hidden = "true"></i>
      <br />
      ${v.max_guest} Guests
      </div>
      <div class="number_rooms">
      <i class="fa fa-bed fa-3x" aria - hidden = "true" > </i>
      <br />
      ${v.number_rooms} Bedrooms
      </div>
      <div class="number_bathrooms">
      <i class="fa fa-bath fa-3x" aria - hidden = "true"></i>
      <br />
      ${v.number_bathrooms} Bathroom
      </div>
      </div>
      <div class="user">
      <strong> Owner: ${v.user.first_name} ${v.user.last_name}</strong>
      </div>
      <div class="description">
      ${v.description}
      </div>
      </article>`).appendTo('.places');
    });
  }
});
