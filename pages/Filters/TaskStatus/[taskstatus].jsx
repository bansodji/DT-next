import { useRouter } from 'next/router'
import Head from 'next/head'
import BreadCrumbs from '../../../components/BreadCrumbs'
import TitleBar from '../../../components/TitleBar'
import { Container, Spacer, Table, Dropdown, Text } from '@nextui-org/react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import AssignmentIcon from '@mui/icons-material/Assignment';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

const countArr = [1, 2, 3, 4, 5, 6]

const TaskStatus = () => {
    const router = useRouter()
    const taskstatus = router.query.taskstatus

    return (
        <div>
            <Head>
                <title>Digital Transformation | Task Status</title>
            </Head>

            <main>
                <BreadCrumbs stage1="Filter" stage2="Task Status" stage3={taskstatus} />
                <Spacer y={1} />
                <TitleBar
                    title="Task Status"
                    isButton={false}
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
                            <Table.Column><Text h5>#</Text></Table.Column>
                            <Table.Column><Text h5>Category</Text></Table.Column>
                            <Table.Column><Text h5>Task Details</Text></Table.Column>
                            <Table.Column><Text h5>Due Date</Text></Table.Column>
                            <Table.Column><Text h5>Status</Text></Table.Column>
                            <Table.Column><Text h5>Priority</Text></Table.Column>
                            <Table.Column><Text h5>Created On</Text></Table.Column>
                            <Table.Column><Text h5>Actions</Text></Table.Column>
                        </Table.Header>
                        <Table.Body>
                            {countArr.map((data) => (
                                <Table.Row >
                                    <Table.Cell>123</Table.Cell>
                                    <Table.Cell>Oil and Gas project</Table.Cell>
                                    <Table.Cell>Details</Table.Cell>
                                    <Table.Cell>12/12/2022</Table.Cell>
                                    <Table.Cell>{taskstatus}</Table.Cell>
                                    <Table.Cell>High</Table.Cell>
                                    <Table.Cell>12/12/2022</Table.Cell>
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

export default TaskStatus