import dynamic from "next/dynamic";
import BaseLayout from "../../components/BaseLayout/BaseLayout";
import { FaChartBar, FaChartLine, FaChartPie, FaChartArea } from "react-icons/fa";
import Scatter from "../../components/Charts/ScatterPlot";
import ScatterPlot from "../../components/Charts/ScatterPlot";
import Biaxial from "../../components/Charts/Biaxial";

const DynamicBarChart = dynamic(
  () => import("../../components/Charts/BarChart"),
  { ssr: false }
);
const DynamicLineChart = dynamic(
  () => import("../../components/Charts/LineChart"),
  { ssr: false }
);
const DynamicPieChart = dynamic(
  () => import("../../components/Charts/PieChart"),
  { ssr: false }
);

const Charts = () => {
  return (

    <BaseLayout title="Charts" footer={false}>
      {/* <AnalysisPage /> */}
      <div className="flex justify-center flex-wrap mt-10">

        <div className="flex items-center justify-between bg-white p-4 w-full md:w-5/12 mb-4">
          <div>
            <div className="w-20 h-20 bg-green-200 rounded-full flex items-center justify-center">
              <FaChartBar className="text-4xl text-green-600" />
            </div>
            <div className="text-center mt-4  text-lg">Number of Heads over Time
              <p>X-Axis: Time (In months)</p>
              <p> Y-Axis: No. of Heads</p></div>
          </div>
          <DynamicBarChart
            width={300}
          />
        </div>

        <div className="flex items-center justify-between bg-white p-4 w-full md:w-6/12 mb-4">
          <div>
            <div className="w-20 h-20 bg-yellow-200 rounded-full flex items-center justify-center">
              <FaChartLine className="text-4xl text-yellow-600" />
            </div>
            <div className="text-center mt-4  text-lg">(Line Chart) Prediction Accuracy Over Time
              <p> X-Axis: Time(Bi-Monthly) </p>
              <p> Y-Axis: Prediction Accuracy</p></div>
          </div>
          <DynamicLineChart />
        </div>
        <div className="flex items-center justify-between bg-white p-4 w-full md:w-3/5 mb-4">
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
