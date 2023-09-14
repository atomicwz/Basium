import React from "react";
import { Flex, Image } from "@chakra-ui/react";

const OptionsNavigation: React.FC = () => {
    return (
        <Flex justifyContent="space-around">
            <Image src="/iconeinicio_frete.svg" alt="Frete" />
            <Image src="/iconeinicio_suporte.svg" alt="suporte" />
            <Image src="/iconeinicio_revendedor.svg" alt="revendedor" />
            <Image src="/iconeinicio_parcele.svg" alt="parcele" />
        </Flex>
    );
};

export default OptionsNavigation;
