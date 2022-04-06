$('.events-participating-container').css('display', 'none');

$('.events-participating-btn').on('click', function(){

    TweenMax.to($('.events-created-container'), 0, { display: 'none' });
    TweenMax.to($('.events-participating-container'), 0, { display: 'flex' });

});

$('.events-created-btn').on('click', function(){

    TweenMax.to($('.events-created-container'), 0, { display: 'flex' });
    TweenMax.to($('.events-participating-container'), 0, { display: 'none' });

});