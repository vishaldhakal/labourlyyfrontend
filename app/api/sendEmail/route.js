// Write me a nodemailer email sending code for api to send email to stmp server

import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("re_mYeVPcTd_4gSkQaE4s2Mmd1Jb5XGyK9tK");

export async function POST(req, res) {
  try {
    let body = await req.json();

    const { data, error } = await resend.emails.send({
      from: "Inquiry <info@empirecanalhomes.ca>",
      to: ["Salimanazeer@hotmail.com"],
      subject: "Inquiry From Empire Canals Landing Page",
      text: `Name: ${body.name}\nEmail: ${body.email} \nPhone: ${body.phone} \nMessage: ${body.message} \n`,
    });

    return NextResponse.json({
      success: true,
      message: data ? data : "Email sent successfully",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({
      success: false,
      message: "Error sending email",
    });
  }
}
