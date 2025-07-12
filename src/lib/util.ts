"use server"

export async function sendMail(userData){
  const {name, email} = userData;
  const msgBody = Object.entries(userData)
  .filter(([key, value]) => value !== undefined && value !== null && value !== '') // Exclude empty, null, or undefined values
  .map(([key, value]) => `${JapaneseLabel[key]}: ${value}`)
  .join('\n');

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.MY_EMAIL,
    to: [email, "yemyintkyaw@coosy.co.jp"], 
    // cc: email, (uncomment this line if you want to send a copy to the sender)
    subject: `Message from ${name} (${email})`,
    text: msgBody,
  };
  try{
    await transport.sendMail(mailOptions);
    return {status: 200};
  }catch(err){
    console.log("error in sending mail",err.message);
    return {message:"something went wrong. try again", status: 500}
  }
}