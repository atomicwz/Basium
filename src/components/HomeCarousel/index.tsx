import React from "react";
import { Flex, Text, Button } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HomeCarousel: React.FC = () => {
    const banners = [
        {
            url: "url('/fullbanner_blazer.svg')",
            text1: "Grandes Ofertas",
            text2: "Seu estilo com",
            text3: "toque de classe!",
            off: {
                text1: "Parcelas de 6x sem juros",
                text2: "Enviamos para todo Brasil",
                text3: "Desconto de 10% em compras no pix",
            },
        },
        {
            url: "url('/fullbanner_calca.svg')",
            text1: "Grandes Ofertas",
            text2: "Roupas a partir de",
            text3: "R$ 79,90",
            off: {
                text1: "Parcelas de 6x sem juros",
                text2: "Enviamos para todo Brasil",
                text3: "Desconto de 10% em compras no pix",
            },
        },
        {
            url: "url('/fullbanner_calcados5.svg')",
            text1: "Grandes Ofertas",
            text2: "Calçados a partir de",
            text3: "R$ 99,90",
            off: {
                text1: "Parcelas de 6x sem juros",
                text2: "Enviamos para todo Brasil",
                text3: "Desconto de 10% em compras no pix",
            },
        },
        {
            url: "url('/fullbanner_acessorios.svg')",
            text1: "Grandes Ofertas",
            text2: "Acessórios a partir de",
            text3: "R$ 34,99",
            off: {
                text1: "Parcelas de 6x sem juros",
                text2: "Enviamos para todo Brasil",
                text3: "Desconto de 10% em compras no pix",
            },
        },
    ];

    return (
        <Flex mt={"20"} w="100%" flexDirection="column">
            <Carousel
                showIndicators={false}
                showArrows={false}
                showStatus={false}
                width="100%"
                infiniteLoop
                interval={2000}
                autoPlay
            >
                {banners.map((banner, index) => (
                    <Flex
                        key={index}
                        flexDirection="column"
                        justifyContent="space-between"
                        bgImage={banner.url}
                        mx="auto"
                        bgRepeat="no-repeat"
                        bgPosition="right"
                        h="90vh"
                    >
                        <Flex direction="column" mt={44} ml="10%">
                            <Text fontSize={32} fontWeight={600}>
                                {banner.text1}
                            </Text>
                            <Text
                                fontSize={60}
                                color="primary.500"
                                fontWeight={600}
                                lineHeight={0.9}
                            >
                                {banner.text2}
                            </Text>
                            <Text
                                fontSize={70}
                                color="primary.400"
                                fontWeight={600}
                                lineHeight={0.9}
                            >
                                {banner.text3}
                            </Text>
                            <Flex
                                flexDirection="column"
                                mt={2}
                                color="primary.500"
                            >
                                <Text color="primary.400" fontWeight={600}>
                                    {banner.off.text1}
                                </Text>
                                <Text color="primary.400" fontWeight={600}>
                                    {banner.off.text2}
                                </Text>
                                <Text color="primary.400" fontWeight={600}>
                                    {banner.off.text3}
                                </Text>
                                <Button
                                    backgroundRepeat="no-repeat"
                                    background="url('img/button.png')"
                                    bgPosition="center"
                                    _hover={{
                                        background: "url('img/button.png')",
                                        bgPosition: "center",
                                    }}
                                    w="200px"
                                    mt={5}
                                    fontSize="15px"
                                    h="50px"
                                    color="white"
                                    rounded="none"
                                >
                                    Compre Agora
                                </Button>
                            </Flex>
                        </Flex>
                    </Flex>
                ))}
            </Carousel>
        </Flex>
    );
};

export default HomeCarousel;
