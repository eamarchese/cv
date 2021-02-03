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
});
