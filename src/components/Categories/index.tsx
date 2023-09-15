import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

const Categories: React.FC = () => {
    return (
        <Flex justifyContent="space-around" my={10} gap={5} direction="column">
            <Flex justifyContent="space-between" mx="auto" w={"90%"}>
                <Flex
                    w="30%"
                    h={330}
                    bg="url('img/banner/imagem_livros.png')"
                    direction="column"
                    justifyContent="center"
                    bgSize="cover"
                    bgPosition="center"
                    p={5}
                >
                    <Text fontWeight={600} fontSize={42}>
                        Livros
                    </Text>
                    <Text fontWeight={600}>
                        Amplie sua visão de mundo, com mais conhecimento.
                    </Text>
                    <Box
                        bg="secondary.800"
                        p={3}
                        cursor="pointer"
                        _hover={{
                            bg: "secondary.500",
                        }}
                        transition=".4s"
                        border="1px solid white"
                        w="max-content"
                    >
                        <Text cursor="pointer" fontWeight={600}>
                            Explorar
                        </Text>
                    </Box>
                </Flex>
                <Flex
                    w="30%"
                    h={330}
                    bg="url('img/banner/b4.jpg')"
                    direction="column"
                    justifyContent="center"
                    bgSize="cover"
                    bgPosition="center"
                    p={5}
                >
                    <Text fontWeight={600} fontSize={42}>
                        Dicas
                    </Text>
                    <Text fontWeight={600}>te ajudamos no dia-a-dia.</Text>
                    <Box
                        bg="secondary.800"
                        p={3}
                        cursor="pointer"
                        _hover={{
                            bg: "secondary.500",
                        }}
                        transition=".4s"
                        border="1px solid white"
                        w="max-content"
                    >
                        <Text cursor="pointer" fontWeight={600}>
                            Explorar
                        </Text>
                    </Box>
                </Flex>
                <Flex
                    w="30%"
                    h={330}
                    bg="url('imagem_modacasual1.png')"
                    direction="column"
                    justifyContent="center"
                    bgSize="cover"
                    bgPosition="center"
                    p={5}
                >
                    <Text fontWeight={600} fontSize={42}>
                        Moda Casual
                    </Text>
                    <Text fontWeight={600}>Seu dia-a-dia com mais estilo.</Text>
                    <Box
                        bg="secondary.800"
                        p={3}
                        cursor="pointer"
                        _hover={{
                            bg: "secondary.500",
                        }}
                        transition=".4s"
                        border="1px solid white"
                        w="max-content"
                    >
                        <Text cursor="pointer" fontWeight={600}>
                            Explorar
                        </Text>
                    </Box>
                </Flex>
            </Flex>
            <Flex justifyContent="space-between" mx="auto" w={"90%"}>
                <Flex
                    w="30%"
                    h={330}
                    bg="url('img/banner/b4.jpg')"
                    direction="column"
                    justifyContent="center"
                    bgSize="cover"
                    bgPosition="center"
                    p={5}
                >
                    <Text fontWeight={600} fontSize={42}>
                        Coleção de Acessorios
                    </Text>
                    <Text fontWeight={600}>Oculos, relógios e diversos.</Text>
                    <Box
                        bg="secondary.800"
                        p={3}
                        cursor="pointer"
                        _hover={{
                            bg: "secondary.500",
                        }}
                        transition=".4s"
                        border="1px solid white"
                        w="max-content"
                    >
                        <Text cursor="pointer" fontWeight={600}>
                            Explorar
                        </Text>
                    </Box>
                </Flex>
                <Flex
                    w="30%"
                    h={330}
                    bg="url('img/banner/b4.jpg')"
                    direction="column"
                    justifyContent="center"
                    bgSize="cover"
                    bgPosition="center"
                    p={5}
                >
                    <Text fontWeight={600} fontSize={42}>
                        Blusas Sociais
                    </Text>
                    <Text fontWeight={600}>Mais elegância e estilo.</Text>
                    <Box
                        bg="secondary.800"
                        p={3}
                        cursor="pointer"
                        _hover={{
                            bg: "secondary.500",
                        }}
                        transition=".4s"
                        border="1px solid white"
                        w="max-content"
                    >
                        <Text cursor="pointer" fontWeight={600}>
                            Explorar
                        </Text>
                    </Box>
                </Flex>
                <Flex
                    w="30%"
                    h={330}
                    bg="url('img/banner/b4.jpg')"
                    direction="column"
                    justifyContent="center"
                    bgSize="cover"
                    bgPosition="center"
                    p={5}
                >
                    <Text fontWeight={600} fontSize={42}>
                        Moda Corporativa
                    </Text>
                    <Text fontWeight={600}>Mais estilo para seu trabalho.</Text>
                    <Box
                        bg="secondary.800"
                        p={3}
                        cursor="pointer"
                        _hover={{
                            bg: "secondary.500",
                        }}
                        transition=".4s"
                        border="1px solid white"
                        w="max-content"
                    >
                        <Text cursor="pointer" fontWeight={600}>
                            Explorar
                        </Text>
                    </Box>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Categories;
