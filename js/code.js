function formatParts(data) {
  return '<span>Код: ' + data.part_number +
    '</span> - <b> Назва: ' + data.part_desc + '</b>' +
    ' Кількість: ' + data.qty + 'Ціна: ' + data.price + ' грн';
}

function formatResult(data) {
  var d = data.part_desc ? data.part_desc : 'Код товару';
  return '<span>' + d + '</span>';
}

$(document).ready(function () {
  $('#search-select').select2({
    placeholder: "Select a state",
    ajax: {

      url: "https://autopartner.herokuapp.com/search",
      dataType: 'json',
      delay: 250,

      data: function (params) {
        console.log(params);
        return {
          q: params.term
        };
      },
      processResults: function (data, params) {
        params.page = params.page || 1;

        return {
          results: data.body,
          pagination: {
            more: (params.page * 30) < data.total_count
          }
        };
      },
      cache: true
    },
    escapeMarkup: function (markup) {
      return markup;
    },
    minimumInputLength: 3,
    templateResult: formatParts,
    templateSelection: formatResult
  });
});
