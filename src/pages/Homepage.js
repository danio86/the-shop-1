import React from 'react';
// import { useList } from "@corets/use-list";

import appStyles from "../App.module.css";
import styles from "../styles/PieChart.module.css";

// import { Form, Button, Image, Col, Row, Container, Alert } from "react-bootstrap";
import { Col, Row, Container, Card } from "react-bootstrap";
// import styles from "../../styles/SignInUpForm.module.css";


// import PieChart from '../components/charts/PieChart'
// import TotalRevenue from '../components/charts/TotalRevenue'
// import AgentCart from '../components/agent/AgentCart'
// import PropertyReferrals from '../components/charts/PropertyReferrals'

import BarChart from '../components/charts/BarChart';
import PieChart from '../components/charts/PieChart';


const Homepage = () => {
  return (
    // <Row className={styles.Row}>
    <Row>
      <Col className="my-auto py-2 p-md-2" md={6}>
        <Container className={`${appStyles.Content} p-4 `}>
          {/* <h1 className={styles.Header}>Home Page</h1> */}
          <h1 >Dashbord</h1>
        </Container>
      </Col>

      <Container className={styles.ChartBackground} mt="20px" display="flex" flexWrap="wrap" gap={4}>
            
            <Card className={styles.PieChart} >
            <PieChart
                title={'Properties for Sale'}
                value={52}
                color={'rgba(54, 162, 235, 0.2)'}
            />
            </Card>
            <Card className={styles.PieChart} >
            <PieChart
                title={'Properties for Rent'}
                value={38}
                color={'rgba(153, 102, 255, 0.2)'}
            />
            </Card>
            <Card className={styles.PieChart} >
            <PieChart 
                title={'Total customers'}
                value={95}
                color={'rgba(255, 159, 64, 0.2)'}
            />
            </Card>
            <Card className={styles.PieChart} >
            <PieChart 
                title={'Properties for Cities'}
                value={88}
                color={'rgba(255, 99, 132, 0.2)'}
            />
            </Card>
      </Container>
      <Container mt="20px" display="flex" flexWrap="wrap" gap={4}>
            <>
            <BarChart />
            </>
      </Container>

    </Row>    
  )
}

export default Homepage