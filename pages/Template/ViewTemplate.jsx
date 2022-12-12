import React from 'react'
import Head from 'next/head'
import BreadCrumbs from '../../components/BreadCrumbs'
import TitleBar from '../../components/TitleBar'
import { Container, Spacer, Card, Text, Table, css } from '@nextui-org/react'
import { Col, Row } from 'react-bootstrap'

const count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const processCount = [1,2,3]

export default function ViewTemplate() {

    const TemplateDetails = () => {
        return (
            <Card>
                <Card.Header>
                    <Text b>Template Details</Text>
                </Card.Header>
                <Card.Divider />
                <Card.Body css={{ py: "$10" }}>
                    <Table
                        compact
                        shadow={false}
                        color="secondary"
                        aria-label="Example pagination  table"
                        css={{
                            height: "auto",
                            minWidth: "100%",
                        }}
                        selectionMode="single"
                    >
                        <Table.Header>
                            <Table.Column><Text h5>Template Name</Text></Table.Column>
                            <Table.Column css={{ width: '100px' }}><Text h5>Template Description</Text></Table.Column>
                            <Table.Column><Text h5>Category</Text></Table.Column>
                            <Table.Column><Text h5>Updated Date</Text></Table.Column>
                            <Table.Column><Text h5>Status</Text></Table.Column>
                        </Table.Header>
                        <Table.Body>
                            {count.map((item, index) => (
                                <Table.Row key={index+1}>
                                    <Table.Cell>Textile & Apparel 1</Table.Cell>
                                    <Table.Cell>Lorem ipsum dolor sit amet consectetur</Table.Cell>
                                    <Table.Cell> Textile & Apparel</Table.Cell>
                                    <Table.Cell>November 13, 2021</Table.Cell>
                                    <Table.Cell>Active</Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                        <Table.Pagination
                            shadow
                            noMargin
                            align="start"
                            rowsPerPage={5}
                            onPageChange={(page) => console.log({ page })}
                        />
                    </Table>
                </Card.Body>
            </Card>
        )
    }

    const ProcessDetails = () => {
        return (
            <Card>
                <Card.Header>
                    <Text b>Process Details</Text>
                </Card.Header>
                <Card.Divider />
                <Card.Body css={{ py: "$10" }}>
                    <Table
                        compact
                        shadow={false}
                        color="secondary"
                        aria-label="Example pagination  table"
                        css={{
                            height: "auto",
                            minWidth: "100%",
                        }}
                        selectionMode="single"
                    >
                        <Table.Header>
                            <Table.Column><Text h5>Process Name</Text></Table.Column>
                            <Table.Column css={{ width: '100px' }}><Text h5>Process Details</Text></Table.Column>
                            <Table.Column><Text h5>Updated Date</Text></Table.Column>
                        </Table.Header>
                        <Table.Body>
                            {processCount.map((item,index) => (
                                <Table.Row key={index+1}>
                                    <Table.Cell>Textile & Apparel 1</Table.Cell>
                                    <Table.Cell>Lorem ipsum dolor sit amet consectetur</Table.Cell>
                                    <Table.Cell>November 13, 2021</Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                        <Table.Pagination
                            shadow
                            noMargin
                            align="start"
                            rowsPerPage={5}
                            onPageChange={(page) => console.log({ page })}
                        />
                    </Table>
                </Card.Body>
            </Card>
        )
    }

    const FieldDetails = () => {
        return (
            <Card>
                <Card.Header>
                    <Text b>Field Details</Text>
                </Card.Header>
                <Card.Divider />
                <Card.Body css={{ py: "$10" }}>
                    <Table
                        compact
                        shadow={false}
                        color="secondary"
                        aria-label="Example pagination  table"
                        css={{
                            height: "auto",
                            minWidth: "100%",
                        }}
                    >
                        <Table.Header>
                            <Table.Column><Text h5>Field Name</Text></Table.Column>
                            <Table.Column><Text h5>Field Type</Text></Table.Column>
                            <Table.Column><Text h5>Updated Date</Text></Table.Column>
                        </Table.Header>
                        <Table.Body>
                            {count.map((item,index) => (
                                <Table.Row key={index+1}>
                                    <Table.Cell>Textile & Apparel 1</Table.Cell>
                                    <Table.Cell>Lorem ipsum dolor sit amet consectetur</Table.Cell>
                                    <Table.Cell>November 13, 2021</Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                        <Table.Pagination
                            shadow
                            noMargin
                            align="start"
                            rowsPerPage={5}
                            onPageChange={(page) => console.log({ page })}
                        />
                    </Table>
                </Card.Body>
            </Card>
        )
    }

    return (
        <div>
            <Head>
                <title>Digital Transformation | View Template</title>
            </Head>

            <main>
                <BreadCrumbs stage1="Template" stage2="View Template" />
                <Spacer y={1} />
                <TitleBar
                    title=" View Template"
                    isButton={true}
                    buttonName="Create Template"
                    href="/Template/AddTemplate"
                />
                <Spacer y={1} />

                <Container>
                    <Row className='gy-4'>
                        <Col lg={4}>
                            <TemplateDetails />
                        </Col>
                        <Col lg={4}>
                            <ProcessDetails />
                        </Col>
                        <Col lg={4}>
                            <FieldDetails />
                        </Col>
                    </Row>
                </Container>
            </main>
        </div>
    )
}
