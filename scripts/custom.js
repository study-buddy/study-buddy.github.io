$(document).ready(function() {
	"use strict";
	
	$("h4 a").click(function(){	
		$("a.active").removeClass("active");
		$(this).addClass("active");
	});

	// Tooltip	
	$('.tooltip1').tooltip();
	
	//Popover
	$("a.popover-option").popover({
        placement : 'bottom'
    });
	
	//Table
	$("tr:odd").addClass("odd");
	$("tr:even").addClass("even");
	
	//Toggle
	$('.toggle .toggle-btn').on('click', function(e) {
		e.preventDefault();
		var $this = $(this);
		var $collapse = $this.closest('.collapse-group').find('.collapse');
		$collapse.collapse('toggle');
		$(".toggle a.active").removeClass("active");
		$(this).addClass("active");
		$(".active").parent().find('.collapse').addClass( "in" );
	});
	$(".toggle ul li:first-child div").addClass( "in" );
	
	// Page Scroll
	(function($){
		$(window).load(function(){
			
			/* Page Scroll to id fn call */
			$(".navigation-menu a,a[href='#top'],a[rel='m_PageScroll2id']").mPageScroll2id({
				highlightSelector:"#navigation-menu a"
			});
			
			/* demo functions */
			$("a[rel='next']").click(function(e){
				e.preventDefault();
				var to=$(this).parent().parent("section").next().attr("id");
				$.mPageScroll2id("scrollTo",to);
			});
			
		});
	})(jQuery);
	
	$('#submitemail')
	  .on('focus', function(){
		  var $this = $(this);
		  if($this.val() == 'Enter your email'){
			  $this.val('');
		  }
	  })
	  .on('blur', function(){
		  var $this = $(this);
		  if($this.val() == ''){
			  $this.val('Enter your email');
		  }
	  });
	  
	  $('#semail')
	  .on('focus', function(){
		  var $this = $(this);
		  if($this.val() == 'Email Address'){
			  $this.val('');
		  }
	  })
	  .on('blur', function(){
		  var $this = $(this);
		  if($this.val() == ''){
			  $this.val('Email Address');
		  }
	  });
});
