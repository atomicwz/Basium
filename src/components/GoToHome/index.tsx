import React from "react";
import { Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

const GoToHome: React.FC = () => {
    const navigator = useRouter();
    return (
        <Text
            fontWeight={700}
            fontSize={{ base: 16, md: 22 }}
            mt={5}
            cursor="pointer"
            textAlign="center"
            transition=".4s"
            _hover={{
                transform: "scale(1.1)",
            }}
            onClick={() => navigator.push("/")}
        >
            Voltar para o inÍcio
        </Text>
    );
};

export default GoToHome;
