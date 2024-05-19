const Mailgun = require('mailgun.js');
const formData = require('form-data');

const mailgun = new Mailgun(formData);

// update prateek's account setting

const mg = mailgun.client({
  username: 'api',
  key: process.env.MAILGUN_API_KEY_2,
});

const sendEmailToUser = async ({ email, link }) => {
  const emailRes = await mg.messages.create(
    // 'sandboxec30c55fb1ae4b0ca8854724f446b421.mailgun.org',
    'sandbox387efb5918e44da9990e5b3245f677f1.mailgun.org',
    {
      from: 'Kunwar Aditya <aditya.kunwar@adypu.edu.in>',
      to: email,
      subject: 'Meeting Invite Link',
      html: `<p>Dear user,</p>

      <p>You are invited to join a meeting. Please find the details below:</p>
      
      <strong>Link:</strong> <a href="${link}">Join the meeting</a></p>
      
      <p>Looking forward to your participation.</p>
      
      <p>Best regards,<br>
      Kunwar Aditya</p>`,
    }
  );

  return emailRes;
};

module.exports = sendEmailToUser;
