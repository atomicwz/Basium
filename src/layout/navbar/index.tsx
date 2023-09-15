import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { BsHandbag } from "react-icons/bs";
import { useRouter } from "next/router";

interface IProps {
    colorTheming?: "ligthPink" | "darkCyan";
}

const Navbar: React.FC<IProps> = ({ colorTheming }) => {
    const router = useRouter();
    return (
        <Flex
            position="fixed"
            top={0}
            left={0}
            h={50}
            w="100%"
            zIndex={1000}
            alignItems="center"
            bg={colorTheming === "darkCyan" ? "secondary.900" : "primary.500"}
            py={10}
            boxShadow="md"
        >
            <Flex
                w="80%"
                justifyContent="space-between"
                alignItems="center"
                mx="auto"
            >
                <Image src="/img/marca_cabecalho.png" alt="Logo" w={32} />
                <Flex gap={10} alignItems="center">
                    <Text
                        cursor="pointer"
                        _hover={{ color: "primary.500" }}
                        fontWeight={600}
                        onClick={() => router.push("/")}
                    >
                        Início
                    </Text>
                    <Text
                        cursor="pointer"
                        _hover={{ color: "primary.500" }}
                        fontWeight={600}
                        onClick={() => router.push("/feminino")}
                    >
                        Feminino
                    </Text>
                    <Text
                        cursor="pointer"
                        _hover={{ color: "primary.500" }}
                        fontWeight={600}
                        onClick={() => router.push("/allProducts")}
                    >
                        Todos os produtos
                    </Text>
                    <Text
                        cursor="pointer"
                        _hover={{ color: "primary.500" }}
                        fontWeight={600}
                        onClick={() => router.push("/tip")}
                    >
                        Dicas
                    </Text>
                    <Text
                        cursor="pointer"
                        _hover={{ color: "primary.500" }}
                        fontWeight={600}
                        onClick={() => router.push("/about")}
                    >
                        Sobre
                    </Text>
                    <Text
                        cursor="pointer"
                        _hover={{ color: "primary.500" }}
                        fontWeight={600}
                        onClick={() => router.push("/contact")}
                    >
                        Contato
                    </Text>
                    <Box cursor="pointer" onClick={() => router.push("/cart")}>
                        <BsHandbag color="white" />
                    </Box>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Navbar;
