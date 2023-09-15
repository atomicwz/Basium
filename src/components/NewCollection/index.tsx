import React from "react";
import { Flex, Grid, Heading, Text } from "@chakra-ui/react";
import CardProduct from "../CardProduct";
import { novaColecao } from "@/resources/products/novaColecao";

const NewCollection: React.FC = () => {
    return (
        <Flex justifyContent="space-around" my={10} direction="column">
            <Heading textAlign="center">Nova Coleção</Heading>
            <Text mt={5} textAlign="center">
                Modal Casual
            </Text>
            <Grid
                w="85%"
                mx="auto"
                gridTemplateColumns={{
                    base: "1fr",
                    sm: "repeat(2,1fr)",
                    md: "repeat(3,1fr)",
                    lg: "repeat(4,1fr)",
                }}
                gap={10}
                mt={14}
            >
                {novaColecao.map((item, key) => (
                    <CardProduct product={item} key={key} />
                ))}
            </Grid>
        </Flex>
    );
};

export default NewCollection;
