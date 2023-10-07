//import {useDispatch, useSelector} from 'react-redux';
//import {activityLog} from '../../../../redux/actions';
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import { authQuery } from '../../../../@mactech/libs/@mactech/mysql/db'
import helper from '../../../../@mactech/libs/@mactech/helpers/appHelper'

const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  //const dispatch = useDispatch();
  if (req.method === 'DELETE') {
    await helper.checkPermission(req, "v", async function (isPermited: any) {
      if (isPermited) {
        try {
          const results = await authQuery(`DELETE FROM activity_log WHERE 1`,)
          res.status(200).send(helper.createResponse(200, 1, "Record Deleted", results));
        } catch (e: any) {
          res.status(500).json({ message: e.message })
        }
      } else {
        res.status(403).send(helper.createResponse('Error', 0, 'Token Not Found', ""));
      }
    });
  } else {
    res.status(405).json({ message: 'This Should be a DELETE Method' });
  }

}

export default handler
