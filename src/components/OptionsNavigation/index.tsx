import React from "react";
import { Flex, Image } from "@chakra-ui/react";

const OptionsNavigation: React.FC = () => {
    return (
        <Flex justifyContent="space-around" my={10} flexWrap="wrap" gap={5}>
            <Image
                cursor="pointer"
                w={{ base: 36, md: 52 }}
                src="/iconeinicio_frete.svg"
                alt="Frete"
            />
            <Image
                cursor="pointer"
                w={{ base: 36, md: 52 }}
                src="/iconeinicio_suporte.svg"
                alt="suporte"
            />
            <Image
                cursor="pointer"
                w={{ base: 36, md: 52 }}
                src="/iconeinicio_revendedor.svg"
                alt="revendedor"
            />
            <Image
                cursor="pointer"
                w={{ base: 36, md: 52 }}
                src="/iconeinicio_parcele.svg"
                alt="parcele"
            />
        </Flex>
    );
};

export default OptionsNavigation;
