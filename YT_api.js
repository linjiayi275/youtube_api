// select channel
let id = "";
$('.topBtn').on('click', 'li', put)

function put(e){
  var target = $(e.target)
  // console.log(target);
  const getId = target.attr("data-id")
  // console.log(getId);
  if(target.is("li")){
    id = getId
  }
  $('.list div').remove()
  res()
}
// ajax
const res = () => {
$.ajax({
type: "GET",
// url: "https://www.googleapis.com/youtube/v3/videos?id=tg2uF3R_Ozo&ab_channel=THEBLACKLABEL&key=AIzaSyCrOUal8YpnvUwqDetgb71Gj5x_hi5F-1E&part=snippet",

// 拿channels playlist的id 諧星
// url: "https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=UCZ5hhP7cH40vVy2L_eRE_5w&key=AIzaSyCrOUal8YpnvUwqDetgb71Gj5x_hi5F-1E",

// S music
// url: "https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=UCjSo8dNDqtwDHX1ahbuA7eQ&key=AIzaSyCrOUal8YpnvUwqDetgb71Gj5x_hi5F-1E",

// Wayne  
// url: "https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=UCUyuwKWKge8qjnxpPYJuA8g&key=AIzaSyCrOUal8YpnvUwqDetgb71Gj5x_hi5F-1E",

url: "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails,status&playlistId="+ encodeURIComponent(id) +"&key=AIzaSyCrOUal8YpnvUwqDetgb71Gj5x_hi5F-1E&maxResults=6",

dataType: 'json',
success: function (response) {
console.log(response)
// $('.topBtn').append(
//   `<li>${response.items[0].snippet.channelTitle}</li>`
// )
for(let i=0;i<9;i++){
  $('.list').append(
  `<div class="item"><a href="https://www.youtube.com/watch?v=${response.items[i].snippet.resourceId.videoId}&ab_channel=%E8%AB%A7%E6%98%9F%E5%80%91"  target="_blank"><img src="${response.items[i].snippet.thumbnails.medium.url}" alt=""></a></div>`
  )
}
},
error: function(response) {
  $('#output').html('Failure');
},
});
}