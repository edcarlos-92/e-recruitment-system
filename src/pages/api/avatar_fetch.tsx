import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import { authQuery } from '../../@mactech/libs/@mactech/mysql/db'
//import helper from '../../helpers/appHelper'
import helper, { fetchTokenid } from '@mactech/libs/@mactech/helpers/appHelper'

const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {

  if (req.method === 'GET') {

    //Check Token if needed
    //await helper.checkPermission(req,"v", async function (isPermited:any) {
    //if(isPermited){
    //const { id } = req.query

    //const id = fetchTokenid()

    try {
      if (!id) {
        return res.status(400).json({ message: '`id` required' })
      }
      if (typeof parseInt(id.toString()) !== 'number') {
        return res.status(400).json({ message: '`id` must be a number' })
      }
      const system_user: any = await authQuery(`SELECT * FROM system_users WHERE id = ?`, id)

      await new Promise(r => setTimeout(r, 100))

      res.status(200).send(helper.createResponse(200, 1, "Record found", system_user[0]));

      //return res.json(system_users[0])
    } catch (e: any) {
      res.status(500).json({ message: e.message })
    }
    // } else{
    //         res.status(403).send(helper.createResponse('Error',0,'Token Not Found',""));
    // }
    //});

  } else {
    res.status(405).json({ message: 'This Should be a GET Method' });
  }

}

export default handler