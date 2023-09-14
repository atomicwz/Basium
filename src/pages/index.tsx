import React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import MainLayout from "@/layout/MainLayout";
import { Flex } from "@chakra-ui/layout";

const Home: NextPage = () => {
    const navigator = useRouter();
    return;
    <MainLayout>
        <Flex direction="column">a</Flex>
    </MainLayout>;
};

export default Home;
