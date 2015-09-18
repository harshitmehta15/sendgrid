module.exports = require("./lib/sendgrid");


var sendgrid  = require('sendgrid')("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");
var email     = new sendgrid.Email({
  smtpapi:  new sendgrid.smtpapi(),
 // to:       ['hmehta@appirio.com'],
  //toname:   [''],
  from:     'harshit@topcoder.com',
  fromname: 'Topcoder',
  subject:  'New Email-Sendgrid First Attempt',
  //text:     '',
  html:     '<td><img width="600" height="275" style="display:block" alt="First image" src="https://ci3.googleusercontent.com/proxy/DHu5Ex3p7yZgfU2U75JzrJGtvQNCs24_4ozssIieOroIk70vEIEE4DcHU_kkZsvmTo7Ui21-grqHECLPf_eopITp-nDzvb3Jcfiw5ebTrUU5kGc=s0-d-e1-ft#http://thecloud.appirio.com/rs/921-UOU-112/images/Photo-1.png" border="0" class="CToWUd a6T" tabindex="0"><div class="a6S" dir="ltr" style="opacity: 0.01; left: 666px; top: 726px;"><div id=":38r" class="T-I J-J5-Ji aQv T-I-ax7 L3 a5q" title="Download" role="button" tabindex="0" aria-label="Download attachment " data-tooltip-class="a1V"><div class="aSK J-J5-Ji aYr"></div></div></div></td>',
  //bcc:      [],
  //cc:       [],
  //replyto:  '',
  //date:     '',
  //files: [
    //{
     // filename:     '',           // required only if file.content is used.
     // contentType:  '',           // optional
      //cid:          '',           // optional, used to specify cid for inline content
      //path:         '',           //
      //url:          '',           // == One of these three options is required
      //content:      ('' | Buffer) //
    //}
  //],
  //file_data:  {},
  //headers:    {} 
   
   
    
  }); 
email.addTo('gajendra.sisodia@appirio.com');
email.addTo('gajendrasingh.86@gmail.com');


sendgrid.send(email, function(err, json) {
  if (err) { return console.error(err); }
  console.log(json); });






/*
//Sending One Email

var sendgrid  = require('sendgrid')("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");
sendgrid.send({
  to:       'hmehta@appirio.com',
  from:     'other@example.com',
  subject:  'Hello World',
  text:     'My first email through SendGrid.'
}, function(err, json) {
  if (err) { return console.error(err); }
  console.log(json);
}); 

*/