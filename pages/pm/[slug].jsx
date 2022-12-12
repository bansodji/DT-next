import { useRouter } from 'next/router'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import BreadCrumbs from '../../components/BreadCrumbs'
import TitleBar from '../../components/TitleBar'
import { Collapse, Input, Grid, Button, Container, Spacer, Table, Dropdown, Text, Tooltip, IconButton } from '@nextui-org/react'
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


const Slug = () => {
    const router = useRouter()
    let slug;
    const [FormDescription, setFormDescription] = useState("")
    const [PageDescription, setPageDescription] = useState("")
    const [db, setDb] = useState("")

    useEffect(() => {
        if (!router.isReady) return;
        slug = router.query.slug
        fetchData(slug)
    }, [router.isReady])

    const fetchData = async (slug) => {
        let data = await fetch(`/rendering_objects/${slug}.json`)
        data.json().then((res) => {
            setFormDescription(res.FormDescription)
            setPageDescription(res.PageDescription)
            setDb(res.Database)
        })

    }
    if (router.isReady && PageDescription != undefined) {
        return (
            <>
                <Head>
                    <title>Project Manager | {PageDescription.title && PageDescription.title}</title>
                </Head>
                <main>
                    <BreadCrumbs stage1={PageDescription.parent} stage2={PageDescription.title} />
                    <Spacer y={1} />
                    <TitleBar
                        title={PageDescription && PageDescription.title}
                        isButton={PageDescription && PageDescription.isButton}
                        buttonName={PageDescription && PageDescription.buttonName}
                    />
                    <Spacer y={1} />
                    <Container>
                        {
                            (PageDescription.type == "create")
                                ? <CreatePage form={FormDescription && FormDescription}
                                />
                                : <ViewPage form={FormDescription && FormDescription} db={db && db} />
                        }

                    </Container>
                </main>
            </>
        )
    }


}

const CreatePage = (props) => {
    const form = props.form
    const formKeys = Object.keys(form)

    return (
        <form>
            <Collapse.Group shadow>
                {formKeys.map((item, index) => (
                    <Collapse key={index + 1} title={item} expanded>
                        <Grid.Container gap={2}>
                            {Object.keys(form[item]).map(input => (
                                <Grid md={4}>
                                    <Input
                                        fullWidth={true}
                                        bordered
                                        label={(form[item][input]['required'] == true) ? input + " *" : input}
                                        placeholder={input}
                                        color="secondary"
                                        name={form[item][input]['name']}
                                        type={form[item][input]['type']}
                                        id={form[item][input]['id']}
                                        readOnly={form[item][input]['readonly']}
                                        required={form[item][input]['required']}
                                    />
                                </Grid>
                            ))}
                        </Grid.Container>
                    </Collapse>
                ))}
            </Collapse.Group>
            <Spacer y={1} />
            <center className="d-flex justify-content-center">
                <Button size="sm" auto color="secondary" rounded>
                    Submit
                </Button>&nbsp;
                <Button size="sm" auto color="secondary" rounded flat>
                    Clear All
                </Button>&nbsp;
                <Button size="sm" auto color="primary" rounded flat>
                    Cancel
                </Button>
            </center>
        </form>
    )
}

function ViewPage(props) {
    const form = props.form
    const ReadData = async () => {
        let tbody = await fetch(`http://localhost:3000/api/read_data?name=${props.db}`)
        tbody.json().then((res) => {
            // console.log(res)
            setTbodyData(res)
        })
    }
    const [tbodyData, setTbodyData] = useState()
    if (props.db != "") {
        ReadData()
    }
    if (form.length > 0 && tbodyData != undefined) {
        return (
            <div>
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
                        {props.form.map((data, index) => (
                            <Table.Column key={index + 1}><Text h5>{data}</Text></Table.Column>
                        ))}
                    </Table.Header>
                    <Table.Body>
                        {tbodyData.map((data, index) => (
                            <Table.Row key={index}>
                                {Object.keys(data).map((item) => (
                                    <Table.Cell>{data[item]}</Table.Cell>
                                ))}
                                {/* <Table.Cell>
                                    <span className='mx-2'>
                                        <Tooltip content="Preview">
                                            <RemoveRedEyeOutlinedIcon color="success" />
                                        </Tooltip>
                                    </span>
                                    <span className='mx-2'>
                                        <Tooltip content="Edit">
                                            <DriveFileRenameOutlineOutlinedIcon color="primary" />
                                        </Tooltip>
                                    </span>
                                    <span className='mx-2'>
                                        <Tooltip content="Delete">
                                            <DeleteOutlineIcon color="error" />
                                        </Tooltip>
                                    </span>

                                </Table.Cell> */}
                                <Table.Cell>
                                    <Dropdown>
                                        <Dropdown.Trigger>
                                            <MoreHorizIcon />
                                        </Dropdown.Trigger>
                                        <Dropdown.Menu aria-label="Static Actions">
                                            <Dropdown.Item key="Preview"><RemoveRedEyeOutlinedIcon /> &nbsp;&nbsp;Preview</Dropdown.Item>
                                            <Dropdown.Item key="Edit"><DriveFileRenameOutlineOutlinedIcon />&nbsp;&nbsp;&nbsp;Edit</Dropdown.Item>
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
            </div>
        );
    }
}

export default Slug