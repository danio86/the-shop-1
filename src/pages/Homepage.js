import React from 'react';
// import { useList } from "@corets/use-list";

import appStyles from "../App.module.css";
// import { Form, Button, Image, Col, Row, Container, Alert } from "react-bootstrap";
import { Col, Row, Container } from "react-bootstrap";
// import styles from "../../styles/SignInUpForm.module.css";


// import PieChart from '../components/charts/PieChart'
// import TotalRevenue from '../components/charts/TotalRevenue'
// import AgentCart from '../components/agent/AgentCart'
// import PropertyReferrals from '../components/charts/PropertyReferrals'

import BarChart from '../components/charts/BarChart';


const Homepage = () => {
  return (
    // <Row className={styles.Row}>
    <Row >
      <Col className="my-auto py-2 p-md-2" md={6}>
        <Container className={`${appStyles.Content} p-4 `}>
          {/* <h1 className={styles.Header}>Home Page</h1> */}
          <h1 >Dashbord</h1>
        </Container>
      </Col>

      <Container mt="20px" display="flex" flexWrap="wrap" gap={4}>
            <BarChart />
            {/* <PieChart
                title="Total customers"
                value={5684}
                series={[75, 25]}
                colors={["#275be8", "#c4e8ef"]}
            />
            <PieChart
                title="Properties for Cities"
                value={555}
                series={[75, 25]}
                colors={["#275be8", "#c4e8ef"]}
            /> */}
      </Container>

    </Row>    
  )
}

export default Homepage