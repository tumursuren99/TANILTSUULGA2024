function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6LD8Ij1nL3C":
        Script1();
        break;
      case "62ONPBrxLJu":
        Script2();
        break;
      case "6nH6hxe0rJJ":
        Script3();
        break;
      case "6oHzXeoN1RF":
        Script4();
        break;
  }
}

function Script1()
{
  // Replace this URL with your Web App URL
const url = "https://script.google.com/macros/s/AKfycbzndViFEvQKCNClK6DeBASDdMMAhTx9rImOJuYe2oqlx9ng_txt9_wL3mLtsyr1EPLU/exec";

const player = GetPlayer();
let feedBack = player.GetVar("UserFeedback"); // Replace "UserFeedback" with your Storyline Variable.

fetch(url,{
  method: 'POST',
  mode: 'no-cors', 
  cache: 'no-cache', 
  headers: {'Content-Type': 'application/json'},
  redirect: 'follow',
  body: JSON.stringify({text: feedBack}) 
});
}

function Script2()
{
  // Replace this URL with your Web App URL
const url = "https://script.google.com/macros/s/AKfycbzndViFEvQKCNClK6DeBASDdMMAhTx9rImOJuYe2oqlx9ng_txt9_wL3mLtsyr1EPLU/exec";

const player = GetPlayer();
let feedBack = player.GetVar("UserFeedback"); // Replace "UserFeedback" with your Storyline Variable.

fetch(url,{
  method: 'POST',
  mode: 'no-cors', 
  cache: 'no-cache', 
  headers: {'Content-Type': 'application/json'},
  redirect: 'follow',
  body: JSON.stringify({text: feedBack}) 
});
}

function Script3()
{
  var player = GetPlayer();

var surname = player.GetVar('surname');
var name = player.GetVar('name');
var email = player.GetVar('email');
var status = player.GetVar('status');
var score = player.GetVar('score');

var formData = new FormData();
formData.append('Surname', surname);
formData.append('Name', name);
formData.append('Email', email);
formData.append('Status', status);
formData.append('Score', score);
//formData.append('Some text', 'Here is some text');

var request = new XMLHttpRequest();
request.open('POST', 'https://script.google.com/macros/s/AKfycbwLGen-oTiQLOHqKuvx1qHDyJvGZZd_Oj-Tq2T9ugoVHA_TS6CbkQj7BQRCWiIul6Zzrw/exec');
request.send(formData);
}

function Script4()
{
  const player = GetPlayer();
const nameJS = player.GetVar("nameSL");//Storyline variables assigned to JS variables
const emailJS = player.GetVar("emailSL");
const scoreJS = player.GetVar("scoreSL");
const timeJS = new Date().toLocaleString('en-US')
const url = "https://prod-60.southeastasia.logic.azure.com:443/workflows/df69561db3264a829ff47b09ed9da276/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=M15Dr5nIv-p6NYetOKchPN9ZX_CfgawHgib-u-1elb0";
const xhr = new XMLHttpRequest();
xhr.open("POST", url);
xhr.setRequestHeader("Content-Type", "application/json");
xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
   }};
const data = JSON.stringify ({
  "name": nameJS,
  "email": emailJS,
  "score": scoreJS,
  "time": timeJS
})
xhr.send(data);
}

