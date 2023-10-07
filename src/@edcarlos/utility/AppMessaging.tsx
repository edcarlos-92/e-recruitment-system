import React from 'react'
//import Axios, { setAuthToken } from '../../@mactech/services/auth/jwt-auth';
import helper from '../libs/@mactech/helpers/appHelper'
import { notificationConst } from 'shared/constants/AppConst';
import axios from 'axios';

const nodemailer = require("nodemailer");

export const smsMessaging = async (phoneNumber, textMessage) => {

  const { smsSenderID, smsClientID, smsAPIKey } = notificationConst
  const API_Link = `https://my.forwardvaluesms.com/vendorsms/pushsms.aspx?apiKey=${smsAPIKey}&clientid=${smsClientID}&msisdn=${phoneNumber}&sid=${smsSenderID}&msg=${textMessage}&fl=0`
  axios.post(API_Link)
    .then(function (response) {
      })
    .catch(function (error) {
      });

}

export const emailMessaging = async (toEmail, textMessage, emailSubject) => {

  const { emailUser, emailPass, emailHost, emailFrom, emailPort } = notificationConst

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: emailHost,//'smtp.your-email.com'
    port: emailPort,
    secure: true, // true for 465, false for other ports
    address: emailHost,
    auth: {
      user: emailUser, // generated ethereal user
      pass: emailPass, // generated ethereal password
    },
  });

  try {
    // send mail with defined transport object
    let messageInfo = await transporter.sendMail({
      from: emailFrom, // sender address  '"Fred Foo 👻" <mailing@mactech.com>'
      to: toEmail, // list of receivers "admin@mactech.com,semecaland1@gmail.com"
      subject: emailSubject, // Subject line "Hello ✔"
      text: textMessage, // plain text body  "Hello admin This is a test mail?"
      html: textMessage, // html body "<b>Hello world?</b>"
    });
    } catch (err) {
    }

}