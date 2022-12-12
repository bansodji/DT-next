import React from 'react'
import Head from 'next/head'
import BreadCrumbs from '../components/BreadCrumbs'
import TitleBar from '../components/TitleBar'
import { Container, Spacer} from '@nextui-org/react'

export default function _samplePage() {
    return (
        <div>
            <Head>
                <title>Digital Transformation | {/*Page Title*/}</title>
            </Head>

            <main>
                <BreadCrumbs stage1="stage1" stage2="stage2" />
                <Spacer y={1} />
                <TitleBar
                    title="Title"
                    isButton={true}
                    buttonName="Button"
                />
                <Spacer y={1} />
                
                <Container>
                    {/* write your code here */}
                </Container>
            </main>
        </div>
    )
}
