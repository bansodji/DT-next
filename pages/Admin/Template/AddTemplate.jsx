import React from 'react'
import Head from 'next/head'
import BreadCrumbs from '../../../components/BreadCrumbs'
import TitleBar from '../../../components/TitleBar'
import { Container, Spacer} from '@nextui-org/react'
import AddTemplateSteper from '../../../components/AddTemplateSteper'

export default function AddTemplate() {
    return (
        <div>
            <Head>
                <title>Digital Transformation | Add Template</title>
            </Head>

            <main>
                <BreadCrumbs stage1="Admin" stage2="Template" stage3="Add Template" />
                <Spacer y={1} />
                <TitleBar
                    title="Add Template"
                    isButton={false}
                />
                <Spacer y={1} />
                
                <Container>
                    <AddTemplateSteper/>
                </Container>
            </main>
        </div>
    )
}
