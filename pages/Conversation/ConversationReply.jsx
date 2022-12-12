import React from 'react'
import Head from 'next/head'
import BreadCrumbs from '../../components/BreadCrumbs'
import TitleBar from '../../components/TitleBar'
import { Card, Container, Spacer, Text, Tooltip, Textarea } from '@nextui-org/react'
import { Row, Col } from 'react-bootstrap'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import { Button } from '@mui/material'
import FileUploadIcon from '@mui/icons-material/FileUpload';

export default function ConversationReply() {

    const Replies = () => {
        return (
            <>
                <Spacer y={2} />
                <Col lg={7}>
                    <div className='d-flex'>
                        <div className='me-5'>
                            <Text h4>User Name</Text>
                            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sapiente quae explicabo ipsam illum, esse cumque rem expedita ab sit?</Text>
                            <div className='mt-2 text-secondary'>24 Oct, 2021</div>
                        </div>
                        <div className='d-flex'>
                            <a className='me-3'>
                                <Tooltip content={"Delete"}>
                                    <DeleteOutlineIcon color="error" />
                                </Tooltip>
                            </a>
                            <a>
                                <Tooltip content={"Edit"}>
                                    <DriveFileRenameOutlineOutlinedIcon color="primary" />
                                </Tooltip>
                            </a>
                        </div>
                    </div>
                </Col>
            </>
        )
    }

    const Reply = () => {
        return (
            <>
                <Col lg={7}>
                    <form>
                        <Textarea
                            placeholder="Reply..."
                            css={{ width: '100%' }}
                        />
                        <Spacer y={1} />
                        <Button
                            variant="outlined"
                            component="label"
                            startIcon={<FileUploadIcon />}
                            fullWidth
                            color='secondary'
                        >
                            Attach a File
                            <input
                                type="file"
                                hidden
                            />
                        </Button>
                        <Spacer y={1} />
                        <span className='me-2'>
                            <Button variant="contained" color='secondary'>Reply</Button>
                        </span>
                        <span className='mx-2'>
                            <Button variant="outlined" color='secondary'>Cancel</Button>
                        </span>
                    </form>
                </Col>
            </>
        )
    }

    return (
        <div>
            <Head>
                <title>Digital Transformation | Conversation Reply</title>
            </Head>

            <main>
                <BreadCrumbs stage1="Conversation" stage2="Conversation Reply" />
                <Spacer y={1} />
                <TitleBar
                    title="Conversation Reply"
                    isButton={false}
                />
                <Spacer y={1} />

                <Container>
                    <Card>
                        <Card.Body>
                            <div className='p-4'>
                                <Text h2>Topic</Text>
                                <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus ducimus doloremque beatae qui. Mollitia tempore vel odio quos placeat sed nesciunt corporis? Magni rerum beatae eum! Numquam fuga ut optio repellat sapiente odit doloremque fugiat nesciunt aliquam. Maxime perspiciatis nemo aliquid et optio sequi recusandae fugiat facilis ipsa fugit est dolorem ratione, exercitationem laboriosam quis cumque ullam inventore magnam sit.</Text>
                                <Spacer y={1} />
                                <Replies />
                                <Replies />
                                <Replies />
                                <Replies />
                                <Spacer y={2} />
                                <Reply />
                            </div>
                        </Card.Body>
                    </Card>
                </Container>
            </main>
        </div>
    )
}
