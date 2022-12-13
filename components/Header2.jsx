import { Navbar, Text, Avatar, Dropdown } from "@nextui-org/react";
import Image from 'next/image'
// import Link from 'next/link'
import Head from "next/head";
import Logo from "/public/assets/images/logo.png"
import { useEffect, useState } from "react";
import Link from "next/link";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export default function Header() {
    const [navdata, setnavdata] = useState([])

    useEffect(() => {
        fetchNavData()
    }, [])

    const collapseItems = [
        "Profile",
        "Dashboard",
        "Activity",
        "Analytics",
        "System",
        "Deployments",
        "My Settings",
        "Team Settings",
        "Help & Feedback",
        "Log Out",
    ];

    const fetchNavData = async () => {
        let data = await fetch(`/rendering_objects/navigation.json`)
        data.json().then((res) => {
            setnavdata(res)
        })
    }

    const MenuDropDown = (props) => {
        let data = props.data;
        return (
            <Dropdown>
                <Dropdown.Button light css={{
                    px: 0,
                    dflex: "center",
                    svg: { pe: "none" },
                }}>
                    {data.name}
                </Dropdown.Button>
                <Dropdown.Menu css={{ overflow: 'hidden' }}>
                    {Object.keys(data.child).map((item, i) => {
                        // if (data.child[item].length == 0) {
                        return (
                            <Dropdown.Item key={i}>
                                <Link href={`/${data.name}/${item.replace(" ","")}`}>{item}</Link>
                            </Dropdown.Item>
                        )
                        // }
                        // else {
                        //     return (
                        //         <Dropdown.Item key={i}>
                        //             <div class="dropdown">
                        //                 <Text class="dropbtn">Dropdown <ArrowRightIcon/></Text>
                        //                 <div class="dropdown-content">
                        //                     <a href="/">Link 1</a>
                        //                     <a href="#">Link 2</a>
                        //                     <a href="#">Link 3</a>
                        //                 </div>
                        //             </div>
                        //         </Dropdown.Item>

                        //     )
                        // }
                    })}
                </Dropdown.Menu>
            </Dropdown>
        )
    }

    return (
        <>
            <Head>
                <link rel="icon" href="/assets/images/favicon.png" />
            </Head>

            <Navbar isBordered variant="sticky">
                <Navbar.Toggle showIn="xs" />
                <Navbar.Brand
                    css={{
                        "@xs": {
                            w: "12%",
                        },
                    }}
                >
                    <Image
                        src={Logo}
                        alt="Project Manager"
                        height={40}
                        blurDataURL="data:..."
                        placeholder="blur" // Optional blur-up while loading
                    />
                </Navbar.Brand>
                <Navbar.Content
                    activeColor="secondary"
                    hideIn="xs"
                    variant="default"
                >
                    {navdata.map((data) => {

                        if ('child' in data) {
                            return <MenuDropDown data={data} />
                        }
                        else {
                            return (
                                <Link className="" href={`/${data.href}`}><Text>{data.name}</Text></Link>
                            )
                        }

                    })}

                </Navbar.Content>
                <Navbar.Content
                    css={{
                        "@xs": {
                            w: "12%",
                            jc: "flex-end",
                        },
                    }}
                >
                    <Dropdown placement="bottom-right">
                        <Navbar.Item>
                            <Dropdown.Trigger>
                                <Avatar
                                    bordered
                                    as="button"
                                    color="secondary"
                                    size="md"
                                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                                />
                            </Dropdown.Trigger>
                        </Navbar.Item>
                        <Dropdown.Menu
                            aria-label="User menu actions"
                            color="secondary"
                            onAction={(actionKey) => console.log({ actionKey })}
                        >
                            <Dropdown.Item key="profile" css={{ height: "$18" }}>
                                <Text b color="inherit" css={{ d: "flex" }}>
                                    Signed in as
                                </Text>
                                <Text b color="inherit" css={{ d: "flex" }}>
                                    zoey@example.com
                                </Text>
                            </Dropdown.Item>
                            <Dropdown.Item key="settings" withDivider>
                                My Settings
                            </Dropdown.Item>
                            <Dropdown.Item key="team_settings">Team Settings</Dropdown.Item>
                            <Dropdown.Item key="analytics" withDivider>
                                Analytics
                            </Dropdown.Item>
                            <Dropdown.Item key="system">System</Dropdown.Item>
                            <Dropdown.Item key="configurations">Configurations</Dropdown.Item>
                            <Dropdown.Item key="help_and_feedback" withDivider>
                                Help & Feedback
                            </Dropdown.Item>
                            <Dropdown.Item key="logout" withDivider color="error">
                                Log Out
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Navbar.Content>
                <Navbar.Collapse >
                    {collapseItems.map((item, index) => (
                        <Navbar.CollapseItem
                            key={item}
                            activeColor="secondary"
                            css={{
                                color: index === collapseItems.length - 1 ? "$error" : "",
                            }}
                            isActive={index === 2}
                        >
                            <Link
                                color="inherit"
                                css={{
                                    minWidth: "100%",
                                }}
                                href="#"
                            >
                                {item}
                            </Link>
                        </Navbar.CollapseItem>
                    ))}
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}


const app = () => {


}