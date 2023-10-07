import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { query } from '../../@mactech/libs/@mactech/mysql/db';
import helper, { fetchTokenid } from '@mactech/libs/@mactech/helpers/appHelper'
import { smsMessaging, emailMessaging } from '@mactech/utility/AppMessaging';
// import { appIntl } from "@mactech/utility/helper/Utils";
//emailMessaging(`semecaland1@gmail.com`,`Hi Edorh admin`,`Test Mail`)

const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {

    if (req.method === 'POST') {

        //const  messages  = appIntl();

        await helper.checkPermission(req, "v", async function (isPermited: any) {
            if (isPermited) {

                const { id, customer_id, sms_notification, email_notification, push_notification, text_message, created_at } = req.body
                const sender = fetchTokenid()

                try {
                    if (!customer_id || !text_message) {//
                        return res.status(400).json({ message: 'customer_id & text_message are all required' })
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
                        created_at
                        ) VALUES (?,?,?,?,?,?,?,?)
                        `,
                        [
                            id,
                            customer_id,
                            sms_notification,
                            email_notification,
                            push_notification,
                            text_message,
                            sender,
                            created_at,
                        ]
                    )

                    //look for client phone & email if exist
                    const get_customer_records: any = await query(`SELECT * FROM customer_reg WHERE id=? `, [customer_id])

                    const { customer_name, customer_phone, customer_email } = get_customer_records[0]

                    const textMessage = `Dear ${customer_name} ${text_message}`;

                    if (sms_notification === true && customer_phone !== 0) {
                        await smsMessaging(customer_phone, textMessage);
                        }
                    if (email_notification === true && customer_email !== 0) {
                        await emailMessaging(customer_email, textMessage, `INFORMATION`).catch(console.error);
                        }

                    //res.status(200).send(helper.createResponse(200, 1, "Record Inserted", results));
                    //return res.json(results)
                } catch (e: any) {
                    res.status(500).json({ message: e.message })
                }

            } else {
                res.status(403).send(helper.createResponse('Error', 0, 'Token Not Found', ""));
            }

        });

    } else {
        res.status(405).json({ message: 'This Should be a POST Method' });
    }
}

export default handler
