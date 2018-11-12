var nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  secure: false,
  port: 25,
  auth: {
    user: 'sampler098@gmail.com',
    pass: 'ABCabc123321'
  },
  tls: {
    rejectUnauthorized: false
  }
});
let HelperOptions = {
  from: '"Jeff" <sampler098@gmail.com',
  to: 'jefferwingonong@gmail.com',
  subject: 'amazing ben',
  text: 'we noticed that your account is below the maintaining balance! we suggest that you go to the nearest unionbank site to deposit so that you wont be charged by unnecessary fees. thank you'
};
  transporter.sendMail(HelperOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("The message was sent!");
    console.log(info);
  });
