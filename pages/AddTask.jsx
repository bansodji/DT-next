import { Card, Container, Text, Spacer, Input } from '@nextui-org/react'
import React from 'react'
import Head from 'next/head'
import { Col, Row } from 'react-bootstrap'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import FlagIcon from '@mui/icons-material/Flag';
import { Button } from '@mui/material';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import BreadCrumbs from '../components/BreadCrumbs';
import TitleBar from '../components/TitleBar';
import TextField from '@mui/material/TextField';

export default function AddTask() {
    return (
        <div>
            <Head>
                <title>Digital Transformation | Add Task</title>
            </Head>

            <main>
                <BreadCrumbs stage1="Add Task" stage2="" />
                <Spacer y={1} />
                <TitleBar
                    title="Add Task"
                    isButton={false}
                />
                <Spacer y={1} />
                <Container>
                    <Card>
                        <Card.Body>
                            <Row className='g-3'>
                                <Col md={12}>
                                    <TextField
                                        label="Add Task details here..."
                                        variant='filled'
                                        size='small'
                                        fullWidth
                                        color='secondary'
                                    />
                                </Col>
                                <Col lg={4} md={6}>
                                    <TextField
                                        label="Due Date"
                                        fullWidth
                                        type="date"
                                        size='small'
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        variant='filled'
                                        color='secondary'
                                    />
                                    
                                </Col>
                                <Col lg={4} md={6}>
                                    <FormControl size='small' variant='filled' sx={{ minWidth: 120, width: "100%" }}>
                                        <InputLabel color='secondary' id="">Priority</InputLabel>
                                        <Select
                                            labelId=""
                                            id=""
                                            value=""
                                            color='secondary'
                                        >
                                            <MenuItem value="critical"><FlagIcon color='error' /><Text color='error'>Critical</Text></MenuItem>
                                            <MenuItem value="high"><FlagIcon color='success' /><Text color='success'>High</Text></MenuItem>
                                            <MenuItem value="medium"><FlagIcon color='warning' /><Text color='warning'>Medium</Text></MenuItem>
                                            <MenuItem value="low"><FlagIcon color='primary' /><Text color='primary'>Low</Text></MenuItem>
                                        </Select>
                                    </FormControl>
                                </Col>
                                <Col lg={4} md={12}>
                                    <TextField
                                        label="Notes"
                                        variant='filled'
                                        size='small'
                                        fullWidth
                                        color='secondary'
                                    />
                                </Col>
                                <Col md={12}>
                                    <TextField
                                        label="Tags"
                                        variant='filled'
                                        size='small'
                                        fullWidth
                                        color='secondary'
                                    />
                                </Col>

                                <Col md={6}>
                                    <FormControl size='small' variant='filled' sx={{ minWidth: 120, width: "100%" }}>
                                        <InputLabel color='secondary' id="">Reminder</InputLabel>
                                        <Select
                                            labelId=""
                                            id=""
                                            value=""
                                            color='secondary'
                                        >
                                            <MenuItem value="critical"><Text>Do not repeat</Text></MenuItem>
                                            <MenuItem value="critical"><Text>Daily</Text></MenuItem>
                                            <MenuItem value="critical"><Text>Weekly</Text></MenuItem>
                                            <MenuItem value="critical"><Text>Monthly</Text></MenuItem>
                                        </Select>
                                    </FormControl>
                                </Col>
                                <Col md={6}>
                                    <div className='mt-2'></div>
                                    <Button
                                        variant="outlined"
                                        component="label"
                                        startIcon={<FileUploadIcon />}
                                        fullWidth
                                        color='secondary'
                                    >
                                        Upload File
                                        <input
                                            type="file"
                                            hidden
                                        />
                                    </Button>
                                </Col>
                                <Col lg={12}>
                                    <center className='mt-4'>
                                        <span className='mx-2'>
                                            <Button variant="contained" color='secondary'>Submit</Button>
                                        </span>
                                        <span className='mx-2'>
                                            <Button variant="outlined" color='secondary'>Cancel</Button>
                                        </span>
                                    </center>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Container>
            </main>
        </div >
    )
}
