import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import { authQuery } from '../../../../@mactech/libs/@mactech/mysql/db'
import helper from '../../../../@mactech/libs/@mactech/helpers/appHelper'
import { niceDateWithTime, Time } from '@mactech/utility/Utils'
import Moment from 'moment';

const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {

  if (req.method === 'PUT') {

    //Check Token if needed
    await helper.checkPermission(req, "v", async function (isPermited: any) {
      if (isPermited) {

        const { id }: any = req.query
        const date = Date.now();

        const logoutDateTime = `${Moment(date).format("ll")} at ${Time(date)}`;
        try {
          if (!id) {
            return res.status(400).json({ message: '`id` required' })
          }
          if (typeof parseInt(id.toString()) !== 'number') {
            return res.status(400).json({ message: '`id` must be a number' })
          }
          const system_user: any = await authQuery(`UPDATE system_users SET  logout = ? WHERE id = ? `, [logoutDateTime, id])

          res.status(200).send(helper.createResponse(200, 1, "Record Updated", system_user[0]));

        } catch (e: any) {
          res.status(500).json({ message: e.message })
        }
      } else {
        res.status(403).send(helper.createResponse('Error', 0, 'Token Not Found', ""));
      }
    });

  } else {
    res.status(405).json({ message: 'This Should be a PUT Method' });
  }

}

export default handler