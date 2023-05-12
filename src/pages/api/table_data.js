import { NextApiRequest, NextApiResponse } from 'next'
const {TableGeneratorFunction} = require ('../../../utils/TableGeneratorFunction');

const handler = (req, res) => {
  let temp_data = TableGeneratorFunction();
  res.status(200).json(temp_data);
}

export default handler;
