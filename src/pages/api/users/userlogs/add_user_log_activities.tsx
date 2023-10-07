import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import Filter from 'bad-words'
import { query, authQuery } from '../../../../@mactech/libs/@mactech/mysql/db'
import helper, { fetchTokenid } from '@mactech/libs/@mactech/helpers/appHelper'
const filter = new Filter()
import { HumanDateTime } from '@mactech/utility/Utils'

const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {

    if (req.method === 'POST') {

        // await helper.checkPermission(req,"v", async function (isPermited:any) {
        //     if(isPermited){
        const activity_description = req.body
        let staffID = 'Applicant';
        const gottenTokenid = fetchTokenid()

        if (gottenTokenid.length !== 0) {
            const get_User_records: any = await authQuery(`SELECT display_name FROM system_users where id = ?`, [gottenTokenid])
            if (get_User_records.length !== 0) {
                staffID = get_User_records[0].display_name;
            }
        }

        try {

            const results = await query(
                `INSERT INTO activity_log
                        (
                        id,
                        description,
                        date,
                        staffid
                        ) VALUES (?,?,?,?)
                        `,
                [
                    0,
                    activity_description,
                    HumanDateTime(),
                    staffID,
                    //get_User_records[0].display_name 
                    //gottenTokenid,//userId,//records_by,                    
                ]
            )
            //res.status(200).send(helper.createResponse(200, 1, "Record Inserted", results));
            //return res.json(results)
        } catch (e: any) {
            res.status(500).json({ message: e.message })
        }

        //     } else{
        //             res.status(403).send(helper.createResponse('Error',0,'Token Not Found',""));
        //     }
        // });

    } else {
        res.status(405).json({ message: 'This Should be a POST Method' });
    }

}

export default handler
