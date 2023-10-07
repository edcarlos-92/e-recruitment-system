import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import { query } from '../../../../@mactech/libs/@mactech/mysql/db'
import helper from '@mactech/libs/@mactech/helpers/appHelper'

const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {

  if (req.method === 'GET') {
    //const { id } = req.query 
    try {
      const get_records = await query(`SELECT * FROM activity_log ORDER BY ID DESC`,)
      res.status(200).send(helper.createResponse(200, 1, "Record found", get_records));
    } catch (e: any) {
      res.status(500).json({ message: e.message })
    }
  } else {
    res.status(405).json({ message: 'This Should be a GET Method' });
  }
}

export default handler