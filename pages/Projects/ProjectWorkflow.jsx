import React from 'react'
import Head from 'next/head'
import BreadCrumbs from '../../components/BreadCrumbs'
import TitleBar from '../../components/TitleBar'
import { Container, Spacer} from '@nextui-org/react'
import ProjectWorkflowSteper from '../../components/ProjectWorkflowSteper'

export default function ProjectWorkflow() {
    return (
        <div>
            <Head>
                <title>Digital Transformation | Project Workflow</title>
            </Head>

            <main>
                <BreadCrumbs stage1="Project" stage2="Project Workflow" />
                <Spacer y={1} />
                <TitleBar
                    title="Project Workflow"
                    isButton={false}
                />
                <Spacer y={1} />
                
                <Container>
                    <ProjectWorkflowSteper/>
                </Container>
            </main>
        </div>
    )
}
