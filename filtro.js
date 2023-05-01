jQuery(document).ready(function ($) {
	 if ($("body").hasClass('desarrollos')){
	 	items = $(".breadcrumbs a:gt(0)");
	 	$(items).each(function(index, el) {
	 		var para = $(el).attr('href');
	 		if ($(".desarrollos_list .grid-item." + para ).length==0) {
	 			sub_nav = $(el).prev(".subnav_separador");
	 			$(sub_nav).remove();
	 			$(el).remove();
	 			$("#selector_filtro option[value="+para+"]").remove();
	 		}
	 	});
	 }

	 $(".desarrollos_filtros a").on('click', function(event) {
	 	event.preventDefault();
	 	$(".desarrollos_filtros a").removeClass('active');
	 	var para = $(this).attr('href');
	 	$(this).addClass('active');
	 	actualizarItemsLista(para);
	 });

	 $("#selector_filtro").on('change', function(event) {
	 	event.preventDefault();
	 	var para = $(this).val();
	 	actualizarItemsLista(para);
	 });

	 function actualizarItemsLista(para){
	 	$(".desarrollos_list").addClass('oculta');
	 	setTimeout(function(){ 
		 	$(".desarrollos_list .grid-item").addClass('hidden');
		 	
		 	if (para=='') $(".desarrollos_list .grid-item").removeClass('hidden');
		 	else $(".desarrollos_list .grid-item." + para ).removeClass('hidden');
	 	}, 200);
	 	setTimeout(function(){ 
	 		$(".desarrollos_list").removeClass('oculta'); 
	 	}, 400);
	 }
}
