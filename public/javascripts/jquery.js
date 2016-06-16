$( document ).ready(function() {

  $('.hailiangButton').on('click', function(){
    $('.hailiangEducationGroup').addClass('hide');
        $('.blackwaterMidstream').addClass('hide'); 
        $('.codeRebel').addClass('hide'); 
        $('.cyberCity').addClass('hide'); 
        $('.flikMedia').addClass('hide'); 
        $('.forgiven').addClass('hide'); 
        $('.fotoFwd').addClass('hide'); 
        $('.heartTestLabs').addClass('hide'); 
        $('.moorSkincare').addClass('hide'); 
        $('.myClubBetting').addClass('hide'); 
        $('.sportsTradex').addClass('hide'); 
        $('.hailiangEducationGroup').removeClass('hide')
  })

  $('.blackwaterButton').on('click', function(){
    $('.hailiangEducationGroup').addClass('hide');
    $('.blackwaterMidstream').addClass('hide'); 
    $('.codeRebel').addClass('hide'); 
    $('.cyberCity').addClass('hide'); 
    $('.flikMedia').addClass('hide'); 
    $('.forgiven').addClass('hide'); 
    $('.fotoFwd').addClass('hide'); 
    $('.heartTestLabs').addClass('hide'); 
    $('.moorSkincare').addClass('hide'); 
    $('.myClubBetting').addClass('hide'); 
    $('.sportsTradex').addClass('hide'); 
    $('.blackwaterMidstream').removeClass('hide')
    console.log("blackwater hits");
  })

  $('.codeRebelButton').on('click', function(){
    $('.hailiangEducationGroup').addClass('hide');
    $('.blackwaterMidstream').addClass('hide'); 
    $('.codeRebel').addClass('hide'); 
    $('.cyberCity').addClass('hide'); 
    $('.flikMedia').addClass('hide'); 
    $('.forgiven').addClass('hide'); 
    $('.fotoFwd').addClass('hide'); 
    $('.heartTestLabs').addClass('hide'); 
    $('.moorSkincare').addClass('hide'); 
    $('.myClubBetting').addClass('hide'); 
    $('.sportsTradex').addClass('hide'); 
    $('.codeRebel').removeClass('hide')
  })

  $('.cyberCityButton').on('click',function(){
    $('.hailiangEducationGroup').addClass('hide');
    $('.blackwaterMidstream').addClass('hide'); 
    $('.codeRebel').addClass('hide'); 
    $('.cyberCity').addClass('hide'); 
    $('.flikMedia').addClass('hide'); 
    $('.forgiven').addClass('hide'); 
    $('.fotoFwd').addClass('hide'); 
    $('.heartTestLabs').addClass('hide'); 
    $('.moorSkincare').addClass('hide'); 
    $('.myClubBetting').addClass('hide'); 
    $('.sportsTradex').addClass('hide'); 
    $('.cyberCity').removeClass('hide')
  })

  $('.flikMediaButton').on('click', function(){
    $('.hailiangEducationGroup').addClass('hide');
    $('.blackwaterMidstream').addClass('hide'); 
    $('.codeRebel').addClass('hide'); 
    $('.cyberCity').addClass('hide'); 
    $('.flikMedia').addClass('hide'); 
    $('.forgiven').addClass('hide'); 
    $('.fotoFwd').addClass('hide'); 
    $('.heartTestLabs').addClass('hide'); 
    $('.moorSkincare').addClass('hide'); 
    $('.myClubBetting').addClass('hide'); 
    $('.sportsTradex').addClass('hide'); 
    $('.flikMedia').removeClass('hide')
  })

  $('.forgivenButton').on('click', function(){
    $('.hailiangEducationGroup').addClass('hide');
    $('.blackwaterMidstream').addClass('hide'); 
    $('.codeRebel').addClass('hide'); 
    $('.cyberCity').addClass('hide'); 
    $('.flikMedia').addClass('hide'); 
    $('.forgiven').addClass('hide'); 
    $('.fotoFwd').addClass('hide'); 
    $('.heartTestLabs').addClass('hide'); 
    $('.moorSkincare').addClass('hide'); 
    $('.myClubBetting').addClass('hide'); 
    $('.sportsTradex').addClass('hide'); 
    $('.forgiven').removeClass('hide')
  })

  $('.fotoFwdButton').on('click', function(){
    $('.hailiangEducationGroup').addClass('hide');
    $('.blackwaterMidstream').addClass('hide'); 
    $('.codeRebel').addClass('hide'); 
    $('.cyberCity').addClass('hide'); 
    $('.flikMedia').addClass('hide'); 
    $('.forgiven').addClass('hide'); 
    $('.fotoFwd').addClass('hide'); 
    $('.heartTestLabs').addClass('hide'); 
    $('.moorSkincare').addClass('hide'); 
    $('.myClubBetting').addClass('hide'); 
    $('.sportsTradex').addClass('hide'); 
    $('.fotoFwd').removeClass('hide')
  })

  $('.heartTestLabsButton').on('click', function(){
    $('.hailiangEducationGroup').addClass('hide');
    $('.blackwaterMidstream').addClass('hide'); 
    $('.codeRebel').addClass('hide'); 
    $('.cyberCity').addClass('hide'); 
    $('.flikMedia').addClass('hide'); 
    $('.forgiven').addClass('hide'); 
    $('.fotoFwd').addClass('hide'); 
    $('.heartTestLabs').addClass('hide'); 
    $('.moorSkincare').addClass('hide'); 
    $('.myClubBetting').addClass('hide'); 
    $('.sportsTradex').addClass('hide'); 
    $('.heartTestLabs').removeClass('hide')
  })

  $('.moorSkincareButton').on('click', function(){
    $('.hailiangEducationGroup').addClass('hide');
    $('.blackwaterMidstream').addClass('hide'); 
    $('.codeRebel').addClass('hide'); 
    $('.cyberCity').addClass('hide'); 
    $('.flikMedia').addClass('hide'); 
    $('.forgiven').addClass('hide'); 
    $('.fotoFwd').addClass('hide'); 
    $('.heartTestLabs').addClass('hide'); 
    $('.moorSkincare').addClass('hide'); 
    $('.myClubBetting').addClass('hide'); 
    $('.sportsTradex').addClass('hide'); 
    $('.moorSkincare').removeClass('hide')
  })

  $('.myClubBettingButton').on('click', function(){
    $('.hailiangEducationGroup').addClass('hide');
    $('.blackwaterMidstream').addClass('hide'); 
    $('.codeRebel').addClass('hide'); 
    $('.cyberCity').addClass('hide'); 
    $('.flikMedia').addClass('hide'); 
    $('.forgiven').addClass('hide'); 
    $('.fotoFwd').addClass('hide'); 
    $('.heartTestLabs').addClass('hide'); 
    $('.moorSkincare').addClass('hide'); 
    $('.myClubBetting').addClass('hide'); 
    $('.sportsTradex').addClass('hide'); 
    $('.myClubBetting').removeClass('hide')
  })

  $('.sportsTradexButton').on('click', function(){
    $('.hailiangEducationGroup').addClass('hide');
    $('.blackwaterMidstream').addClass('hide'); 
    $('.codeRebel').addClass('hide'); 
    $('.cyberCity').addClass('hide'); 
    $('.flikMedia').addClass('hide'); 
    $('.forgiven').addClass('hide'); 
    $('.fotoFwd').addClass('hide'); 
    $('.heartTestLabs').addClass('hide'); 
    $('.moorSkincare').addClass('hide'); 
    $('.myClubBetting').addClass('hide'); 
    $('.sportsTradex').addClass('hide'); 
    $('.sportsTradex').removeClass('hide')
  })

  var stickySidebar = function(){
    var scrollTop = $(window).scrollTop();      
    if(scrollTop >= 150) { 
        $('.sidebarClientCompanies').addClass('sticky');
    }
    else if(scrollTop === 150){
      console.log("this hits");
    }
    else {
      $('.sidebarClientCompanies').removeClass('sticky'); 
    }
    console.log(scrollTop);
  };

  stickySidebar();
   
  $(window).scroll(function() {
      stickySidebar();
      // stopOnFooterFunction();
  });

});