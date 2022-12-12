import React from 'react'
import { Row, Col } from 'react-bootstrap';
import TextField from '@mui/material/TextField';

const Form1 = () => {
    return (
        <Row className='gy-4'>
            <Col lg={4} md={6}>
                <TextField
                    label="Project Number"
                    variant='filled'
                    size='small'
                    fullWidth
                    color='secondary'
                />
            </Col>
            <Col lg={4} md={6}>
                <TextField
                    label="Project Name"
                    variant='filled'
                    size='small'
                    fullWidth
                    color='secondary'
                />
            </Col>
            <Col lg={4} md={6}>
                <TextField
                    label="Sales Incharge"
                    variant='filled'
                    size='small'
                    fullWidth
                    color='secondary'
                />
            </Col>
            <Col lg={4} md={6}>
                <TextField
                    label="Site Location"
                    variant='filled'
                    size='small'
                    fullWidth
                    color='secondary'
                />
            </Col>
            <Col lg={4} md={6}>
                <TextField
                    label="Industry Type"
                    variant='filled'
                    size='small'
                    fullWidth
                    color='secondary'
                />
            </Col>
            <Col lg={4} md={6}>
                <TextField
                    label="Start Date"
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
                <TextField
                    label="End Date"
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
                <TextField
                    label="Followup Date"
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
                <TextField
                    label="Budget"
                    variant='filled'
                    size='small'
                    fullWidth
                    color='secondary'
                />
            </Col>
            <Col lg={4} md={6}>
                <TextField
                    label="PMC"
                    variant='filled'
                    size='small'
                    fullWidth
                    color='secondary'
                />
            </Col>
            <Col lg={4} md={6}>
                <TextField
                    label="Remarks"
                    variant='filled'
                    size='small'
                    fullWidth
                    color='secondary'
                />
            </Col>
        </Row>
    )
}

const Form2 = () => {
    return (
        <Row className='gy-4'>
            <Col lg={4} md={6}>
                <TextField
                    label="Name"
                    variant='filled'
                    size='small'
                    fullWidth
                    color='secondary'
                />
            </Col>
            <Col lg={4} md={6}>
                <TextField
                    label="PIC"
                    variant='filled'
                    size='small'
                    fullWidth
                    color='secondary'
                />
            </Col>
            <Col lg={4} md={6}>
                <TextField
                    label="Sales Incharge"
                    variant='filled'
                    size='small'
                    fullWidth
                    color='secondary'
                />
            </Col>
            <Col lg={4} md={6}>
                <TextField
                    label="PIC Contact"
                    variant='filled'
                    size='small'
                    fullWidth
                    color='secondary'
                />
            </Col>
            <Col lg={4} md={6}>
                <TextField
                    label="PIC Email"
                    variant='filled'
                    size='small'
                    fullWidth
                    color='secondary'
                />
            </Col>
        </Row>
    )
}

const Form3 = () => {
    return (
        <Row className='gy-4'>
            <Col lg={4} md={6}>
                <TextField
                    label="Package Selection"
                    variant='filled'
                    size='small'
                    fullWidth
                    color='secondary'
                />
            </Col>
            <Col lg={4} md={6}>
                <TextField
                    label="Number"
                    variant='filled'
                    size='small'
                    fullWidth
                    color='secondary'
                />
            </Col>
            <Col lg={4} md={6}>
                <TextField
                    label="Start Date"
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
                <TextField
                    label="End Date"
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
                <TextField
                    label="Followup Date"
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
                <TextField
                    label="Status"
                    variant='filled'
                    size='small'
                    fullWidth
                    color='secondary'
                />
            </Col>
            <Col lg={4} md={6}>
                <TextField
                    label="Remarks"
                    variant='filled'
                    size='small'
                    fullWidth
                    color='secondary'
                />
            </Col>
        </Row>
    )
}

export { Form1, Form2, Form3 }