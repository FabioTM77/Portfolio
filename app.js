const express = require('express');

const nodemailer = require('nodemailer');
const app = express();
app.use(express.urlencoded({extended:true}));
app.set('view engine', 'ejs');
app.use("views", express.static(`views`));
app.set("port", process.env.PORT || 3000);
app.use(express.static(`public`));
app.get("/", (req, res) =>{
res.render("index" , {
    title: "Home",
});



})
/*app.get('/test', (req, res) => {
res.send('test')
})*/
app.post('/contact', (req, res)=> {
    console.log('message sent')
console.log(req.body);
res.send('message sent');// sending data for test 
//res.redirect(303, '/')

})
app.listen(app.get("port"), () => {
console.log(`server run on port ${app.get("port")}`);
});

//const nodemailer = require('nodemailer');

// set up the post
// unfortunately this code broke the site if loaded, could not find the solution at the moment

/*const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'webentw19@gmail.com',
    pass: 'wEbdEv-77' // naturally, replace both with your real credentials or an application-specific password
  }
});

const mailOptions = {
  from: 'webentw19@gmail.com',
  to: 'dcitestmail@yahoo.com',
  subject: 'Invoices due',
  text: 'test test test'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
	console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});*/


