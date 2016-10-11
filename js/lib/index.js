(function(){
document.addEventListener('deviceready', onDeviceReady.bind(this), false);
var pictureSource;
var destinationType;
function onDeviceReady(){
    pictureSource=navigator.camera.PictureSourceType;
    destinationType=navigator.camera.DestinationType;
   
    document.getElementById("capturePhoto").onclick=function(){
       navigator.camera.getPicture(onPhotoDataSuccess, onFail,{
           quality: 50,
           destinationType:destinationType.DATA_URL
           });
        }
    }
)