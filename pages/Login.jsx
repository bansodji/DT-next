import { Card, Spacer, Text, useTheme, Input, Button } from '@nextui-org/react'
import Head from 'next/head'
import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import TelegramIcon from '@mui/icons-material/Telegram';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Image from 'next/image'
import Logo from "/public/assets/images/logo.png"
// import Footer from '../components/Footer';
import { useSession, signIn } from 'next-auth/react'

export default function Login() {
    const { theme } = useTheme()
    const { data: session } = useSession()

    const handleSignIn = () => {
        signIn()
    }

    if (session) {
        return window.location.href = `http://localhost:3000`
    }
    else {
        return (
            <>
                <div className='login-wraper' style={{ backgroundColor: theme.colors.secondaryLight.value }}>

                    <Head>
                        <title>Digital Transformation | Login</title>
                    </Head>

                    <main>
                        <Card className='login-card py-5'>

                            <Card.Body>
                                <center>
                                    {/* <Text h2>Login</Text> */}
                                    {/* <AccountCircleIcon
                                    sx={{ fontSize: 150 }}
                                    color="secondary"
                                /> */}
                                    <Spacer y={1} />
                                    <Image
                                        src={Logo}
                                        alt="Project Manager"
                                        height={50}
                                        blurDataURL="data:..."
                                        placeholder="blur" // Optional blur-up while loading
                                    />
                                    <Spacer y={2} />
                                    <Input
                                        css={{ maxWidth: '300px' }}
                                        fullWidth
                                        type="email"
                                        placeholder="Email"
                                        contentRight={<TelegramIcon sx={{ color: 'rgba(0,0,0,0.55)' }} />}
                                    />
                                    <Spacer y={1} />
                                    <Input.Password
                                        css={{ maxWidth: '300px' }}
                                        fullWidth
                                        placeholder="Password"
                                    />
                                    <Spacer y={1} />
                                    <a>
                                        <Text color="success">Forget Password?</Text>
                                    </a>
                                    <a>Don't have an account?
                                        <Text className='d-inline' color="success"> Sign up here.</Text>
                                    </a>
                                    <Spacer y={1} />
                                    <Button color="secondary" auto css={{ maxWidth: '300px', width: "100%" }}>
                                        Login
                                    </Button>
                                    <Spacer y={1} />
                                    <Button onClick={handleSignIn} color="" auto css={{ maxWidth: '300px', width: "100%" }}>
                                        Sign in with Google
                                    </Button>
                                </center>
                            </Card.Body>
                        </Card>
                    </main>
                    {/* <div className="f-footer">
                    <Footer />
                </div> */}
                </div>
            </>
        )
    }
}
