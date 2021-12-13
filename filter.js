// Filter 
$(".filter select").on('change', function() {
  var filters = $.map($(".filter select").toArray(), function(e) {
    return $(e).val();
  }).join(".");
  $("table").find("tr").hide();
  $("table").find("tr." + filters).show();
});
// Reset
$('button').on('click', function(){
		$(".filter select").val( $("option:first").val() );
		$("table").find("tr").show();
});
