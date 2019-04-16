$(function(){

    $(".slider").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        //autoplay: true,
        autoplayTimeout: 2500
    });
    

        $("#refresh").on("click", function(){

        

            $.getJSON( "https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=65833816bc16581103ba98b8859ce17b", function( data ) {
                console.log(data);

                const result = data.results;
                //console.log(result);
                $.each( result, function( key, val ) {
                    const titre = val.titre;
                    const description = val.description;
                    const img = val.imageURL;
                    const link = val.link;

                    const resultats = '<div>' +
                                '<div class="bgSlider" style="background-image:url('+ img +')">' +
                                '<div>' +
                                '<a href="' + img + '" data-fancybox="gallery">' +
                                '<img src="img/full-size.png" alt="full screen" /></a>' +
                                '<h2>' + titre + '</h2>' +
                                '<p>' + description +'</p>' +
                                '<a href="' + link +'">call to action</a>'+
                                '</div>' +                
                                '</div>';
                    console.log(resultats);
                    //$("#slider .owl-stage").append(resultats);
                    $('.slider').trigger('add.owl.carousel', resultats).trigger('refresh.owl.carousel');
                });
            })

        })
});
