import dynamic from "next/dynamic";
import BaseLayout from "../../components/BaseLayout/BaseLayout";
import { FaChartBar, FaChartLine, FaChartPie, FaChartArea } from "react-icons/fa";


import Biaxial from "../../components/Charts/Biaxial";

const DynamicBarChart = dynamic(
  () => import("../../components/Charts/Barchart"),
  { ssr: false }
);
const DynamicLineChart = dynamic(
  () => import("../../components/Charts/Linechart"),
  { ssr: false }
);

const Charts = () => {
  return (

    <BaseLayout title="Charts" footer={false}>
      <div className="flex justify-center flex-col mt-10">
        <div className="flex items-center justify-between bg-white p-4 w-full mb-4 cardscolor">
          <div>
            <div className="w-20 h-20 bg-yellow-200 rounded-full flex items-center justify-center">
              <FaChartLine className="text-4xl text-yellow-600" />
            </div>
            <div className="text-center mt-4  text-lg">(Line Chart) Yield (Growth) over time
              <p> X-Axis: Time(Bi-Monthly) </p>
              <p> Y-Axis: Prediction Accuracy</p></div>
          </div>
          <DynamicLineChart />
        </div>
        <div className="flex items-center justify-between bg-white p-8 w-full mb-4 rounded-lg shadow-lg cardscolor">
          <div>
            <div className="w-20 h-20 bg-green-200 rounded-full flex items-center justify-center">
              <FaChartBar className="text-4xl text-green-600" />
            </div>
            <div className="text-center mt-4  text-lg">Number of Heads over Time
              <p>X-Axis: Time (In months)</p>
              <p> Y-Axis: No. of Heads</p></div>
          </div>
          <DynamicBarChart
            width={300} />
        </div>


        <div className="flex items-center justify-between bg-white p-4 w-full mb-4 cardscolor" >
          <div>

            <div className="text-center mt-4  text-lg">(Biaxial Plot)Legend:<p>X-axis:Dates(Bi Monthly)</p>
              <p> Left  Y-axis: Head count Right Y-axis:Yield in kg/ha</p>
            </div>
          </div>
          <Biaxial />
        </div>

      </div>
    </BaseLayout >
  );
};

export default Charts;




