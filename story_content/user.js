function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6eColqCTXEy":
        Script1();
        break;
      case "5z1D1RDgiMh":
        Script2();
        break;
      case "6IkodPJZz7X":
        Script3();
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

