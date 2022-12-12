import React from 'react'
import Head from 'next/head'
import BreadCrumbs from '../../components/BreadCrumbs'
import TitleBar from '../../components/TitleBar'
import { Card, Container, Spacer, Text } from '@nextui-org/react'
import TextField from '@mui/material/TextField';
import { Col, Row } from 'react-bootstrap'
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FlagIcon from '@mui/icons-material/Flag';
import { Button } from '@mui/material';
import FileUploadIcon from '@mui/icons-material/FileUpload';

export default function CreateProjects() {
    return (
        <div>
            <Head>
                <title>Digital Transformation | Create Projects</title>
            </Head>
            <main>
                <BreadCrumbs stage1="Projects" stage2="Create Projects" />
                <Spacer y={1} />
                <TitleBar
                    title="Create Projects"
                    isButton={false}
                />
                <Spacer y={1} />
                <Container>
                    <Card>
                        <Card.Body>
                            <Row className='g-4'>
                                <Col md={4}>
                                    <FormControl size='small' variant="filled" sx={{ minWidth: 120, width: "100%" }}>
                                        <InputLabel color='secondary' id="">Select Template</InputLabel>
                                        <Select
                                            labelId=""
                                            id=""
                                            value=""
                                            color='secondary'
                                        >
                                            <MenuItem value="1">Tender Managenment</MenuItem>
                                            <MenuItem value="2">Important Documents</MenuItem>
                                            <MenuItem value="3">Project Management</MenuItem>
                                            <MenuItem value="4">Induction Costing</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Col>
                                <Col md={4}>
                                    <TextField
                                        label="Project Name"
                                        variant="filled"
                                        size='small'
                                        fullWidth
                                        color='secondary'
                                    />
                                </Col>
                                <Col md={4}>
                                    <TextField
                                        label="Project Start"
                                        variant="filled"
                                        size='small'
                                        fullWidth
                                        type="date"
                                        color='secondary'
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </Col>
                                <Col md={4}>
                                    <TextField
                                        label="Project End"
                                        variant="filled"
                                        size='small'
                                        fullWidth
                                        type="date"
                                        color='secondary'
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </Col>
                                <Col md={4}>
                                    <FormControl size='small' variant="filled" sx={{ minWidth: 120, width: "100%" }}>
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
                                <Col md={4}>
                                    <TextField
                                        label="Notes"
                                        variant="filled"
                                        size='small'
                                        fullWidth
                                        color='secondary'
                                    />
                                </Col>
                                <Col md={12}>
                                    <TextField
                                        label="Tags"
                                        variant="filled"
                                        size='small'
                                        fullWidth
                                        color='secondary'
                                    />
                                </Col>
                                <Col lg={12}>
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
        </div>
    )
}
