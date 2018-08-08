// (function() {
//
//     function login(callback) {
//         var CLIENT_ID = '5007bed4efe44af1a61cc908636d179e';
//         var REDIRECT_URI = 'file:///C:/Users/SYFGWC25/Desktop/spotifyapi.html';
//         function getLoginURL(scopes) {
//             return 'https://accounts.spotify.com/authorize?client_id=' + CLIENT_ID +
//               '&redirect_uri=' + encodeURIComponent(REDIRECT_URI) +
//               '&scope=' + encodeURIComponent(scopes.join(' ')) +
//               '&response_type=token';
//         }
//
//         var url = getLoginURL([
//             'user-read-email'
//         ]);
//
//         var width = 450,
//             height = 730,
//             left = (screen.width / 2) - (width / 2),
//             top = (screen.height / 2) - (height / 2);
//
//         window.addEventListener("message", function(event) {
//             var hash = JSON.parse(event.data);
//             if (hash.type == 'access_token') {
//                 callback(hash.access_token);
//             }
//         }, false);
//
//         var w = window.open(url,
//                             'Spotify',
//                             'menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=' + width + ', height=' + height + ', top=' + top + ', left=' + left
//                            );
//
//     }
//
//     function getUserData(accessToken) {
//         return $.ajax({
//             url: 'https://api.spotify.com/v1/me',
//             headers: {
//                'Authorization': 'Bearer ' + accessToken
//             }
//         });
//     }
//
//     var templateSource = document.getElementById('result-template').innerHTML,
//         template = Handlebars.compile(templateSource),
//         resultsPlaceholder = document.getElementById('result'),
//         loginButton = document.getElementById('btn-login');
//
//     loginButton.addEventListener('click', function() {
//         login(function(accessToken) {
//             getUserData(accessToken)
//                 .then(function(response) {
//                     loginButton.style.display = 'none';
//                     resultsPlaceholder.innerHTML = template(response);
//                 });
//             });
//     });
//
// })();
//

var myclientID = "5007bed4efe44af1a61cc908636d179e"
var myurl = "file:///C:/Users/SYFGWC25/Desktop/spotifyapi.html"
function getQueryData(url, type){
  var query = url;
  var request = new XMLHttpRequest();

  request.open(type,query,true);
  request.setRequestHeader('Access-Control-Allow-Headers', '*file:///C:/Users/SYFGWC25/Desktop/spotifyapi.html');
  // request.setRequestHeader('Access-Control-Allow-Credentials', 'true');

  request.send();
  // var data = JSON.parse(request.responseText);
  var data = request.responseText;
  console.log(data);
}

getQueryData("https://accounts.spotify.com/authorize/?client_id="+myclientID+"&response_type=code&redirect_uri="+myurl+"%2Fcallback&scope=user-read-private%20user-read-email",'GET');
