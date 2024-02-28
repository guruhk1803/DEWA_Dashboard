// // PieChart.js
// import React from 'react';
// import { PieChart as RechartsPieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

// const PieChart = ({ data }) => {
//   return (
//     <ResponsiveContainer width="100%" height={400}>
//       <RechartsPieChart>
//         <Pie
//           dataKey="value"
//           isAnimationActive={false}
//           data={data.moduleAssigned}
//           cx="50%"
//           cy="50%"
//           outerRadius={80}
//           fill="#8884d8"
//           label
//         >
//           {data.moduleAssigned.map((entry, index) => (
//             <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//           ))}
//         </Pie>
//         <Legend />
//       </RechartsPieChart>
//     </ResponsiveContainer>
//   );
// };

// export default PieChart;