import React from "react";
import { Flex, Image, ListItem, List, Text } from "@chakra-ui/react";

const Footer: React.FC = () => {
    return (
        <Flex flexDirection="column" bg="secondary.900" px="10%" py={10}>
            <Image src="/img/marca_cabecalho.png" alt="Logo" w={40} mb={5} />
            <Flex justifyContent="space-between">
                <Flex gap={2}>
                    <Image w={150} src="/MARCAGIRASSOL.svg" alt="Girassol" />
                    <Image w={150} src="/MARCAZILLA.svg" alt="Zilla" />
                </Flex>
                <Flex gap={10} color="white" listStyleType="none">
                    <List>
                        <ListItem fontWeight={600} mb={5} cursor="default">
                            Sobre
                        </ListItem>
                        <ListItem
                            transition=".4s"
                            _hover={{ opacity: 0.4 }}
                            cursor="pointer"
                        >
                            Sobre nós
                        </ListItem>
                        <ListItem
                            transition=".4s"
                            _hover={{ opacity: 0.4 }}
                            cursor="pointer"
                        >
                            Informação de entrega
                        </ListItem>
                        <ListItem
                            transition=".4s"
                            _hover={{ opacity: 0.4 }}
                            cursor="pointer"
                        >
                            Política de privacidade
                        </ListItem>
                        <ListItem
                            transition=".4s"
                            _hover={{ opacity: 0.4 }}
                            cursor="pointer"
                        >
                            Contato
                        </ListItem>
                    </List>
                    <List>
                        <ListItem fontWeight={600} mb={5} cursor="default">
                            Cliente
                        </ListItem>
                        <ListItem
                            transition=".4s"
                            _hover={{ opacity: 0.4 }}
                            cursor="pointer"
                        >
                            Ver Carrinho
                        </ListItem>
                        <ListItem
                            transition=".4s"
                            _hover={{ opacity: 0.4 }}
                            cursor="pointer"
                        >
                            Minha lista de Desejos
                        </ListItem>
                        <ListItem
                            transition=".4s"
                            _hover={{ opacity: 0.4 }}
                            cursor="pointer"
                        >
                            Acompanhar meu Pedido
                        </ListItem>
                        <ListItem
                            transition=".4s"
                            _hover={{ opacity: 0.4 }}
                            cursor="pointer"
                        >
                            Ajuda
                        </ListItem>
                    </List>
                    <List>
                        <ListItem fontWeight={600} mb={5} cursor="default">
                            Em breve nosso app
                        </ListItem>
                        <ListItem cursor="default">
                            App Store / Google Play
                        </ListItem>
                        <Flex gap={3} mt={5}>
                            <Image
                                rounded="md"
                                src="/img/pay/app.jpg"
                                alt="appstore"
                            />
                            <Image
                                rounded="md"
                                src="/img/pay/play.jpg"
                                alt="googlePlay"
                            />
                        </Flex>
                        <ListItem cursor="default" mt={5}>
                            Informações de pagamentos
                        </ListItem>
                        <ListItem cursor="default" mt={2}>
                            <Image
                                rounded="md"
                                src="/img/pay/pay.png"
                                alt="appstore"
                            />
                        </ListItem>
                    </List>
                </Flex>
            </Flex>
            <Flex flexDir="column">
                <Text fontSize={14} mt={5} as="i">
                    Rua Cel Teixeira – Alameda Jonas Ferreira Lima (Novo
                    Calçadão), 237, sala P2, em Jacobina – Bahia
                </Text>
                <Text fontSize={14} as="i">
                    (75) 98154-2072
                </Text>
            </Flex>
            <Text textAlign="center" mt={10}>
                © Estilo Basium, todos direitos reservados. 2023
            </Text>
        </Flex>
    );
};

export default Footer;
