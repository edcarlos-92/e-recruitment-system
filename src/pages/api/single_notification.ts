import {NextApiHandler, NextApiRequest, NextApiResponse} from 'next';
import {query} from '../../@mactech/libs/@mactech/mysql/db';
import helper, {
  fetchTokenid,
} from '@mactech/libs/@mactech/helpers/appHelper';
import {smsMessaging, emailMessaging} from '@mactech/utility/AppMessaging';
// import { appIntl } from "@mactech/utility/helper/Utils";
//emailMessaging(`semecaland1@gmail.com`,`Hi Edorh admin`,`Test Mail`)

const handler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  if (req.method === 'POST') {
    //const  messages  = appIntl();

    await helper.checkPermission(req, 'v', async function (isPermited: any) {
      if (isPermited) {
        const {
          id,
          user_id,
          sms_notification,
          email_notification,
          push_notification,
          text_message,
          created_at,
          notification_type,
          role_or_user_id,
        } = req.body;
        const sender = fetchTokenid();

        try {
          if (!user_id || !text_message) {
            //
            return res
              .status(400)
              .json({message: 'user_id & text_message are all required'});
          }
          const results = query(
            `INSERT INTO system_notifications
                        (
                        id,
                        customer_id,
                        sms_notification,
                        email_notification,
                        push_notification,
                        text_message,
                        sender,
                        created_at,
                        notification_type,
                        role_or_user_id
                        ) VALUES (?,?,?,?,?,?,?,?,?,?)
                        `,
            [
              id,
              user_id,
              sms_notification,
              email_notification,
              push_notification,
              text_message,
              sender,
              created_at,
              notification_type,
              user_id,
            ],
          ).then(async (rows: any) => {
            //res.end(JSON.stringify(results));
            //look for client phone & email if exist
            const get_customer_records: any = await query(
              `SELECT * FROM system_users WHERE id=? `,
              [user_id],
            );
            const {display_name, user_phone_number, user_email} =
              get_customer_records[0];
            const textMessage = `Dear ${display_name} ${text_message}`;
            if (sms_notification === true && user_phone_number !== 0) {
              await smsMessaging(user_phone_number, textMessage);
              }
            if (email_notification === true && user_email !== 0) {
              await emailMessaging(
                user_email,
                textMessage,
                `INFORMATION`,
              ).catch(console.error);
              }
            if (push_notification === true) {
              query(
                `UPDATE system_users SET  user_notification = 1 WHERE id = ? `,
                [user_id],
              );
              }
          });

          //res
            .status(200)
            .send(helper.createResponse(200, 1, 'Record Inserted', results));
          //res.end(JSON.stringify(results));

          //return res.json(results)
        } catch (e: any) {
          res.status(500).json({message: e.message});
        }
      } else {
        res
          .status(403)
          .send(helper.createResponse('Error', 0, 'Token Not Found', ''));
      }
    });
  } else {
    res.status(405).json({message: 'This Should be a POST Method'});
  }
};

export default handler;
