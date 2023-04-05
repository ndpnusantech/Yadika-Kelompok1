import { PieChart, Pie, Tooltip } from "recharts";

const ContentPie = () => {
  const data = [
    { name: "data1", value: 200000 },
    { name: "data2", value: 100433 },
    { name: "data3", value: 100443 },
    { name: "data4", value: 100433 },
  ];

  return (
    <PieChart width={400} height={400}>
      <Pie
        dataKey="value"
        isAnimationActive={false}
        data={data}
        cx="50%"
        cy="50%"
        outerRadius={80}
        fill="#8884d8"
        label
      />
     
      <Tooltip />
    </PieChart>
  );
};

export default ContentPie