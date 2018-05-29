

const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/do8kpaeli/upload';
const CLOUDINARY_UPLOAD_PRESET = 'rds1bgyl';

var imgPreview = document.getElementById('img-preview');
var fileUpload = document.getElementById('file-upload');

/*EventListener für den Upload Button
Bei Upload wird die formData erstellt und unser Licence Preset eingerichtet
*/
fileUpload.addEventListener('change', function(event) {
  var file = event.target.files[0];
  var formData = new FormData();
  formData.append('file', file);
  //licence check
  formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
//axios is a promise based function
axios({
    url: CLOUDINARY_URL,
    method: 'POST',
    headers:{
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: formData
  }).then(function (res) {
    console.log(res);
    imgPreview.src = res.data.secure_url;
  }).catch(function (err) {
    console.error(err);
  })
});
