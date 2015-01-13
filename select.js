/*! Copyright (c) 2015 Tsoy Andrey
* Licensed under the MIT License (license.txt).
*
* Version: 1.0.0
*
* Requires: jQuery
*/

$.fn.xSelect = function(_options) {

	var _options = $.extend({}, _options);
    
	return this.each(function() {
        var select = $(this),
            selectHtml = $('<div class="select"><div class="select__text"></div><ul></ul></div>'),            
            selectText = $('.select__text', selectHtml),
            _select = $('ul', selectHtml),
            _selectedText = select.find(':selected').html();
            
        select.addClass('shidden');
        selectText.click(function() {selectHtml.toggleClass('select__open');});
                                             
        select.find('option').each(function(){
            var option = $(this),            
                _option = $('<li><a href="#">' + option.html() + '</a></li>');
                            
			if(option.prop('selected')) {_option.addClass('selected');}
            
            _option.children('a').click(function(e) {
                e.preventDefault();
                if (!option.prop('selected')) {
                    _select.find('li.selected').removeClass('selected');
                    $(this).closest('li').addClass('selected');                                        
                    option.prop('selected', 'selected');                                
                    selectText.html(option.html());
                    select.change();                                                
                }
                selectHtml.removeClass('select__open');                             
            });                    
            _select.append(_option);
        });
        select.after(selectHtml);
        selectText.html(_selectedText); 			
	});
};


$(document).ready(function(){
    $('.xselect').xSelect();
});