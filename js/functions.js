$( document ).ready(function() {
  $('#working_button').click(function() {
    $('.education.content').hide();
    $('.skills.content').hide();
    $('.working.content').show();
    $('.education.title').css('border-bottom', '2px #224669 solid');
    $('.skills.title').css('border-bottom', '2px #224669 solid');
    $('.working.title').css('border-bottom', 'none');
  });
  $('#skills_button').click(function() {
    $('.education.content').hide();
    $('.working.content').hide();
    $('.skills.content').show();
    $('.education.title').css('border-bottom', '2px #224669 solid');
    $('.working.title').css('border-bottom', '2px #224669 solid');
    $('.skills.title').css('border-bottom', 'none');
  });
  $('#education_button').click(function() {
    $('.education.content').show();
    $('.working.content').hide();
    $('.skills.content').hide();
    $('.education.title').css('border-bottom', 'none');
    $('.working.title').css('border-bottom', '2px #224669 solid');
    $('.skills.title').css('border-bottom', '2px #224669 solid');
  });
  $('#education_mobile_button').click(function() {
    $(".education_mobile.content").toggle(function(e) {
        if ($(this).is(":visible")) {
            $(".education_mobile.content").show();
        }
        else {
            $(".education_mobile.content").hide();
        };
    });
  });
  $('#working_mobile_button').click(function() {
    $(".working_mobile.content").toggle(function(e) {
        if ($(this).is(":visible")) {
            $(".working_mobile.content").show();
        }
        else {
            $(".working_mobile.content").hide();
        };
    });
  });
  $('#skills_mobile_button').click(function() {
    $(".skills_mobile.content").toggle(function(e) {
        if ($(this).is(":visible")) {
            $(".skills_mobile.content").show();
        }
        else {
            $(".skills_mobile.content").hide();
        };
    });
  });

});
