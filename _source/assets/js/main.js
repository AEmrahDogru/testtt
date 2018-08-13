console.log('Hello World!');


$(document).ready(function(){

// Main Page Slider
  
    function swiperSlide() {
           var swiper = new Swiper('.swiper-container', {
            pagination: '.site-pagination',
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            paginationClickable: true,
            spaceBetween: 0,
            centeredSlides: true,
            autoplay: false,
            speed: 500,
            direction: 'vertical',
            autoplayDisableOnInteraction: false,
            watchSlidesProgress: true,
            bulletClass:'site-bullet',
            bulletActiveClass:'site-bullet-active',
            watchSlidesVisibility: true,
            resizeReInit: true,
            onSlideChangeStart:function(){
                    var activeSlide = $('.swiper-slide>.home-info').get(swiper.activeIndex);
                    var slideJsonData = [{"title":"Ba'ndo Creative Studio","subtitle":"Talent. Pasion. Curouisty.","content":"We are innovators, instigators and storytellers with a mission to disrupt the traditional marketing, media and entertainment industries. So, you may find us creating a content, a brand identity, a commercial, a website, an app, or even an object for our clients, audiences or for ourselves.","thumbnail_image":"","hero_image":"","hero_video":"assets/footages/main_footage.mp4","url":"/studio","color":"#A59A6C","bg_color":"#151A2C","hide_color":"","category":"","is-homepage":"true","is-video":"true","thumbnail_style":"","services":"Full Service Creative Studio","year":"2016","client":"Bando","link":"","portfolio":[]},{"title":"Yorstruly","subtitle":"Fall Winter 2016 Photoshoting.","content":"y.orstruly's vision is to always construct with the finest, premium fabrics, accentuating the body performance in the most sophisticated fit, while endorsing for the self truth.","thumbnail_image":"assets/jpeg/projects/thumbs/yorstruly_t.jpg","hero_image":"assets/jpeg/slideshow/00.jpg","hero_video":"","url":"yorstruly","color":"#FF006E","bg_color":"rgb(42, 13, 158)","hide_color":"#150D18","category":"lifestyle","is-homepage":"true","is-video":"false","thumbnail_style":"is-one-third","services":"Concept & Photoshoting","year":"2016","client":"Yorstruly","link":"yorstruly.com","portfolio":["assets/jpeg/projects/big/yors_00.jpg","assets/jpeg/projects/big/yors_00.jpg","assets/jpeg/projects/big/yors_02.jpg"]},{"title":"25 Film","subtitle":"Film and Production Company Web Site","content":"25Film who was found by Fırat Parlak and Koray Şahin in 2009, has been covering all the production and post-production needs of TV Series, movies, commercials and quiz shows with its experienced director and producer team in Turkey. The company is also offering services to foreigners who are seeking production solutions in Turkey. We, now continue our productions with success.","thumbnail_image":"assets/jpeg/projects/thumbs/25film_t.jpg","hero_image":"assets/jpeg/projects/big/25film_hero.jpg","hero_video":"assets/footages/25Film.mp4","url":"25film","color":"#5080FF","bg_color":"rgb(0, 0, 0)","hide_color":"#111","category":"lifestyle","is-homepage":"true","is-video":"true","thumbnail_style":"is-one-third","services":"Web Design & Development","year":"2017","client":"25film","link":"25film.net","portfolio":["assets/jpeg/projects/big/yors_00.jpg","assets/jpeg/projects/big/yors_00.jpg","assets/jpeg/projects/big/yors_02.jpg"]},{"title":"Güntaç Özdemir","subtitle":"Falaka Music Video & Album Cover","content":"25Film who was found by Fırat Parlak and Koray Şahin in 2009, has been covering all the production and post-production needs of TV Series, movies, commercials and quiz shows with its experienced director and producer team in Turkey. The company is also offering services to foreigners who are seeking production solutions in Turkey. We, now continue our productions with success.","thumbnail_image":"assets/jpeg/projects/thumbs/25film_t.jpg","hero_image":"assets/jpeg/projects/big/guntac_00.jpg","hero_video":"assets/footages/GUNTAC_FALAKA.mp4","url":"guntac_ozdemir","color":"#ffc519","bg_color":"#ca3d00","hide_color":"#ffc519","category":"entertainment","is-homepage":"true","is-video":"true","thumbnail_style":"is-one-third","services":"Music Video & Album Cover","year":"2017","client":"Güntaç Özdemir","link":"25film.net","portfolio":["assets/jpeg/projects/big/guntac_00.jpg"]}];
                    
                    var genreJson =   slideJsonData[swiper.activeIndex].category,
                        colorJson =   slideJsonData[swiper.activeIndex].color;

                slideInfoAnimate(activeSlide,colorJson);
                changeGenre(genreJson,colorJson);
                activeLine();
            },
            onInit: function () { 
                var firstSlide = $('.swiper-slide-active>.home-info');
                var slideJsonData = [{"title":"Ba'ndo Creative Studio","subtitle":"Talent. Pasion. Curouisty.","content":"We are innovators, instigators and storytellers with a mission to disrupt the traditional marketing, media and entertainment industries. So, you may find us creating a content, a brand identity, a commercial, a website, an app, or even an object for our clients, audiences or for ourselves.","thumbnail_image":"","hero_image":"","hero_video":"assets/footages/main_footage.mp4","url":"/studio","color":"#A59A6C","bg_color":"#151A2C","hide_color":"","category":"","is-homepage":"true","is-video":"true","thumbnail_style":"","services":"Full Service Creative Studio","year":"2016","client":"Bando","link":"","portfolio":[]},{"title":"Yorstruly","subtitle":"Fall Winter 2016 Photoshoting.","content":"y.orstruly's vision is to always construct with the finest, premium fabrics, accentuating the body performance in the most sophisticated fit, while endorsing for the self truth.","thumbnail_image":"assets/jpeg/projects/thumbs/yorstruly_t.jpg","hero_image":"assets/jpeg/slideshow/00.jpg","hero_video":"","url":"yorstruly","color":"#FF006E","bg_color":"rgb(42, 13, 158)","hide_color":"#150D18","category":"lifestyle","is-homepage":"true","is-video":"false","thumbnail_style":"is-one-third","services":"Concept & Photoshoting","year":"2016","client":"Yorstruly","link":"yorstruly.com","portfolio":["assets/jpeg/projects/big/yors_00.jpg","assets/jpeg/projects/big/yors_00.jpg","assets/jpeg/projects/big/yors_02.jpg"]},{"title":"25 Film","subtitle":"Film and Production Company Web Site","content":"25Film who was found by Fırat Parlak and Koray Şahin in 2009, has been covering all the production and post-production needs of TV Series, movies, commercials and quiz shows with its experienced director and producer team in Turkey. The company is also offering services to foreigners who are seeking production solutions in Turkey. We, now continue our productions with success.","thumbnail_image":"assets/jpeg/projects/thumbs/25film_t.jpg","hero_image":"assets/jpeg/projects/big/25film_hero.jpg","hero_video":"assets/footages/25Film.mp4","url":"25film","color":"#5080FF","bg_color":"rgb(0, 0, 0)","hide_color":"#111","category":"lifestyle","is-homepage":"true","is-video":"true","thumbnail_style":"is-one-third","services":"Web Design & Development","year":"2017","client":"25film","link":"25film.net","portfolio":["assets/jpeg/projects/big/yors_00.jpg","assets/jpeg/projects/big/yors_00.jpg","assets/jpeg/projects/big/yors_02.jpg"]},{"title":"Güntaç Özdemir","subtitle":"Falaka Music Video & Album Cover","content":"25Film who was found by Fırat Parlak and Koray Şahin in 2009, has been covering all the production and post-production needs of TV Series, movies, commercials and quiz shows with its experienced director and producer team in Turkey. The company is also offering services to foreigners who are seeking production solutions in Turkey. We, now continue our productions with success.","thumbnail_image":"assets/jpeg/projects/thumbs/25film_t.jpg","hero_image":"assets/jpeg/projects/big/guntac_00.jpg","hero_video":"assets/footages/GUNTAC_FALAKA.mp4","url":"guntac_ozdemir","color":"#ffc519","bg_color":"#ca3d00","hide_color":"#ffc519","category":"entertainment","is-homepage":"true","is-video":"true","thumbnail_style":"is-one-third","services":"Music Video & Album Cover","year":"2017","client":"Güntaç Özdemir","link":"25film.net","portfolio":["assets/jpeg/projects/big/guntac_00.jpg"]}];
                    var genreJson =   slideJsonData[0].category,
                        colorJson =   slideJsonData[0].color;
              
                    slideInfoAnimate(firstSlide, colorJson);
                    changeGenre(genreJson, colorJson);

                   activeLine();

             },
             paginationBulletRender: function (swiper, index, className) {
                var slideJsonData = [{"title":"Ba'ndo Creative Studio","subtitle":"Talent. Pasion. Curouisty.","content":"We are innovators, instigators and storytellers with a mission to disrupt the traditional marketing, media and entertainment industries. So, you may find us creating a content, a brand identity, a commercial, a website, an app, or even an object for our clients, audiences or for ourselves.","thumbnail_image":"","hero_image":"","hero_video":"assets/footages/main_footage.mp4","url":"/studio","color":"#A59A6C","bg_color":"#151A2C","hide_color":"","category":"","is-homepage":"true","is-video":"true","thumbnail_style":"","services":"Full Service Creative Studio","year":"2016","client":"Bando","link":"","portfolio":[]},{"title":"Yorstruly","subtitle":"Fall Winter 2016 Photoshoting.","content":"y.orstruly's vision is to always construct with the finest, premium fabrics, accentuating the body performance in the most sophisticated fit, while endorsing for the self truth.","thumbnail_image":"assets/jpeg/projects/thumbs/yorstruly_t.jpg","hero_image":"assets/jpeg/slideshow/00.jpg","hero_video":"","url":"yorstruly","color":"#FF006E","bg_color":"rgb(42, 13, 158)","hide_color":"#150D18","category":"lifestyle","is-homepage":"true","is-video":"false","thumbnail_style":"is-one-third","services":"Concept & Photoshoting","year":"2016","client":"Yorstruly","link":"yorstruly.com","portfolio":["assets/jpeg/projects/big/yors_00.jpg","assets/jpeg/projects/big/yors_00.jpg","assets/jpeg/projects/big/yors_02.jpg"]},{"title":"25 Film","subtitle":"Film and Production Company Web Site","content":"25Film who was found by Fırat Parlak and Koray Şahin in 2009, has been covering all the production and post-production needs of TV Series, movies, commercials and quiz shows with its experienced director and producer team in Turkey. The company is also offering services to foreigners who are seeking production solutions in Turkey. We, now continue our productions with success.","thumbnail_image":"assets/jpeg/projects/thumbs/25film_t.jpg","hero_image":"assets/jpeg/projects/big/25film_hero.jpg","hero_video":"assets/footages/25Film.mp4","url":"25film","color":"#5080FF","bg_color":"rgb(0, 0, 0)","hide_color":"#111","category":"lifestyle","is-homepage":"true","is-video":"true","thumbnail_style":"is-one-third","services":"Web Design & Development","year":"2017","client":"25film","link":"25film.net","portfolio":["assets/jpeg/projects/big/yors_00.jpg","assets/jpeg/projects/big/yors_00.jpg","assets/jpeg/projects/big/yors_02.jpg"]},{"title":"Güntaç Özdemir","subtitle":"Falaka Music Video & Album Cover","content":"25Film who was found by Fırat Parlak and Koray Şahin in 2009, has been covering all the production and post-production needs of TV Series, movies, commercials and quiz shows with its experienced director and producer team in Turkey. The company is also offering services to foreigners who are seeking production solutions in Turkey. We, now continue our productions with success.","thumbnail_image":"assets/jpeg/projects/thumbs/25film_t.jpg","hero_image":"assets/jpeg/projects/big/guntac_00.jpg","hero_video":"assets/footages/GUNTAC_FALAKA.mp4","url":"guntac_ozdemir","color":"#ffc519","bg_color":"#ca3d00","hide_color":"#ffc519","category":"entertainment","is-homepage":"true","is-video":"true","thumbnail_style":"is-one-third","services":"Music Video & Album Cover","year":"2017","client":"Güntaç Özdemir","link":"25film.net","portfolio":["assets/jpeg/projects/big/guntac_00.jpg"]}],
                    colorJson = slideJsonData[index].color,
                    nameJson = slideJsonData[index].client;
                    return '<div class="' + className + '">'  + ' <div class="bullet-line">' + '</div> <div class="bullet-info" style="color:' + colorJson + '">' + nameJson + '</div> </div> ';
            }

        });  




    };
    // swiper installation ends



$('.barba-container').imagesLoaded()
  .always( function( instance ) {
    console.log('all images loaded');
  })
  .done( function( instance ) {
    console.log('all images successfully loaded');
  })
  .fail( function() {
    console.log('all images loaded, at least one is broken');
  })
  .progress( function( instance, image ) {
    var result = image.isLoaded ? 'loaded' : 'broken';
    console.log( 'image is ' + result + ' for ' + image.img.src );
  });



// Global Vars
var firstLoad = true;

TweenMax.to($(window), 0.5, { scrollTo : { y: 0, autoKill:true },ease: Power1.easeOut,overwrite: 5});



function activeLine() {

                var line = $('.site-bullet');
                var activeLiner =$('.site-bullet-active').children('bullet-line');

} //active line end

$('.scrollTopClick').click(function(event) {
     TweenMax.to($(window), 1.5, { scrollTo : { y: 0, autoKill:true },ease: Power1.easeOut,overwrite: 5});
});


function changeGenre(whichGenre, color) {



            $('.lifestyle-main-link').removeClass('active');
            $('.entertainment-main-link').removeClass('active');
        if (whichGenre === "entertainment") {
            $('.entertainment-main-link').addClass('active');
            $('.entertainment-main-link').css('color', color);
            $('.lifestyle-main-link').removeClass('active');
            $('.home-info').addClass('active');
            $('.site-pagination-container').addClass('active');
            $('.section-works-container').css('visibility', 'visible');
        } else if (whichGenre === "lifestyle"){
            $('.lifestyle-main-link').addClass('active');
            $('.lifestyle-main-link').css('color', color);
            $('.entertainment-main-link').removeClass('active');
            $('.home-info').removeClass('active');
            $('.site-pagination-container').removeClass('active');
            $('.section-works-container').css('visibility', 'visible');
        }else{
             $('.section-works-container').css('visibility', 'hidden');
             $('.home-info').removeClass('active');

        }
}



function slideInfoAnimate(el01,colorJson) {


    $(el01).each(function(i)
    {
        var t = $(this).children('.home-info-project-title'),
            s = $(this).children('.home-info-project-subtitle'),
            c = $(this).children('.home-info-project-content'),
            h = $(this).children('.home-info');
            g = $(this).children('.home-info-project-link');

            TweenMax.fromTo($(this), 1, {css:{scaleY:0, opacity:0}}, {css:{scaleY:1, opacity:0.95},ease: Expo.easeInOut, force3D:true});
            TweenMax.fromTo(t, 1, {css:{top:"70", opacity:0}}, {css:{color:colorJson, top:"0", opacity:1},ease: Expo.easeInOut, force3D:true,delay:0.15});
            TweenMax.fromTo(s, 1, {css:{top:"70", opacity:0}}, {css:{top:"0", opacity:1},ease: Expo.easeInOut, force3D:true, delay:0.25});
            TweenMax.fromTo(c, 1, {css:{y:110, opacity:0}}, {css:{y:0, opacity:1},ease: Expo.easeInOut, force3D:true,delay:0.2});
            
            
            var cActive = $('.swiper-slide-active>.home-info>.home-info-project-content').outerHeight();

               console.log("static : " + cActive);


            $(window).resize(function() {


            var cActive = $('.swiper-slide-active>.home-info>.home-info-project-content').outerHeight(),
                cA = $('.swiper-slide-active>.home-info>.home-info-project-content'),
                dA = $('.swiper-slide-active>.home-info>.home-info-project-link');

               // console.log(cActive);
               // console.log(collision(cA,dA));

                

            });


    }); //each fn ends

} // slideInfoAnimate ends



 //--------------------- Tilt Function Page Slider 

$(document).mousemove(function(e){ 


    var posx                = e.pageX,
        posy                = e.pageY,
        maxRotationX        = -3,
        maxRotationY        = 4,
        maxTranslationX     = 7,
        maxTranslationY     = -3,
        rotX                = 2 * maxRotationX / $(window).height() * posy - maxRotationX,
        rotY                = 2*maxRotationY /$(window).width()*posx - maxRotationY,
        transX              = 2*maxTranslationX/$(window).width()*posx - maxTranslationX,
        transY              = 2*maxTranslationY/$(window).height()*posy - maxTranslationY;



    var img3D   = $('img#img-wrap'),
        video3D = $('.video-wrap-single');

    video3D.each(function(t) {
        $(this).css('transform', 'perspective(1000px) translate3d(' + transX + 'px,' + transY + 'px,0) rotate3d(1,0,0,' + rotX + 'deg) rotate3d(0,1,0,' + rotY + 'deg) scale(1.1)' );
     });
    img3D.each(function(j) {
        $(this).css('transform', 'perspective(1000px) translate3d(' + transX + 'px,' + transY + 'px,0) rotate3d(1,0,0,' + rotX + 'deg) rotate3d(0,1,0,' + rotY + 'deg) scale(1.1)' );
     });
});
    //--------------------- End of Tilt Function Page Slider 



/// ----------------- Main Images Info Collisions







function collision($div1, $div2) {
  var x1 = $div1.offset().left;
  var y1 = $div1.offset().top;
  var h1 = $div1.outerHeight(true);
  var w1 = $div1.outerWidth(true);
  var b1 = y1 + h1;
  var r1 = x1 + w1;
  var x2 = $div2.offset().left;
  var y2 = $div2.offset().top;
  var h2 = $div2.outerHeight(true);
  var w2 = $div2.outerWidth(true);
  var b2 = y2 + h2;
  var r2 = x2 + w2;
    
  if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
  return true;
}



/// ----------------- Main Images Info Collisions End's







// End of Main Page Slider 



//------------ Main Line Animation

   
function lineMain() {
    TweenMax.to($('#top'), 0.25, {scaleX: 1, ease:Expo.easeInOut});
    TweenMax.to($('#left'), 0.25, {scaleY: 1, ease:Expo.easeInOut});
    TweenMax.to($('#right'), 0.25, {scaleY: 1, ease:Expo.easeInOut});
    TweenMax.to($('#bottom'), 0.25, {scaleX: 1, ease:Expo.easeInOut});
}
             



//------------ Main Line Animation


// Logo Sprite ANimation

var drawLogo = SVG('logo_sprite_svg').size(105, 45).attr('x',100);
var group = drawLogo.group();
var groupBD = drawLogo.group();


    group.path("M17.9,3.1H0.2v41.1h16.5l0.9-15l0.1-1.2c0-3.4-1-6.1-3.1-8c2.2-2.8,3.4-7.1,3.4-13V3.1z M11.9,29.2l-0.6,9.5 H6.2V23.5c1.3,0,2.5-0.1,3.6-0.4C11.3,24.1,12,26.2,11.9,29.2z M12,9.3c0,2.7-0.6,4.8-1.7,6.4C9.2,17.2,7.8,18,6.2,18V8.6H12V9.3z").attr({ stroke: '#a59a6c','stroke-width': 0.75,fill: "none"}).addClass('drawBando');
    group.path("M17.9,3.1H0.2v41.1h16.5l0.9-15l0.1-1.2c0-3.4-1-6.1-3.1-8c2.2-2.8,3.4-7.1,3.4-13V3.1z M11.9,29.2l-0.6,9.5 H6.2V23.5c1.3,0,2.5-0.1,3.6-0.4C11.3,24.1,12,26.2,11.9,29.2z M12,9.3c0,2.7-0.6,4.8-1.7,6.4C9.2,17.2,7.8,18,6.2,18V8.6H12V9.3z").attr({ stroke: '#a59a6c','stroke-width': 0.75,fill: "none"}).addClass('drawBando');
    group.polygon("44.7,3.1 62.4,3.1 62.4,44.2 56.5,44.2 56.5,8.6 50.7,8.6 50.7,44.2 44.7,44.2").attr({ stroke: '#a59a6c','stroke-width': 0.75,fill: "none"}).addClass('drawBando');
    group.path("M81.2,7c-0.8-1.2-1.9-2.2-3.2-2.8c-1.3-0.7-2.8-1-4.3-1h-8.9v41.1h8.9c2.2,0,4-0.8,5.6-2.3 c1.6-1.5,2.4-3.4,2.5-5.6l0.7-25.2C82.4,9.6,82,8.2,81.2,7z M76.4,11.8l-0.7,23.8c0,2.1-0.7,3.1-2,3.1h-3V8.6h3 c0.8,0,1.5,0.3,2,0.8C76.2,10,76.4,10.7,76.4,11.8z").attr({ stroke: '#a59a6c','stroke-width': 0.75,fill: "none"}).attr({ stroke: '#a59a6c','stroke-width': 0.75,fill: "none"}).addClass('drawBando');
    group.path("M100.7,5.4c-1.5-1.7-3.8-2.6-6.8-2.6c-3,0-5.3,0.8-6.9,2.5c-1.5,1.7-2.3,4-2.2,7L85.5,36 c0.1,2.6,0.8,4.7,2.2,6.2c1.4,1.5,3.4,2.3,6.2,2.3c2.7,0,4.7-0.8,6-2.3c1.3-1.5,2.1-3.6,2.2-6.2l0.7-23.6 C103,9.5,102.2,7.1,100.7,5.4z M96.4,35.2c-0.1,1.3-0.3,2.3-0.7,2.9c-0.4,0.6-1,0.9-1.8,0.9c-0.9,0-1.5-0.3-1.9-0.9 c-0.4-0.6-0.6-1.6-0.7-2.9l-0.6-22c0-1.6,0.2-2.8,0.7-3.7c0.5-0.8,1.3-1.2,2.4-1.2c1.1,0,1.9,0.4,2.4,1.2c0.5,0.8,0.7,2,0.7,3.7 L96.4,35.2z").attr({ stroke: '#a59a6c','stroke-width': 0.75,fill: "none"}).addClass('drawBando');
    group.polygon("39.6,0.2 44.1,0.2 43,8.7 39.8,8.7").attr({ stroke: '#a59a6c','stroke-width': 0.75,fill: "none"}).addClass('drawBando').addClass('drawBando');
    group.path("M31.9,3.2c-3.8,0.1-6.3,1.1-8.5,3.2c-2.2,2-3.2,5.2-3,9.5l0.9,28.4h5.9l-0.7-22.4H32v22.4H38V3.1 C38,3.1,33,3.1,31.9,3.2z M32,16.3h-5.9v-0.5c-0.1-2.5,0.3-4.3,1.4-5.4c1-1.1,2.5-1.7,4.5-1.7V16.3z").attr({ stroke: '#a59a6c','stroke-width': 0.75,fill: "none"}).addClass('drawBando');


    groupBD.path ('M16.5,24.8c-1.8-1.6-4-2.4-6.6-2.4L10,0H0v4.8h4.8v40.2l0.1,0v0l5,0v0l8.6,0l0.7-11.8l0.1-1.1 C19.2,28.8,18.3,26.4,16.5,24.8z M14.3,33.2l-0.5,7l-4,0V27.1c1.5,0,2.6,0.5,3.4,1.5C14.1,29.5,14.4,31.1,14.3,33.2z').addClass('drawBD');
    groupBD.path ('M35.2,22.3V0h-5v22.2c-2.6,0-4.8,0.8-6.6,2.4c-1.8,1.6-2.7,4-2.7,7.3l0,1.1l0.7,11.9L35.1,45l0.1-18l4.8,0 v-4.7L35.2,22.3z M30.2,40.1l-4,0l-0.5-7c-0.1-2.1,0.2-3.6,1-4.6c0.8-0.9,2-1.4,3.4-1.4V40.1z').addClass('drawBD');
    groupBD.move(30,0);

    $('.drawBD').attr({fill: '#a59a6c', stroke: '#a59a6c','stroke-width': 0.75})
    $('.drawBando').attr({fill: '#a59a6c'})

var tl50 = new TimelineMax({paused: true, onReverseComplete:logoPlay});
    tl50.to($('.drawBando'), 1, {fill:"none", force3D:true, ease: Power3.easeInOut, delay:5});
    tl50.to($('.drawBando'), 1.5, {drawSVG:0,force3D:true, ease: Power3.easeInOut}, "-=1");
    tl50.from($('.drawBD'), 1.5, {drawSVG:1,force3D:true, ease: Power3.easeInOut}, "-=0");
    tl50.from($('.drawBD'), 1, {fill:"none", force3D:true, ease: Power3.easeInOut, onComplete:logoReverse}, "-=1");
    
    
    tl50.play();

    function logoReverse() {
        setTimeout(function() {
        tl50.reverse()
         }, 10000);
    }

    function logoPlay() {
        tl50.play();
    }



//  Hamburger Menu Animations
    
    var draw = SVG('hamburgerMenu').size(80, 35),
        $hamburgerMenu  = $('#hamburgerMenu'),
        // line = draw.line(21, 0.5, 57, 0.5).stroke({ width: 1.25, color:'#D4D4D4' }).attr('id', 'first_line'),
        line2 = draw.line(2.5, 5.5, 75, 5.5).stroke({ width: 1.25, color:'#D4D4D4' }).attr('id', 'second_line'),
        line3 = draw.line(16.5, 10.5, 60.5, 10.5).stroke({ width: 1.25, color:'#D4D4D4' }).attr('id', 'thirth_line'),
        // line4 = draw.line(27.5, 15.5, 49.5, 15.5).stroke({ width: 1.25, color:'#D4D4D4' }).attr('id', 'fourth_line'),
        hamburgerMenuBol = false;
        tlHamburger = new TimelineMax ({paused:true});

        tlHamburger.add('bir');
        tlHamburger
                // .to($('#first_line'), 0.5, {scaleX: 1, transformOrigin:"center center", ease:Expo.easeInOut})
                .to($('#second_line'), 0.5, {scaleX: 0.4, transformOrigin:"center center", ease:Expo.easeInOut},"-=0.5")
                .to($('#thirth_line'), 0.5, {scaleX: 0.55, transformOrigin:"center center", ease:Expo.easeInOut},"-=0.5")
                // .to($('#fourth_line'), 0.5, {scaleX: 0.7, transformOrigin:"center center", ease:Expo.easeInOut},"-=0.5");
        tlHamburger.addPause();
        tlHamburger.add('iki');
        tlHamburger
                // .to($('#first_line'), 0.5, {opacity: 0, transformOrigin:"center center", ease:Expo.easeInOut})
                .to($('#second_line'), 0.5, {rotation: 45,scaleX:.4, transformOrigin:"center center", ease:Expo.easeInOut},"-=0.5")
                .to($('#thirth_line'), 0.5, {rotation: -45, scaleX:.5, x:2.5,y:-2, transformOrigin:"center center", ease:Expo.easeInOut},"-=0.5")
                // .to($('#fourth_line'), 0.5, {opacity: 0, transformOrigin:"center center", ease:Expo.easeInOut},"-=0.5");
        tlHamburger.addPause();
        tlHamburger.add('uc');
                
        $($hamburgerMenu).hover(
            

                function () {
                if(hamburgerMenuBol===false){
                   tlHamburger.play('bir');
                }
                }, function () {
                if (hamburgerMenuBol==false) {
                    tlHamburger.reverse('iki', false);
                }
                }
        
        );

        $($hamburgerMenu).click(function (e) { 
           
            e.preventDefault();

            
            if (hamburgerMenuBol===false) {
                TweenMax.fromTo($('.menu-main'), 1, {css:{top:"-100%"}}, {css:{top:"0"},ease: Expo.easeInOut, force3D:true})
                tlHamburger.play('iki');
                TweenLite.set($('.logo-main'), {css:{position:'fixed'}});

             }    
    
            else if (hamburgerMenuBol===true){
                mainMenuReverse();
            }

                hamburgerMenuBol =!hamburgerMenuBol; 

        });

    function mainMenuReverse() {
            if (!firstLoad) {
                TweenMax.fromTo($('.menu-main'), 1, {css:{top:"0"}}, {css:{top:"-100%"},ease: Expo.easeInOut, force3D:true});
                tlHamburger.reverse('uc');
                TweenLite.set($('.logo-main'), {css:{position:'relative'}});
            }
    }
     

    $('.main-nav a').click(function(event) {
        
        if ($(this).attr('data-linkname') != Barba.HistoryManager.currentStatus().namespace){
        mainMenuReverse();
        hamburgerMenuBol = false;
        tlHamburger.reverse('iki');
           
        }
     
    });


//  Hamburger Menu Animations End's




// ----------------- Page Injections and Transitions

function loadCommonElements() {
    // body...
    firstLoad = false;

};

loadCommonElements();



function tt() {
    $('.homepage-container').css({
        height: '100vh',
        opacity: .99
    })
}


Barba.Dispatcher.on('newPageReady', function(currentStatus, oldStatus, container) {

    tt();

    var linkAktiv = $('.main-nav>ul>li>a');

    linkAktiv.each(function(index, el) {

       if ($(this).attr('data-linkname') === Barba.HistoryManager.currentStatus().namespace ) {
        $(this).addClass('link-active');
        }else{
        $(this).removeClass('link-active');
        }
     });
});





var Homepage = Barba.BaseView.extend({
        namespace: 'homepage',
        onEnter: function() {
            // The new Container is ready and attached to the DOM.
            swiperSlide();
            loadCommonElements();
            $('.menu-container').removeClass('bgon');
        },
        onEnterCompleted: function() {
            // The Transition has just finished.

        },
        onLeave: function() {
            // A new Transition toward a new page has just started.

        },
        onLeaveCompleted: function() {

            // The Container has just been removed from the DOM.

        }
      });
      Homepage.init();


var Projects = Barba.BaseView.extend({
        namespace: 'projects',
        onEnter: function() {
            // The new Container is ready and attached to the DOM.
             loadCommonElements();
             projectPage();
        },
        onEnterCompleted: function() {
            // The Transition has just finished.

            
        },
        onLeave: function() {
            // A new Transition toward a new page has just started.

        },
        onLeaveCompleted: function() {

            // The Container has just been removed from the DOM.

        }
      });
      Projects.init();



      var singleProjects = Barba.BaseView.extend({
        namespace: 'single-project',
        onEnter: function() {
            $(".barba-container").animate({scrollTop:0}, '300')
            // The new Container is ready and attached to the DOM.
            loadCommonElements();

        },
        onEnterCompleted: function() {
            // The Transition has just finished.

            singleProjectResize();
            scrollMagicProject();
            singleInfoAnimations();

        },
        onLeave: function() {
            // A new Transition toward a new page has just started.

        },
        onLeaveCompleted: function() {

            // The Container has just been removed from the DOM.

        }
      });
      singleProjects.init();
      


      Barba.Pjax.start();




var SagaTransition = Barba.BaseTransition.extend({
  start: function() {
    Promise
      .all([this.newContainerLoading, this.fadeOut()])
      .then(this.fadeIn.bind(this));
  },

  fadeOut: function() {
    return $(this.oldContainer).animate({ opacity: 1 }).promise();
  },

  fadeIn: function() {

    var _this = this;
    var $el = $(this.newContainer);

    TweenMax.to( $(this.oldContainer), 0.75, {xPercent:10, ease: Expo.easeInOut})
    $el.css({
      visibility : 'visible',
      opacity : 1,
    });


    TweenMax.fromTo($el, 0.75, {xPercent:-100}, {xPercent:0, onComplete:finishedB, ease: Expo.easeInOut});
            function finishedB() {
            _this.done();
            }
  }
}), SolaTransition = Barba.BaseTransition.extend({
  start: function() {
    Promise
      .all([this.newContainerLoading, this.fadeOut()])
      .then(this.fadeIn.bind(this));
  },

  fadeOut: function() {
    return $(this.oldContainer).animate({ opacity: 1 }).promise();
  },

  fadeIn: function() {

   window.scrollTo(0, 0);
    var _this = this;
    var $el = $(this.newContainer);

    TweenMax.to( $(this.oldContainer), 0.5, {xPercent:-10, ease: Expo.easeOut})
    $el.css({
      visibility : 'visible',
      opacity : 1,
    });


    TweenMax.fromTo($el, 0.5, {xPercent:100}, {xPercent:0, onComplete:finishedB, ease: Expo.easeOut});
            function finishedB() {
            _this.done();
            }
  }
});




Barba.Dispatcher.on('linkClicked', function() {

    if (Barba.HistoryManager.currentStatus().namespace === "projects") {
        Barba.Pjax.getTransition = function() {return SagaTransition;};
    }else{
        Barba.Pjax.getTransition = function() {return SolaTransition;};
    }
});



var links = document.querySelectorAll('a[href]');
var cbk = function(e) {
 if(e.currentTarget.href === window.location.href) {
   e.preventDefault();
   e.stopPropagation();
 }
};

for(var i = 0; i < links.length; i++) {
  links[i].addEventListener('click', cbk);
}





// ----------------- Page Injections and Transitions

// -----------------  Projects.html code's

function projectPage() {


var singleThumb = $('.single-project');


    singleThumb.each(function(index, el) {

        var a = $(this).find('a .single-project-thumb'),
            b = $(this).find('h1'),
            c = $(this).find('h2'),            
            d = $(this).find('span'),
            e = $(this).find('h3');
        
        TweenLite.set(a, {yPercent:"100%"});
        TweenLite.set(b, {y:50});
        TweenLite.set(c, {y:50});
        TweenLite.set(e, {x:-100});


        $(this).hover(function() {
            TweenLite.to(a, 0.75 , {yPercent:0, ease:Expo.easeInOut });
            TweenLite.to(b, 0.75 , {y:0, ease:Expo.easeInOut, delay:0.25 });
            TweenLite.to(c, 0.75 , {y:0, ease:Expo.easeInOut, delay:0.45 });
            TweenLite.to(d, 0.75 , {width:80, ease:Expo.easeInOut, delay:0.25 });
            TweenLite.to(e, 0.75 , {x:0, ease:Expo.easeInOut, delay:0.35 });

        }, function() {
            TweenLite.to(a, 0.75 , {yPercent:"100%", ease:Expo.easeInOut,delay:0.20});
            TweenLite.to(b, 0.75 , {y:50, ease:Expo.easeInOut, });
            TweenLite.to(c, 0.75 , {y:50, ease:Expo.easeInOut});
            TweenLite.to(d, 0.75 , {width:10, ease:Expo.easeInOut, delay:0.25 });
            TweenLite.to(e, 0.75 , {x:-100, ease:Expo.easeInOut, delay:0.35 });



        });
    });


// Show Hide Categories//


$(".entertainment-c").click(function () {


TweenMax.to($(".single-project[data-categories='lifestyle']") , 0.5, {opacity: 0.5});
TweenMax.to($(".single-project[data-categories='entertainment']") , 0.5, {opacity: 1});


})

$(".lifestyle-c").click(function () {


TweenMax.to($(".single-project[data-categories='lifestyle']") , 0.5, {opacity: 1});
TweenMax.to($(".single-project[data-categories='entertainment']") , 0.5, {opacity: 0.5});

})

// Show Hide Categories//




}

// -----------------  end of Projects.html code's







// -----------------  Single Prject .html's code




$(window).scroll(function(){


    var scrollPos       = $(document).scrollTop(),
        itemPos         = -scrollPos / 4,
        itemOpacity     = 1 + itemPos / 150;


    var scrollHeight = $(document).height(),
        scrollPosition = $(window).height() + $(window).scrollTop(),
        scrollFooter    = scrollHeight - 900;

        // console.log('scrolTop:' + $(window).scrollTop())

        if (scrollPosition >= scrollFooter) {
          $('footer').css('visibility', 'visible');
        }else{
            $('footer').css('visibility', 'hidden');
        }
        if (itemOpacity >=0  ){
        $('.single-project-bigimage').css({
            transform: 'translate3d(0,' + itemPos + 'px,0) ',
            opacity: itemOpacity
        });
        };

});


$(window).resize(function(event) {
singleProjectResize();
});

function singleProjectResize() {
    var     spContainer     = $(".single-project-container"),
            sPInfoHeight    = $(".single-project-info").height();
            sPHeight        = sPInfoHeight + $(".single-project-bigimage").height(),
            spContainer.css('height',  sPHeight - 280);
            console.log(sPHeight);
}


function scrollMagicProject() {
    

    var controllerSingleProject = new ScrollMagic.Controller();

    $('.single_image_seperator').each(function(index, el) {

        var scrollMagicProjectTime  = new TimelineMax(),
            sImage    = $(this).parent().children('.single_image_seperator_img').children('img');
            $(this).css('height',sImage.height());


        var tween1 = new TweenMax.to($(this), .5, {width:"100vw", ease:Expo.easeInOut, force3D:true}),
            tween2 = new TweenMax.set($(this), {right:0, transformOrigin: 'right top', delay:0.01}),
            tween3 = new TweenMax.to($(this), 1, {width:0 , ease:Expo.easeInOut, force3D:true, delay:0.5}),
            tween4 = new TweenMax.fromTo($(this).parent().children('.single_image_seperator_img').children('img'), 1, {autoAlpha:1, xPercent:"-100%"}, {xPercent:0,ease:Expo.easeInOut, force3D:true, delay:"-1.2"});


            scrollMagicProjectTime
            .add(tween1)
            .add(tween2)
            .add(tween3)
            .add(tween4);

            var SPScene = new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 0.7,
             offset: $(window).height() * -1,
            reverse:false
            }).on("enter", function (event) {
       // add custom action
       // $("#my-elem").left("200");
       console.log('enter')
     })
     .on("destroy", function (event) {
       // reset my element to start position
       if (event.reset) {
         // $("#my-elem").left("0");
         console.log('reset')
       }
     }).on("change", function (event) {
    console.log("Scene Property \"" + event.what + "\" changed to " + event.newval);
})
            .addIndicators({
            colorTrigger: 'black',
            colorStart: '#ff0059',
            colorEnd: "#fff000"
            })
            .setTween(scrollMagicProjectTime)
            .addTo(controllerSingleProject)
        
    });


}

