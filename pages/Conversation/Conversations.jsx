import React from 'react'
import Head from 'next/head'
import BreadCrumbs from '../../components/BreadCrumbs'
import TitleBar from '../../components/TitleBar'
import { Container, Spacer, Table, Text, Dropdown } from '@nextui-org/react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import ReplyIcon from '@mui/icons-material/Reply';

const countArr = [1, 2, 3, 4, 5, 6]

export default function Conversations() {
    return (
        <div>
            <Head>
                <title>Digital Transformation | Conversations</title>
            </Head>

            <main>
                <BreadCrumbs stage1="Conversation" stage2="Conversations" />
                <Spacer y={1} />
                <TitleBar
                    title="Conversations"
                    isButton={true}
                    buttonName="Button"
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
                            <Table.Column><Text h5>Topic</Text></Table.Column>
                            <Table.Column><Text h5>Date</Text></Table.Column>
                            <Table.Column><Text h5>Crerated By</Text></Table.Column>
                            <Table.Column><Text h5>Replies</Text></Table.Column>
                            <Table.Column><Text h5>Action</Text></Table.Column>
                        </Table.Header>
                        <Table.Body>
                            {countArr.map((data) => (
                                <Table.Row >
                                    <Table.Cell>Topic 1</Table.Cell>
                                    <Table.Cell>10/12/2022</Table.Cell>
                                    <Table.Cell>Username</Table.Cell>
                                    <Table.Cell>21</Table.Cell>
                                    <Table.Cell>
                                        <Dropdown>
                                            <Dropdown.Trigger>
                                                <MoreHorizIcon />
                                            </Dropdown.Trigger>
                                            <Dropdown.Menu aria-label="Static Actions">
                                                <Dropdown.Item key="Preview"><RemoveRedEyeOutlinedIcon /> &nbsp;&nbsp;Preview</Dropdown.Item>
                                                <Dropdown.Item key="Edit"><DriveFileRenameOutlineOutlinedIcon />&nbsp;&nbsp;&nbsp;Edit</Dropdown.Item>
                                                <Dropdown.Item key="ManageAppointment"><ReplyIcon />&nbsp;&nbsp;&nbsp;Reply</Dropdown.Item>
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
