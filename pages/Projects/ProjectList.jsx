import React from 'react'
import Head from 'next/head'
import BreadCrumbs from '../../components/BreadCrumbs'
import TitleBar from '../../components/TitleBar'
import { Container, Spacer, Table, Dropdown, Text } from '@nextui-org/react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import AssignmentIcon from '@mui/icons-material/Assignment';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

const countArr = [1, 2, 3, 4, 5, 6]

export default function ProjectList() {
    return (
        <div>
            <Head>
                <title>Digital Transformation | Project List</title>
            </Head>
            <main>
                <BreadCrumbs stage1="Projects" stage2="Project List" />
                <Spacer y={1} />
                <TitleBar
                    title="Project List"
                    isButton={true}
                    buttonName="Crerate Project"
                />
                <Spacer y={1} />
                <Container>
                    <Table
                        shadow={true}
                        color="secondary"
                        aria-label="Example pagination  table"
                        css={{
                            height: "auto",
                            minWidth: "100%",
                        }}
                        selectionMode="none"
                    >
                        <Table.Header>
                            <Table.Column><Text h5>Number</Text></Table.Column>
                            <Table.Column><Text h5>Name</Text></Table.Column>
                            <Table.Column><Text h5>Site Location</Text></Table.Column>
                            <Table.Column><Text h5>Industry Type</Text></Table.Column>
                            <Table.Column><Text h5>Status</Text></Table.Column>
                            <Table.Column><Text h5>Start Date</Text></Table.Column>
                            <Table.Column><Text h5>Sales Incharge</Text></Table.Column>
                            <Table.Column><Text h5>Followup Date</Text></Table.Column>
                            <Table.Column><Text h5>Customer Name</Text></Table.Column>
                            <Table.Column><Text h5>Remarks</Text></Table.Column>
                        </Table.Header>
                        <Table.Body>
                            {countArr.map((data)=>(
                                <Table.Row >
                                    <Table.Cell>P123</Table.Cell>
                                    <Table.Cell>Oil and Gas project</Table.Cell>
                                    <Table.Cell>Rajasthan</Table.Cell>
                                    <Table.Cell>pending</Table.Cell>
                                    <Table.Cell>12/1/2022</Table.Cell>
                                    <Table.Cell>Sales person 1</Table.Cell>
                                    <Table.Cell>12/12/2022</Table.Cell>
                                    <Table.Cell>HRRL</Table.Cell>
                                    <Table.Cell>Remarks</Table.Cell>
                                    <Table.Cell>
                                        <Dropdown>
                                            <Dropdown.Trigger>
                                                <MoreHorizIcon />
                                            </Dropdown.Trigger>
                                            <Dropdown.Menu aria-label="Static Actions">
                                                <Dropdown.Item key="Preview"><RemoveRedEyeOutlinedIcon /> &nbsp;&nbsp;Preview</Dropdown.Item>
                                                <Dropdown.Item key="Edit"><DriveFileRenameOutlineOutlinedIcon />&nbsp;&nbsp;&nbsp;Edit</Dropdown.Item>
                                                <Dropdown.Item key="ManageTask"><TaskAltIcon />&nbsp;&nbsp;&nbsp;Manage Task</Dropdown.Item>
                                                <Dropdown.Item key="ManageAppointment"><AssignmentIcon />&nbsp;&nbsp;&nbsp;Manage Appointment</Dropdown.Item>
                                                <Dropdown.Item color='error' key="Delete"><DeleteOutlineIcon />&nbsp;&nbsp;&nbsp;Delete</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                        <Table.Pagination
                            shadow
                            noMargin
                            align="center"
                            rowsPerPage={5}
                            onPageChange={(page) => console.log({ page })}
                        />
                    </Table>
                </Container>
            </main>
        </div>
    )
}
