$('#events_participating').css('display', 'none');

$('#participating_tab').on('click', function(){

    console.log('?')

    TweenMax.to($('#events_created'), 0, { display: 'none' });
    TweenMax.to($('#events_participating'), 0, { display: 'flex' });

});

$('#created_tab').on('click', function(){

    TweenMax.to($('#events_created'), 0, { display: 'flex' });
    TweenMax.to($('#events_participating'), 0, { display: 'none' });

});