$(document).on('ready', function(){
    // $modal = $('.modal-frame');
    // $overlay = $('.modal-overlay');

    $modal = $('#attendant');
    $overlay = $('#attendant');

    $datemodal = $('#datepick');
    $dateoverlay = $('#datepick');

    /* Need this to clear out the keyframe classes so they dont clash with each other between ener/leave. Cheers. */
    $modal.bind('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e){
      if($modal.hasClass('state-leave')) {
        $modal.removeClass('state-leave');
      }
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
  });