import React, { useState } from 'react'
import Head from 'next/head'
import BreadCrumbs from '../../components/BreadCrumbs'
import TitleBar from '../../components/TitleBar'
import { Card, Container, Spacer, Text, Textarea } from '@nextui-org/react'
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { Col, Row } from 'react-bootstrap'
import { Button } from '@mui/material'
import FileUploadIcon from '@mui/icons-material/FileUpload';

export default function AddConversation() {
    const [conversatioType, setConversationType] = useState()

    const Form = (props) => {
        switch (props.conversationType) {
            case 'Individual':
                return <Form1 />
                break;
            case 'Group':
                return <Form2 />
                break;
        }
    }

    const Form1 = () => {
        return (
            <>
                <FormControl size='small' variant='filled' sx={{ minWidth: 120, width: "100%" }}>
                    <InputLabel color='secondary' id="">Select a user</InputLabel>
                    <Select
                        labelId=""
                        id=""
                        value=""
                        fullWidth
                        color='secondary'
                    >
                        <MenuItem value="username"><Text>Username</Text></MenuItem>
                    </Select>
                </FormControl>
                <Spacer y={1} />

                <TextField
                    label="Conversation Topic"
                    fullWidth
                    size='small'
                    variant='filled'
                    color='secondary'
                />
                <Spacer y={1} />

                <Textarea
                    placeholder="Description..."
                    fullWidth
                    color='secondary'
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
            </>
        )
    }

    const Form2 = () => {
        return (
            <>
                <TextField
                    label="Conversation Topic"
                    fullWidth
                    size='small'
                    variant='filled'
                    color='secondary'
                />
                <Spacer y={1} />

                <Textarea
                    placeholder="Description..."
                    fullWidth
                    color='secondary'
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
            </>
        )
    }

    return (
        <div>
            <Head>
                <title>Digital Transformation | Add Conversation</title>
            </Head>

            <main>
                <BreadCrumbs stage1="Conversation" stage2="New Conversation" />
                <Spacer y={1} />
                <TitleBar
                    title="New Conversation"
                    isButton={false}
                />
                <Spacer y={1} />

                <Container>
                    <Card>
                        <Card.Body>
                            <div className='px-4'>
                                <Col lg={6}>
                                    <form>
                                        <FormControl>
                                            <RadioGroup
                                                row
                                                aria-labelledby="demo-radio-buttons-group-label"
                                                defaultValue="Individual"
                                                name="radio-buttons-group"
                                            >
                                                <FormControlLabel value="Individual" control={<Radio color='secondary' />} label="Individual" />
                                                <FormControlLabel value="Group" control={<Radio color='secondary' />} label="Group" />
                                            </RadioGroup>
                                        </FormControl>
                                        <Spacer y={1} />
                                        <Form conversationType="Individual" />
                                        <Spacer y={1} />
                                        <div className='mt-4'>
                                            <span className='mx-2'>
                                                <Button variant="contained" color='secondary'>Send Message</Button>
                                            </span>
                                            <span className='mx-2'>
                                                <Button variant="outlined" color='secondary'>Cancel</Button>
                                            </span>
                                        </div>
                                    </form>
                                </Col>
                            </div>
                        </Card.Body>
                    </Card>
                </Container>
            </main>
        </div >
    )
}
