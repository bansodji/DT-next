import { Container, Card, Text, Button, Spacer, Link } from '@nextui-org/react'
import Head from 'next/head'
import DashboardImage1 from "/public/assets/images/dashboard-1.png"
import DashboardImage2 from "/public/assets/images/dashboard-2.png"
import Image from 'next/image'
import { Col, Row } from 'react-bootstrap'
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

export default function Home() {
  const MockItem = (props) => {
    return (
      <Card>
        <Card.Body>
          <center>
            <Text h2>{props.heading}</Text>
            <Spacer y={1} />
            <Text size={"$md"}>{props.desc}</Text>
            <Spacer y={1} />
            <Link href={props.href}>
              <Button icon={props.icon} auto color="secondary">
                {props.buttonName}
              </Button>
            </Link>
          </center>
        </Card.Body>
      </Card>
    );
  };

  return (
    <div>
      <Head>
        <title>Digital Transformation | Home</title>
      </Head>

      <main className='size-100'>
        <Container className='size-100 position-relative'>
          <Row>
            <Col lg={6}>
              <Image
                width=""
                height=""
                src={DashboardImage1}
                alt="Create your projects here..."
                object-fit="cover"
              />

            </Col>
            <Col lg={6}>
              <Image
                width=""
                height=""
                src={DashboardImage2}
                alt="Create your projects here..."
                object-fit="cover"
              />
            </Col>
          </Row>
          <Row className='gy-4'>
            <Col lg={4}>
              <MockItem heading="No Tasks, Yet" icon={<RocketLaunchOutlinedIcon />} buttonName="Let's Get Started" href="/AddTask" desc="Use the button below to add your first task" />
            </Col>
            <Col lg={4}>
              <MockItem heading="No projects" icon={<ControlPointIcon />} buttonName="Create New Projects" href="/Projects/CreateProjects" desc="Let's get started shall we?" />
            </Col>
            <Col lg={4}>
              <MockItem heading="Manage Configurations?" icon={<SettingsOutlinedIcon />} buttonName="Settings" href="/Template/ManageTemplates" desc="Let's manage the configurations" />
            </Col>
          </Row>
        </Container>
      </main>

    </div>
  )
}
