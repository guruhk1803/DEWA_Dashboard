import React from "react";
import { Bar } from "react-chartjs-2";
import { Tag, Tooltip } from "antd";
import { CheckCircleOutlined, InfoCircleOutlined } from "@ant-design/icons";

const ModuleScore = ({ students }) => {
  // Mocking scores for testing if not available in the API response
  const studentsWithScores = students.map((student) => ({
    ...student,
    score: Math.floor(Math.random() * 100), // Assign a random score for testing
  }));

  const passedStudents = studentsWithScores.filter((student) => student.score >= 60);
  const failedStudents = studentsWithScores.filter((student) => student.score < 60);

  const data = {
    labels: ["Passed", "Failed"],
    datasets: [
      {
        label: "Number of Students",
        data: [passedStudents.length, failedStudents.length],
        backgroundColor: ["#52c41a", "#ff4d4f"], // Updated colors for Passed and Failed
        hoverBackgroundColor: ["#52c41a", "#ff4d4f"],
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    legend: {
      display: false, // Hiding the legend for simplicity
    },
  };

  return (
    <div className="module-score-container">
      <div className="module-score-header">
        <CheckCircleOutlined style={{ fontSize: "32px", color: "#52c41a" }} />
        <div className="header-info">
          <h2 className="header-title">Module Score</h2>
        </div>
      </div>
      <div className="module-score-chart">
        <Bar data={data} options={options} />
      </div>
      <div className="module-score-details">
        <div className="module-score-tag">
          <Tag color="#52c41a">Passed</Tag>
          <Tooltip title="Number of students who passed">
            <InfoCircleOutlined style={{ color: "#1890ff" }} />
          </Tooltip>
        </div>
        <div className="module-score-tag">
          <Tag color="#ff4d4f">Failed</Tag>
          <Tooltip title="Number of students who failed">
            <InfoCircleOutlined style={{ color: "#1890ff" }} />
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default ModuleScore;
