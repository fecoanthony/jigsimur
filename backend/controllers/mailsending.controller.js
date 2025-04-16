export const mailsending = async (req, res) => {
    const { name, email, phone, username, bankName, accountNo } = req.body;

     // Create a transporter

     const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "your-email@gmail.com", // replace with your Gmail
          pass: "your-app-password", // use App Password (not your real password)
        },
      });

      // Define the email options
      const mailOptions = {
        from: `"Affiliate Signup" <your-email@gmail.com>`,
        to: "your-email@gmail.com",
        subject: "New Affiliate Signup",
        html: `
          <h3>New Affiliate Details</h3>
          <p><strong>Full Name:</strong> ${name}</p>
          <p><strong>Username:</strong> ${username}</p>
          <p><strong>Phone Number:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Bank Name:</strong> ${bankName}</p>
          <p><strong>Account No:</strong> ${accountNo}</p>
        `,
      };

      // Send the email

      try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "Email sent successfully" });
      } catch (error) {
        console.error("Error sending mail:", error);
        res.status(500).json({ message: "Email failed to send" });
      }
}