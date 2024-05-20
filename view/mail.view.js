const express = require('express');
const sendEmailToUser = require('./email');
const router = express.Router();

router.use((req, res, next) => {
  console.log('mail route');
  next();
});

router.post('/send-email', async (req, res) => {
  const {
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
  } = req.body;

  try {
    const emailRes = await sendEmailToUser({
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
    });

    return res.json({ success: true, emailRes });
  } catch (error) {
    return res.json({
      success: false,
      message: "Can't send mail! Something went wrong!",
      error,
    });
  }
});

module.exports = router;
