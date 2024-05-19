const express = require('express');
const sendEmailToUser = require('./email');
const router = express.Router();

router.use((req, res, next) => {
  console.log('mail route');
  next();
});

router.post('/send-email', async (req, res) => {
  try {
    const emailRes = await sendEmailToUser();

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
