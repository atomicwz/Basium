import React from "react";
import { NextPage } from "next";
import { Flex } from "@chakra-ui/react";
import MainLayout from "@/layout/MainLayout";
import HomeCarousel from "@/components/HomeCarousel";

const Home: NextPage = () => {
    return (
        <MainLayout navbar={{ colorTheming: "darkCyan", hasNavbar: true }}>
            <Flex
                bgColor="secondary.900"
                bgPosition="cover"
                flexDirection="column"
            >
                <HomeCarousel />
            </Flex>
        </MainLayout>
    );
};

export default Home;
