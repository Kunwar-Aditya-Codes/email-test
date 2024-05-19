const Mailgun = require('mailgun.js');
const formData = require('form-data');

const mailgun = new Mailgun(formData);

const mg = mailgun.client({
  username: 'api',
  key: process.env.MAILGUN_API_KEY,
});

const sendEmailToUser = async () => {
  const emailRes = await mg.messages.create(
    'sandboxec30c55fb1ae4b0ca8854724f446b421.mailgun.org',
    {
      from: 'Excited User <aditya.kunwar@adypu.edu.in>',
      to: ['aditya.kunwar@adypu.edu.in'],
      subject: 'Hello',
      text: 'Testing some Mailgun awesomeness!',
      html: '<h1>Testing some Mailgun awesomeness!</h1>',
    }
  );


  return emailRes;
};

module.exports = sendEmailToUser;
