const { generateFourMonthsData, generateSevenDaysData, generateOneMonthData } = require('../../../utils/GenerateConsumptionData');
const { NextApiResponse, NextApiRequest } = require('next')


const generateData = (val) => {
  let temp_data = [];
  if (val === "120 days") {
      temp_data = generateFourMonthsData();
  } else if (val === "7 days") {
      temp_data = generateSevenDaysData();
  } else if (val === "30 days") {
        temp_data = generateOneMonthData();
    }
  return temp_data;
}

export default function handler(req, res) {
  const { val } = req.body;
  const data = generateData(val);
  res.status(200).json(data);
}
