// import sendgrid from '@sendgrid/mail';

// sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

// export async function POST(request) {
//     const { name, email, message } = await request.json();
    
//     const msg = {
//         to: process.env.TO_EMAIL,
//         from: process.env.FROM_EMAIL,
//         subject: `New contact form submission from ${name}`,
//         text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
//         replyTo: email,
//     };
    
//     try {
//         await sendgrid.send(msg);
//         return new Response(JSON.stringify({ success: true }), { status: 200 });
//     } catch (error) {
//         console.error('Error sending email:', error);
//         return new Response(JSON.stringify({ success: false }), { status: 500 });
//     }
// }

import { Resend } from 'resend';

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { error } = await resend.emails.send({
      from: `Portfolio Contact <${process.env.FROM_EMAIL}>`,
      to: process.env.TO_EMAIL,
      subject: `New contact from ${name}`,
      reply_to: email,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    if (error) {
      console.error(error);
      return new Response(JSON.stringify({ success: false }), { status: 500 });
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ success: false }), { status: 500 });
  }
}