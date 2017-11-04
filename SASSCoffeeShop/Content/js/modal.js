$(document).on('ready', function(){
    $oldmodal = $('.modal-frame');
    $oldoverlay = $('.modal-overlay');

    $modal = $('#attendant');
    $overlay = $('#attendant');

    $datemodal = $('#datepick');
    $dateoverlay = $('#datepick');
	
	$editeventmodal = $('#editevent');
    $editeventoverlay = $('#editevent');

    /* Need this to clear out the keyframe classes so they dont clash with each other between ener/leave. Cheers. */
    $modal.bind('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e){
      if($modal.hasClass('state-leave')) {
        $modal.removeClass('state-leave');
      }
    });

    $('.open').on('click', function(){
      $overlay.addClass('state-show');
      $modal.removeClass('state-leave').addClass('state-appear');
    });

    $datemodal.bind('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e){
      if($datemodal.hasClass('state-leave')) {
        $datemodal.removeClass('state-leave');
      }
    });

    $('.open').on('click', function(){
      $dateoverlay.addClass('state-show');
      $datemodal.removeClass('state-leave').addClass('state-appear');
    });
	
	    $editeventmodal.bind('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e){
      if($editeventmodal.hasClass('state-leave')) {
        $editeventmodal.removeClass('state-leave');
      }
    });

    $('.open').on('click', function(){
      $editeventoverlay.addClass('state-show');
      $editeventmodal.removeClass('state-leave').addClass('state-appear');
    });
	
	
	$('.close').on('click', function(){
      if($modal.hasClass('state-show')) {
        $overlay.removeClass('state-show');
        $modal.removeClass('state-appear').addClass('state-leave');
      }
      
      if($datemodal.hasClass('state-show')) {
        $dateoverlay.removeClass('state-show');
        $datemodal.removeClass('state-appear').addClass('state-leave');
      }
	  
	  if($editeventmodal.hasClass('state-show')) {
        $editeventoverlay.removeClass('state-show');
        $editeventmodal.removeClass('state-appear').addClass('state-leave');
      }
    });
  });