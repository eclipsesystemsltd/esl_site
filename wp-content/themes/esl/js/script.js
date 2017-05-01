/* Author:

*/

function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
    return pattern.test(emailAddress);
};

$(function(){
	var hash = window.location.hash;
	
	if( $(hash).length == 0 )
	{
		hash = hash + '-management';
	}
	
	if( $(hash).length == 1 )
	{
		profile = $(hash).find('.profile');

		if( profile.length )
		{
			$( hash ).find('span.more-less').text('Less').addClass('more-less-up');
			$( hash ).find('hr').removeClass('green');
			$( profile ).css('height', 'auto');
			
			if( $( hash ).parent().attr('id') == "app-body" )
			{
				$(".case-tabs #web .tab-left-off").removeClass('tab-left-on');
			    $(".case-tabs #web .tab-middle-off").removeClass('tab-middle-on');
			    $(".case-tabs #web .tab-right-off").removeClass('tab-right-on');
			    
			    $(".case-tabs #mobile .tab-left-off").removeClass('tab-left-on');
			    $(".case-tabs #mobile .tab-middle-off").removeClass('tab-middle-on');
			    $(".case-tabs #mobile .tab-right-off").removeClass('tab-right-on');
			    
			    $(".case-tabs #app .tab-left-off").removeClass('tab-left-on');
			    $(".case-tabs #app .tab-middle-off").removeClass('tab-middle-on');
			    $(".case-tabs #app .tab-right-off").removeClass('tab-right-on');
		
			    $(".case-tabs #app .tab-left-off").addClass('tab-left-on');
			    $(".case-tabs #app .tab-middle-off").addClass('tab-middle-on');
			    $(".case-tabs #app .tab-right-off").addClass('tab-right-on');
		
			    $("#web-body").hide();
			    $("#mobile-body").hide();
			    $("#app-body").show();
			}
			else if( $( hash ).parent().attr('id') == "mobile-body" )
			{
				$(".case-tabs #web .tab-left-off").removeClass('tab-left-on');
			    $(".case-tabs #web .tab-middle-off").removeClass('tab-middle-on');
			    $(".case-tabs #web .tab-right-off").removeClass('tab-right-on');
			    
			    $(".case-tabs #mobile .tab-left-off").removeClass('tab-left-on');
			    $(".case-tabs #mobile .tab-middle-off").removeClass('tab-middle-on');
			    $(".case-tabs #mobile .tab-right-off").removeClass('tab-right-on');
			    
			    $(".case-tabs #app .tab-left-off").removeClass('tab-left-on');
			    $(".case-tabs #app .tab-middle-off").removeClass('tab-middle-on');
			    $(".case-tabs #app .tab-right-off").removeClass('tab-right-on');
		
			    $(".case-tabs #mobile .tab-left-off").addClass('tab-left-on');
			    $(".case-tabs #mobile .tab-middle-off").addClass('tab-middle-on');
			    $(".case-tabs #mobile .tab-right-off").addClass('tab-right-on');
		
			    $("#web-body").hide();
			    $("#app-body").hide();
			    $("#mobile-body").show();
			}
		}
		
		skill = $(hash+'.skills');
		
		if( skill.length )
		{
			$(skill).next('.profile').css('height', 'auto');
			$(skill).next('hr').removeClass('green');
			$(skill).next('.more-less').text('Less');
			$(skill).next('.more-less').addClass('more-less-up');
		}
	}

	$('select.chosen').chosen({disable_search_threshold: 40});
	$('#contact_type_chzn_o_0').remove();
	$('#application_role_chzn_o_0').remove();
	$('#application_location_chzn_o_0').remove();
	$('#application_sex_chzn_o_0').remove();
	$('#application_applied_before_chzn_o_0').remove();
	$('#application_heard_about_chzn_o_0').remove();
		

    $('.custom-button').mousedown(function(){
        $(this).addClass('orange-over');
    });

    $('.custom-button').mouseup(function(){
        $(this).removeClass('orange-over');
    });
		
    var sliderDelay = 12000;

    $("#slider").easySlider({
		auto: true,
		continuous: true,
		numeric: true,
		pause: sliderDelay,
		speedConstant: true,
		speed: 800,
		start: -1,
		nextPrevShow: false
	});

	var numberOfTimesClicked = 0;
	$('#controls li').click(function(){
		numberOfTimesClicked++;
		var numberOfThisClick = numberOfTimesClicked;
		setTimeout(function(){
			// This check ensures we don't fire multiple times if the user clicks more than once before the timeout expires
			if (numberOfThisClick === numberOfTimesClicked) {
				$('#slider').easySlider('start');
			}
		}, sliderDelay);
	});
	
	$("a#request_call_button").fancybox({
		'hideOnContentClick': false,
		'onComplete': function() {
		 	//$("#fancybox-wrap").css({'margin-top':'-50px'});
		 	$("#fancybox-close").attr("href", "javascript:void(0);");
		 	setTimeout('$("#fancybox-close").attr("href", "javascript:void(0);")', 100);
		 }
	});

    $("#controls li a").html(' ');
    
    $('.subsubmenu li').hover(function(){
    	var li = $(this).parent().parent().parent().find('li:first');
    	if ($(li).hasClass('blue'))
    		$(li).addClass('hover-submenu-effect');
    },function(){
    	var li = $(this).parent().parent().parent().find('li:first');
    	if ($(li).hasClass('blue'))
    		$(li).removeClass('hover-submenu-effect');
    });
    
    $('#request_call input[type=text]').keypress(function(e){
    	if (e.keyCode == 13) {
       		$('#submit_request').trigger('click');
            return false;
       	}
        //return false;
    });

    $('#submit_request').click(function(){
	    //Get the data from all the fields
        var name = $('#call_name');
        var phone = $('#call_phone');
        var email = $('#call_email');
        var emailto = $('#call_emailto');
        var mobile = $('#call_mobile');
        var message = $('#call_message');
        
        var error = 0;
        if (name.val() == '') {
            name.addClass('highlight');
            error = 1;
        } 
        else {
            name.removeClass('highlight');
        }
        
        if (phone.val() == '') {
            phone.addClass('highlight');
            error = 1;
        } 
        
        else {
            phone.removeClass('highlight');
        }
        
        if (email.val() == '') {
            email.addClass('highlight');
            error = 1;
        } 
        else {
            email.removeClass('highlight');
        }
        
        if (!isValidEmailAddress(email.val())) {
            email.addClass('highlight');
            error = 1;
        }
        else {
            email.removeClass('highlight');
        }
        
        if (message.val() == '') {
            message.addClass('highlight');
            error = 1;
        }   
        else {
            message.removeClass('highlight');
        }
        
        if (error == 1) {
        	$('#request_call .error_message').show();
        }    
        else {
            $('#request_call .error_message').hide();
            
            var data = 'name=' + encodeURIComponent(name.val()) +
                       '&phone=' + encodeURIComponent(phone.val()) +
                       '&email=' + encodeURIComponent(email.val()) +
                       '&emailto=' + encodeURIComponent(emailto.val()) +
                       '&mobile=' + encodeURIComponent(mobile.val()) +
                       '&message=' + encodeURIComponent(message.val());
            
            //start the ajax
            $.ajax({
                url: "/wp-content/themes/esl/process_request_call.php",
                type: "POST",
                data: data,
                cache: false,
                success: function (response) {
                    $('#request_call form').fadeOut('fast',function(){
                        $('#request_call .success').fadeIn('fast');
                        $('#request_call .error').hide();
                    });
                },
                error: function () {
                    $('#request_call form').fadeOut('fast',function(){
                        $('#request_call .error').fadeIn('fast');
                    });
                }
            });
        }
        return false;
    });    
    
    $('#submit_comment').click(function(){
	    $('#commentform').submit();
    });    

    $('#contact input[type=text]').keypress(function(e){
    	if (e.keyCode == 13) {
       		$('#submit_contact').trigger('click');
            return false;
       	}
        //return false;
    });

    $('#submit_contact').click(function(){
	    //Get the data from all the fields
        var forename = $('#contact_forename');
        var surname = $('#contact_surname');
        var phone = $('#contact_phone');
        var email = $('#contact_email');
        var type = $('#contact_type');
        var message = $('#contact_message');
        
        var error = 0;
        if (forename.val() == '') {
            forename.addClass('highlight');
            error = 1;
        } 
        else {
            forename.removeClass('highlight');
        }
        
        if (surname.val() == '') {
            surname.addClass('highlight');
            error = 1;
        } 
        else {
            surname.removeClass('highlight');
        }
                
        if (email.val() == '') {
            email.addClass('highlight');
            error = 1;
        } 
        else {
            email.removeClass('highlight');
        }
        
        if (!isValidEmailAddress(email.val())) {
            email.addClass('highlight');
            error = 1;
        }
        else {
            email.removeClass('highlight');
        }
        
        if (type.val() == '') {
            type.addClass('highlight');
            $('#contact_type_chzn').addClass('highlight');
            error = 1;
        }   
        else {
            type.removeClass('highlight');
            $('#contact_type_chzn').removeClass('highlight');
        }
                
        if (error == 1) {
        	$('#contact .error_message').show();
        }
        else {
            $('#contact .error_message').hide();
                   
            var data = 'forename=' + encodeURIComponent(forename.val()) +
                       '&surname=' + encodeURIComponent(surname.val()) +
                       '&phone=' + encodeURIComponent(phone.val()) +
                       '&email=' + encodeURIComponent(email.val()) +
                       '&type=' + encodeURIComponent(type.val()) +
                       '&message=' + encodeURIComponent(message.val());
            
            //start the ajax
            $.ajax({
                url: "/wp-content/themes/esl/process_contact_us.php",
                type: "POST",
                data: data,    
                cache: false,
                success: function (response) {             
                    $('form.#contact').fadeOut('fast',function(){
                        $('#contact_success').fadeIn('fast');
                    });                             
                },
                error: function () {             
                    $('form.#contact').fadeOut('fast',function(){
                        $('#contact_error').fadeIn('fast');
                    });                             
                }       
            });
        }
        return false;
    });    
    
    $('#application.application_form input[type=text]').keypress(function(e){
    	if (e.keyCode == 13) {
       		$('#submit_application').trigger('click');
            return false;
       	}
        
    });

    $('#submit_application').click(function(){
	    //Get the data from all the fields
	    //Required fields
        var application_role = $('#application_role');
        var application_location = $('#application_location');
        var application_forename = $('#application_forename');
        var application_surname = $('#application_surname');
        var application_sex = $('#application_sex');
        var application_phone = $('#application_phone');
        var application_email = $('#application_email');
        var application_prefer_start = $('#application_prefer_start');
        var application_applied_before = $('#application_applied_before');
        var application_heard_about = $('#application_heard_about');
        var application_heard_about_other = $('#application_heard_about_other');
        
	    //Error check
        var error = 0;
        if (application_role.val() == '') {
            application_role.addClass('highlight');
            $('#application_role_chzn').addClass('highlight');
            error = 1;
        }
        else {
            application_role.removeClass('highlight');
            $('#application_role_chzn').removeClass('highlight');
        }
        if (application_location.val() == '') {
            application_location.addClass('highlight');
            $('#application_location_chzn').addClass('highlight');
            error = 1;
        } 
        else {
            application_location.removeClass('highlight');
            $('#application_location_chzn').removeClass('highlight');
        }
        if (application_forename.val() == '') {
            application_forename.addClass('highlight');
            error = 1;
        } 
        else {
            application_forename.removeClass('highlight');
        }
        if (application_surname.val() == '') {
            application_surname.addClass('highlight');
            error = 1;
        } 
        else {
            application_surname.removeClass('highlight');
        }
        if (application_sex.val() == '') {
            application_sex.addClass('highlight');
            $('#application_sex_chzn').addClass('highlight');
            error = 1;
        } 
        else {
            application_sex.removeClass('highlight');
            $('#application_sex_chzn').removeClass('highlight');
        }
        if (application_phone.val() == '') {
            application_phone.addClass('highlight');
            error = 1;
        } 
        else {
            application_phone.removeClass('highlight');
        }
        if (application_email.val() == '') {
            application_email.addClass('highlight');
            error = 1;
        } 
        else {
            application_email.removeClass('highlight');
        }
        if (application_prefer_start.val() == '') {
            application_prefer_start.addClass('highlight');
            error = 1;
        } 
        else {
            application_prefer_start.removeClass('highlight');
        }
        if (application_applied_before.val() == '') {
            application_applied_before.addClass('highlight');
            $('#application_applied_before_chzn').addClass('highlight');
            error = 1;
        } 
        else {
            application_applied_before.removeClass('highlight');
            $('#application_applied_before_chzn').removeClass('highlight');
        }
        if (application_heard_about.val() == '') {
            application_heard_about.addClass('highlight');
            $('#application_heard_about_chzn').addClass('highlight');
            error = 1;
        } 
        else {
            application_heard_about.removeClass('highlight');
            application_heard_about_other.removeClass('highlight');
            $('#application_heard_about_chzn').removeClass('highlight');
       }
        if (application_heard_about.val() == 'Other' && application_heard_about_other.val() == '') {
            application_heard_about_other.addClass('highlight');
            error = 1;
        } 
        else {
            application_heard_about_other.removeClass('highlight');
        }

        if (error == 1) {
        	$('#application .error_message').show();
	       	return false;
        } 
        else {
       		$('#application .error_message').hide();
	        $('#application').submit();
        }

    });    

    $('#application.cv_form input[type=text]').keypress(function(e){
    	if (e.keyCode == 13) {
       		$('#submit_cv').trigger('click');
            return false;
       	}
        //
    });

    $('.submit-form').keypress(function(e){
        $(this).find('.form-submit-link').trigger('click');
        return false;
    });

    $('#submit_cv').click(function(){
	    //Get the data from all the fields
 	    //Required fields
        var application_role = $('#application_role');
        var application_location = $('#application_location');
        var application_forename = $('#application_forename');
        var application_surname = $('#application_surname');
        var application_sex = $('#application_sex');
        var application_phone = $('#application_phone');
        var application_email = $('#application_email');
        var application_prefer_start = $('#application_prefer_start');
        var application_applied_before = $('#application_applied_before');
        var application_file = $('#application_file');

	    //Error check
        var error = 0;
        if (application_role.val() == '') {
            application_role.addClass('highlight');
            $('#application_role_chzn').addClass('highlight');
            error = 1;
        }
        else {
            application_role.removeClass('highlight');
            $('#application_role_chzn').removeClass('highlight');
        }
        if (application_location.val() == '') {
            application_location.addClass('highlight');
            $('#application_location_chzn').addClass('highlight');
           error = 1;
        } 
        else {
            application_location.removeClass('highlight');
            $('#application_location_chzn').removeClass('highlight');
        }
        if (application_forename.val() == '') {
            application_forename.addClass('highlight');
            error = 1;
        } 
        else {
            application_forename.removeClass('highlight');
        }
        if (application_surname.val() == '') {
            application_surname.addClass('highlight');
            error = 1;
        } 
        else {
            application_surname.removeClass('highlight');
        }
        if (application_sex.val() == '') {
            application_sex.addClass('highlight');
            $('#application_sex_chzn').addClass('highlight');
            error = 1;
        } 
        else {
            application_sex.removeClass('highlight');
            $('#application_sex_chzn').removeClass('highlight');
        }
        if (application_phone.val() == '') {
            application_phone.addClass('highlight');
            error = 1;
        } 
        else {
            application_phone.removeClass('highlight');
        }
        if (application_email.val() == '') {
            application_email.addClass('highlight');
            error = 1;
        } 
        else {
            application_email.removeClass('highlight');
        }
        if (application_prefer_start.val() == '') {
            application_prefer_start.addClass('highlight');
            error = 1;
        } 
        else {
            application_prefer_start.removeClass('highlight');
        }
        if (application_applied_before.val() == '') {
            application_applied_before.addClass('highlight');
            $('#application_applied_before_chzn').addClass('highlight');
            error = 1;
        } 
        else {
            application_applied_before.removeClass('highlight');
            $('#application_applied_before_chzn').removeClass('highlight');
        }
        if (application_file.val() == '') {
            application_file.addClass('highlight');
            error = 1;
        } 
        else {
            application_file.removeClass('highlight');
        }

        if (error == 1) {
       		$('#application .error_message').show();
	       	return false;
        } 
        else {
       		$('#application .error_message').hide();
	        $('#application').submit();
        }
    });    

    var clientNextTimeout;
    var clientNextSpeed = 4000;
    clientNextTimeout = setTimeout("$('#clients-next').trigger('click');", clientNextSpeed);
    
	$('#clients-next').click(function(){
		clearTimeout(clientNextTimeout);
		
    	var current = $(this).parent().find("div.logos div.page:visible");
    	var next = $(current).next();
    	
    	if ($(next).hasClass('page'))
    	{
    	}
    	else 
    	{
	    	next = $('.logos').find('div.page:first');
    	}
    	    	
    	$(current).fadeOut('fast', function() {
    		$(next).fadeIn('fast');
    	});
    	
    	clientNextTimeout = setTimeout("$('#clients-next').trigger('click');", clientNextSpeed);
    });

    $('#clients-prev').click(function () {
		clearTimeout(clientNextTimeout);

    	var current = $(this).parent().find("div.logos div.page:visible");
    	var prev = $(current).prev();

    	if ($(prev).hasClass('page'))
    	{
    	}
    	else 
    	{
	    	prev = $('.logos').find('div.page:last');
    	}

    	$(current).fadeOut('fast', function() {
    		$(prev).fadeIn('fast');
    	});

    	clientNextTimeout = setTimeout("$('#clients-next').trigger('click');", clientNextSpeed);
    });
    
	$(".management-team h3").click(function(){
		$(this).next('.more-less').trigger('click');
	})

    $(".management-team .more-less").click(function () {
		var _this = $(this);
		
		window.location.hash = $(_this).parent().attr('id');
		
		var profile = $(_this).parent().find("div.restrict-height");
		var hr = $(_this).parent().find("hr");
		if ($(_this).text() == 'More') {
			$(".management-team .more-less-up").each(function(){
				//$(this).removeClass('more-less-up');
				//$(this).parent().find("div.restrict-height").animate({height: '107px'}, 'fast');
				//$(this).parent().find("hr").addClass('green');
				//$(this).text('More');
			})
			$(profile).animate({height: profile[0].scrollHeight}, 'fast');
			$(hr).removeClass('green');
			$(_this).text('Less');
			$(_this).addClass('more-less-up');
		} else {
			$(profile).animate({height: '137px'}, 'fast');
			$(hr).addClass('green');
			$(_this).text('More');
			$(_this).removeClass('more-less-up');
		}
		return false;
	});
        
        $(".management-team .profile").click(function() {
            $(this).closest('.management-team').find(".more-less").trigger('click');            
        });
	
	$(".skills h3").click(function(){
		$(this).next('.more-less').trigger('click');
	})
	
    $(".skills .more-less").click(function () {
		var _this = $(this);
		var profile = $(_this).parent().find("div.restrict-height");
		var hr = $(_this).parent().find("hr");
		if ($(_this).text() == 'More') {
			$(".skills .more-less-up").each(function(){
				//$(this).removeClass('more-less-up');
				//$(this).parent().find("div.restrict-height").animate({height: '0px'}, 'fast');
				//$(this).parent().find("hr").addClass('green');
				//$(this).text('More');
			})
			$(profile).animate({height: profile[0].scrollHeight}, 'fast');
			$(hr).removeClass('green');
			$(_this).text('Less');
			$(_this).addClass('more-less-up');
		} else {
			$(profile).animate({height: '0px'}, 'fast');
			$(hr).addClass('green');
			$(_this).text('More');
			$(_this).removeClass('more-less-up');
		}
		return false;
	});

	$(".case-study h3").click(function(){
		$(this).next('.more-less').trigger('click');
	})
	
    $(".case-study .more-less").click(function () {
		var _this = $(this);
		
		window.location.hash = $(_this).parent().attr('id');
		
		var profile = $(_this).parent().find("div.restrict-height");
		var hr = $(_this).parent().find("hr");
		if ($(_this).text() == 'More') {
			$(".case-study .more-less-up").each(function(){
				//$(this).removeClass('more-less-up');
				//$(this).parent().find("div.restrict-height").animate({height: '96px'}, 'fast');
				//$(this).parent().find("hr").addClass('green');
				//$(this).text('More');
			})
			$(profile).animate({height: profile[0].scrollHeight}, 'fast');
			$(hr).removeClass('green');
			$(_this).text('Less');
			$(_this).addClass('more-less-up');
		} else {
			$(profile).animate({height: '96px'}, 'fast');
			$(hr).addClass('green');
			$(_this).text('More');
			$(_this).removeClass('more-less-up');
		}
		return false;
	});

    $(".case-study .profile").click(function() {
        $(this).closest('.case-study').find(".more-less").trigger('click');            
    });
    
    $(".case-tabs #web").click(function () {
	    $(".case-tabs #web .tab-left-off").removeClass('tab-left-on');
	    $(".case-tabs #web .tab-middle-off").removeClass('tab-middle-on');
	    $(".case-tabs #web .tab-right-off").removeClass('tab-right-on');
	    
	    $(".case-tabs #mobile .tab-left-off").removeClass('tab-left-on');
	    $(".case-tabs #mobile .tab-middle-off").removeClass('tab-middle-on');
	    $(".case-tabs #mobile .tab-right-off").removeClass('tab-right-on');
	    
	    $(".case-tabs #app .tab-left-off").removeClass('tab-left-on');
	    $(".case-tabs #app .tab-middle-off").removeClass('tab-middle-on');
	    $(".case-tabs #app .tab-right-off").removeClass('tab-right-on');

	    $(".case-tabs #web .tab-left-off").addClass('tab-left-on');
	    $(".case-tabs #web .tab-middle-off").addClass('tab-middle-on');
	    $(".case-tabs #web .tab-right-off").addClass('tab-right-on');
	    
	    $("#mobile-body").hide();
	    $("#app-body").hide();
	    $("#web-body").show();

		return false;
	});

    $(".case-tabs #mobile").click(function () {
	    $(".case-tabs #web .tab-left-off").removeClass('tab-left-on');
	    $(".case-tabs #web .tab-middle-off").removeClass('tab-middle-on');
	    $(".case-tabs #web .tab-right-off").removeClass('tab-right-on');
	    
	    $(".case-tabs #mobile .tab-left-off").removeClass('tab-left-on');
	    $(".case-tabs #mobile .tab-middle-off").removeClass('tab-middle-on');
	    $(".case-tabs #mobile .tab-right-off").removeClass('tab-right-on');
	    
	    $(".case-tabs #app .tab-left-off").removeClass('tab-left-on');
	    $(".case-tabs #app .tab-middle-off").removeClass('tab-middle-on');
	    $(".case-tabs #app .tab-right-off").removeClass('tab-right-on');

	    $(".case-tabs #mobile .tab-left-off").addClass('tab-left-on');
	    $(".case-tabs #mobile .tab-middle-off").addClass('tab-middle-on');
	    $(".case-tabs #mobile .tab-right-off").addClass('tab-right-on');

	    $("#web-body").hide();
	    $("#app-body").hide();
	    $("#mobile-body").show();

		return false;
	});

    $(".case-tabs #app").click(function () {
	    $(".case-tabs #web .tab-left-off").removeClass('tab-left-on');
	    $(".case-tabs #web .tab-middle-off").removeClass('tab-middle-on');
	    $(".case-tabs #web .tab-right-off").removeClass('tab-right-on');
	    
	    $(".case-tabs #mobile .tab-left-off").removeClass('tab-left-on');
	    $(".case-tabs #mobile .tab-middle-off").removeClass('tab-middle-on');
	    $(".case-tabs #mobile .tab-right-off").removeClass('tab-right-on');
	    
	    $(".case-tabs #app .tab-left-off").removeClass('tab-left-on');
	    $(".case-tabs #app .tab-middle-off").removeClass('tab-middle-on');
	    $(".case-tabs #app .tab-right-off").removeClass('tab-right-on');

	    $(".case-tabs #app .tab-left-off").addClass('tab-left-on');
	    $(".case-tabs #app .tab-middle-off").addClass('tab-middle-on');
	    $(".case-tabs #app .tab-right-off").addClass('tab-right-on');

	    $("#web-body").hide();
	    $("#mobile-body").hide();
	    $("#app-body").show();

		return false;
	});

    var other_map_loaded = false;
    
    function updatePageTitle(title) {
      document.title = document.title.replace(/^[^\|]*?\|/, title + ' |');
      $('#main-content > h2').html(title);     
    }
    
    $(".location-tabs > div").click(function () {
        $(".location-tabs .tab-left-on").removeClass('tab-left-on');
	$(".location-tabs .tab-middle-on").removeClass('tab-middle-on');
	$(".location-tabs .tab-right-on").removeClass('tab-right-on');
	    
	$(this).find(".tab-left-off").addClass('tab-left-on');
	$(this).find(".tab-middle-off").addClass('tab-middle-on');
	$(this).find(".tab-right-off").addClass('tab-right-on');

	id = $(this).attr('id');
        page_title = $(this).data('page-title');
        
        $('#london-body').hide();
        $('#liss-body').hide();
        $('#'+id+'-body').show();
	
    	if (other_map_loaded === false)
    	{ 
          $('#'+id+'-map').html($('#'+id+'-iframe').html());
        }
	other_map_loaded = 'true';
        
        updatePageTitle(page_title);
        window.history.replaceState("object or string", "Title", '/locations/' + id);
    });
	
    $('#pagination_copy').html($('#pagination').html());

});