scrollMagicProject();



function singleInfoAnimations() {


    TweenMax.to($('.single-hero-text'), 1.25, {y:0, opacity:1, ease: Expo.easeInOut});
    TweenMax.to($('.single-project-title'), 1.5, {y:0, opacity:1, ease: Expo.easeInOut, delay:0});
    TweenMax.to($('.single-project-subtitle'), 1.75, {y:0, opacity:1, ease: Expo.easeInOut, delay:0});
    TweenMax.to($('.goback-project'), 2, {y:0, opacity:1, ease: Expo.easeInOut, delay:0});



    $('.goback-project').hover(function() {
           TweenLite.to($(this), .5, {x:5,  ease: Power3.easeInOut})
           TweenLite.to($(this).find('img'), .5, {x:-15,  ease: Power3.easeInOut})
           event.preventDefault();
    }, function() {
           TweenLite.to($(this), .5, {x:0,  ease: Power3.easeInOut})
           TweenLite.to($(this).find('img'), .5, {x:0,  ease: Power3.easeInOut})

    });




    





}




// -----------------  end of Single Prject .html's code


// -----------------  start of ScrollMagic .html's code

var $window = $(window);
    var scrollTime = 0.75;
    var scrollDistance = 170;
    var header = $('.header-row'),
        headerNav = $('.header-nav'),
        body = $('body'),
        placeholder = $('.header-placeholder');

    $window.on("mousewheel DOMMouseScroll", function(event){
        event.preventDefault();

        var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
        var scrollTop = $window.scrollTop();
        var finalScroll = scrollTop - parseInt(delta*scrollDistance);

        prevScrollPos = finalScroll;
        
        TweenMax.to($window, scrollTime, {
            scrollTo : { y: finalScroll, autoKill:true },
                ease: Power1.easeOut,
                overwrite: 5
            });
    });

// -----------------  end of ScrollMagic .html's code

      // ---- END's OF
}); //global $
