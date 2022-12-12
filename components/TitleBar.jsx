import React from 'react'
import { Container, useTheme, Button, Text, Link, Tooltip } from '@nextui-org/react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddBoxIcon from '@mui/icons-material/AddBox';
import IconButton from '@mui/material/IconButton';

export default function TitleBar(props) {
    const { theme } = useTheme()
    return (
        <Container>
            <div className='d-flex justify-content-between align-items-center py-2 px-4 f-rounded-top' style={{ backgroundColor: theme.colors.secondaryLight.value }}>
                <Text h4 css={{ textTransform: 'uppercase' }} color='fff'>{props.title}</Text>
                {
                    (props.isButton) ? <Link href={props.href}>
                        <Tooltip content={props.buttonName}>
                            <IconButton color="secondary" aria-label="Create Project" component="label">
                                <AddBoxIcon fontSize="large" />
                            </IconButton>
                        </Tooltip>
                    </Link> : ""
                }
            </div>

        </Container>
    )
}