const Mailgun = require('mailgun.js');
const formData = require('form-data');

const mailgun = new Mailgun(formData);

const mg = mailgun.client({
  username: 'api',
  key: process.env.MAILGUN_API_KEY_2,
});

const sendEmailToUser = async ({
  email,
  link,
  meetingId,
  title,
  agenda,
  date,
  startTime,
  endTime,
  mode,
  place,
}) => {
  const emailRes = await mg.messages.create(
    // 'sandboxec30c55fb1ae4b0ca8854724f446b421.mailgun.org',
    'sandbox387efb5918e44da9990e5b3245f677f1.mailgun.org',
    {
      from: 'Prateek Khale <prateek.khale@adypu.edu.in>',
      to: email,
      subject: 'Meeting Invite Link',
      html: `
      <h3>Meeting Invitation</h3>
      <p>Dear EAMS user,</p>
        <p>You are invited to join a meeting. Please find the details below:</p>
        <br/>
        <div>
          <p><strong>Meeting ID:</strong> ${meetingId}</p>
          <p><strong>Meeting Title:</strong> ${title}</p>
          <p><strong>Meeting Agenda:</strong> ${agenda}</p>
          <p><strong>Meeting Date:</strong> ${date}</p>
          <p><strong>Start time, End Time:</strong> ${startTime} - ${endTime}</p>
          <p><strong>Mode of Meeting:</strong> ${mode}</p>
          <p><strong>Meeting Place:</strong> ${place}</p>
        </div>
        <br/>
        <p><strong>Link:</strong> <a href="${link}">Join the meeting</a></p>
        <p>Looking forward to your participation.</p>
        <br/>
        <p>Best regards,<br>Prateek Khale</p>
      `,
    }
  );

  return emailRes;
};

module.exports = sendEmailToUser;
