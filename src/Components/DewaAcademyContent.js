// DewaAcademyContent.js
import React from 'react';
import { Row, Col } from 'antd';
import ReactApexChart from 'react-apexcharts';

const DewaAcademyContent = ({
  barChartOptions,
  barChartSeries,
  pausedCoursesOptions,
  pausedCoursesSeries,
  passedStudentsOptions,
  passedStudentsSeries,
  failedStudentsOptions,
  failedStudentsSeries,
  completedAllCoursesOptions,
  completedAllCoursesSeries,
  hardcodedStudentNames,
}) => {
  return (
    <>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <h2>Students Completed All Courses:</h2>
          <ReactApexChart options={barChartOptions} series={barChartSeries} type="bar" />
        </Col>
        <Col span={24}>
          <h2>List of Students:</h2>
          <ul>
            {hardcodedStudentNames.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <h2>Paused Courses Overview:</h2>
          <ReactApexChart options={pausedCoursesOptions} series={pausedCoursesSeries} type="pie" />
        </Col>
        <Col span={12}>
          <h2>Passed Students Overview:</h2>
          <ReactApexChart options={passedStudentsOptions} series={passedStudentsSeries} type="pie" />
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <h2>Failed Students Overview:</h2>
          <ReactApexChart options={failedStudentsOptions} series={failedStudentsSeries} type="pie" />
        </Col>
        <Col span={12}>
          <h2>Students Completed All Courses Overview:</h2>
          <ReactApexChart options={completedAllCoursesOptions} series={completedAllCoursesSeries} type="pie" />
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <h2>List of Students:</h2>
          <ul>
            {hardcodedStudentNames.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        </Col>
      </Row>
    </>
  );
};

export default DewaAcademyContent;

