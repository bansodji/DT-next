import React from 'react'
import Head from 'next/head'
import BreadCrumbs from '../../components/BreadCrumbs'
import { Card, Container, Spacer, Input, Tooltip, Text, useTheme, Modal, Button } from '@nextui-org/react'
import { Col, Row } from 'react-bootstrap'
import SearchIcon from '@mui/icons-material/Search';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { Link } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility';
import TextField from '@mui/material/TextField';

const Industries = ["All", "IT", "Textile & Apparel", "Retail & E-commerce", "Automobile", "Telecom"]


export default function ManageTemplates() {
    return (
        <div>
            <Head>
                <title>Digital Transformation | Manage Templates</title>
            </Head>

            <main>
                <BreadCrumbs stage1="Template" stage2="Manage Templates" />
                <Spacer y={1} />
                <ManageTemplateTitle />
                <Spacer y={1} />

                <Container>
                    <Row>
                        <Col lg={3}>
                            <CategoryItem />
                        </Col>
                        <Col lg={9}>
                            <TileItem />
                        </Col>
                    </Row>
                </Container>
            </main>
        </div>
    )
}

const ManageTemplateTitle = () => {
    const { theme } = useTheme()
    
    return (
        <Container>
            <div className='d-flex justify-content-between align-items-center py-2 px-4 f-rounded-top' style={{ backgroundColor: theme.colors.secondaryLight.value }}>
                <Text h4 css={{ textTransform: 'uppercase' }} color='fff'>Manage Templates</Text>
                <div>
                    <Link href="/Template/ViewTemplate">
                        <Tooltip content={"View Template"}>
                            <IconButton color="secondary" aria-label="Create Project" component="label">
                                <VisibilityIcon fontSize="large" />
                            </IconButton>
                        </Tooltip>
                    </Link>
                    <Link href="/Template/AddTemplate">
                        <Tooltip content={"Create Template"}>
                            <IconButton color="secondary" aria-label="Create Project" component="label">
                                <AddBoxIcon fontSize="large" />
                            </IconButton>
                        </Tooltip>
                    </Link>

                </div>
            </div>           
        </Container>
    )
}

const CategoryItem = () => {
    return (
        <Card>
            <Card.Body>
                <Input
                    placeholder="Search..."
                    type="search"
                    contentRight={
                        <SearchIcon sx={{ color: 'rgba(0,0,0,0.55)' }} />
                    }
                />
                <Spacer y={1} />
                <Card.Divider />
                <List>
                    {Industries.map((item) => (
                        <ListItem disablePadding>
                            <ListItemButton component="a" href="#">
                                <ListItemText primary={item} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>

            </Card.Body>
        </Card>
    )
}

const TileItem = () => {
    return (
        <Row className='g-4'>
            <Tile />
            <Tile />
            <Tile />
            <Tile />
            <Tile />
            <Tile />
            <Tile />
            <Tile />
            <Tile />
        </Row>
    )
}

const Tile = () => {
    return (
        <Col md={4}>
            <Card css={{ mw: "330px" }}>
                <Card.Header>
                    <div className='size-100 d-flex justify-content-between align-items-center'>
                        <Text b>Textile & Apparel 1</Text>
                        <Link href="/Projects/ProjectWorkflow">
                            <IconButton color="primary" aria-label="Create Project" component="label">
                                <AddBoxIcon fontSize="large" />
                            </IconButton>
                        </Link>
                    </div>
                </Card.Header>
                <Card.Divider />
                <Card.Body css={{ py: "$10" }}>
                    <Text>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi id labore quidem esse provident.
                    </Text>
                </Card.Body>
                <Card.Divider />
                <Card.Footer>
                    <Row justify="flex-end">

                        <div><Text className='d-inline' h5>Category: </Text>Textile & Apparel</div>

                        <div><Text className='d-inline' h5>Updated: </Text>November 13, 2021</div>

                    </Row>
                </Card.Footer>
            </Card>
        </Col>

    )
}
