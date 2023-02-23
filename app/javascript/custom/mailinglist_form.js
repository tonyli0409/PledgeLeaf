const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
$(function() {
  $('#submitButton').attr('disabled', true);
  $('#email, #email').change(function() {
    if ($(re.test($('#email').val()) != '' && $('#email').val() != '')) {
      $('#submitButton').attr('disabled', false);
    } else {
      $('#submitButton').attr('disabled', true);
    }
  });
});

$('#contactForm').on('submit', function(e){
    $('#submitButton').addClass('disabled');
    $('#submitSuccessMessage').removeClass("d-none");
});