import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import { authQuery } from '../../@mactech/libs/@mactech/mysql/db'
import helper from '../../@mactech/libs/@mactech/helpers/appHelper'

const jwToken = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const jwtTokeKey = 'my_secret_key';
const jwtExpirySeconds = "10h";//"10h";//50h

//const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {

  //// Get credentials from JSON body
  const { username, password } = req.body

  if (req.method === 'POST') {

    try {
      if (!username) {
        return res.status(400).json({ message: '`username` required' })
      }

      const results: any = await authQuery(`SELECT * FROM system_users WHERE user_login = ?`, username);

      bcrypt.compare(password, results[0]['user_pass'], (bcryptErr: any, bcryptResult: any) => {
        // wrong password
        // if (bcryptErr) {
        //     // //throw bcryptErr;
        // //return res.status(401).send(helper.createResponse('Error',1,"Password Not Match",bcryptErr));
        // }
        if (bcryptResult) {

          const token = jwToken.sign({ id: results[0].id }, jwtTokeKey, {
            algorithm: 'HS256',
            expiresIn: jwtExpirySeconds
          })
          //var response = {
            "id": results[0].id,
            "expires_in": jwtExpirySeconds,
            "access_token": token,
            "token": token,
            "token_type": "bearer"
          };

          authQuery(`UPDATE system_users SET updated_at = now() WHERE id = ?`, results[0].id);

          res.status(200).send(helper.createResponse(200, 1, "Token Generated", response));
          // }
        else {

          res.status(401).send(helper.createResponse('Error', 1, "Password Not Match", 'bcryptErr'));
        }

      });

    } catch (e: any) {
      res.status(500).json({ message: e.message })
    }
  } else {
    res.status(405).json({ message: 'We only support POST' });
  }

}

export default handler
