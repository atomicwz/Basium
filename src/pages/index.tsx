import React from "react";
import { NextPage } from "next";
import { Flex } from "@chakra-ui/react";
import MainLayout from "@/layout/MainLayout";

const Home: NextPage = () => {
    return (
        <MainLayout navbar={{ colorTheming: "darkCyan", hasNavbar: true }}>
            <Flex
                h="100vh"
                bgColor="secondary.900"
                bgAttachment="fixed"
                flexDirection="column"
            >
                A
            </Flex>
        </MainLayout>
    );
};

export default Home;
