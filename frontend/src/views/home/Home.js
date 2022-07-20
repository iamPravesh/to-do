import {
    Flex,
    Heading
} from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

import StatCard from '../../components/homeComponents/StatCard'

const Home = () => {
    const statData = [{
        to: "daily",
        title: "Daily to-do"
    },
    {
        to: "weekly",
        title: "Weekly to-do"
    }]
    return (
        <Flex
            width={"100%"}
            height={"100%"}
            direction={'column'}
            justifyContent={"flex-start"}
            alignItems={'center'}
        >
            <Heading>Welcome, Pravesh</Heading>
            <Flex
                width={"100%"}
                direction={'row'}
                justifyContent={'center'}
                my={'2%'}
                gap={10}
            >
                {
                    statData.map((stat, index) => {
                        return (
                            <StatCard key={index} title={stat.title} to={stat.to} />
                        )
                    })
                }
            </Flex>
        </Flex>
    )
}

export default Home