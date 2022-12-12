import { Navbar, Text, Avatar, Dropdown } from "@nextui-org/react";
import Image from 'next/image'
// import Link from 'next/link'
import Head from "next/head";
import Logo from "/public/assets/images/logo.png"
import { useEffect, useState } from "react";
import Link from "next/link";

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
                    {navdata.map((data) => (
                        ("child" in data) ?
                            <Dropdown key={data.key} isBordered>
                                <Navbar.Item>
                                    <Dropdown.Button
                                        auto
                                        light
                                        css={{
                                            px: 0,
                                            dflex: "center",
                                            svg: { pe: "none" },
                                        }}
                                        ripple={false}
                                    >
                                        {data.name}
                                    </Dropdown.Button>
                                </Navbar.Item>


                                <Dropdown.Menu
                                    aria-label="Digital Transformation"
                                    css={{
                                        $$dropdownMenuWidth: "50px",
                                        // $$dropdownItemHeight: "20px",
                                        "& .nextui-dropdown-item": {
                                            py: "$4",
                                            // dropdown item left icon
                                            svg: {
                                                color: "$secondary",
                                                mr: "$4",
                                            },
                                            // dropdown item title
                                            "& .nextui-dropdown-item-content": {
                                                w: "100%",
                                                fontWeight: "$semibold",
                                            },
                                        },
                                    }}
                                >
                                    {data.child.map((item, index) => (
                                        <Dropdown.Item key={index}>
                                            <Link className="" href={`/${data.name}/${item.replace(" ", "")}`}>
                                                <Text>{item}</Text>
                                            </Link>
                                        </Dropdown.Item>
                                    ))}
                                </Dropdown.Menu>

                            </Dropdown> :
                            <Link className="" href={`/${data.href}`}><Text>{data.name}</Text></Link>
                    ))}

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
