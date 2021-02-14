


function readURL(input) {
    if (input.files && input.files[0]) {
 
      var reader = new FileReader();
  
      reader.onload = function (e) {
        $('.image-upload-wrap').hide();
        $('#loading').show();
        $('.file-upload-image').attr('src', e.target.result);
        $('.file-upload-content').show();
        $('.image-title').html(input.files[0].name);
      };
  
      reader.readAsDataURL(input.files[0]);
      init().then(function () {
        predict();
        $('#loading').hide();
      });
    } else {
      removeUpload();
    }
  }
  
function readURL2(input) {
  if (input.files && input.files[0]) {
  

    var reader2 = new FileReader();

    reader2.onload = function (e) {
      $('.image-upload-wrap2').hide();
      $('#loading').show();
      $('.file-upload-image2').attr('src', e.target.result);
      $('.file-upload-content2').show();
      $('.image-title2').html(input.files[0].name);
    };

    reader2.readAsDataURL(input.files[0]);
    init2().then(function () {
      predict();
      $('#loading').hide();
    });
  } else {
    removeUpload();
  }
}
  
  function removeUpload() {
    $('.file-upload-input').replaceWith($('.file-upload-input').clone());
    $('.file-upload-content').hide();
    $('.image-upload-wrap').show();
  }
  $('.image-upload-wrap').bind('dragover', function () {
    $('.image-upload-wrap').addClass('image-dropping');
  });
  $('.image-upload-wrap').bind('dragleave', function () {
    $('.image-upload-wrap').removeClass('image-dropping');
  });
  
  function refreshPage(){
      window.location.reload();
  
  }
  