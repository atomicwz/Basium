import React from "react";
import { Box, CloseButton, Flex, Text } from "@chakra-ui/react";

interface IProps {
    client: string;
}

const QueueRow: React.FC<IProps> = ({ client }) => {
    return (
        <Flex gap={2} _hover={{ transform: "scale(1.03)" }} transition=".2s">
            <Flex
                w="90%"
                border="1px solid"
                borderColor="secondary.500"
                p={4}
                rounded="2xl"
                alignItems="center"
            >
                <Text
                    color="primary.400"
                    fontWeight={700}
                    fontSize={{ base: 12, md: 18 }}
                >
                    {client}
                </Text>
            </Flex>
            <Flex
                transition=".4s"
                bg="tertiary.400"
                rounded="xl"
                _hover={{ bg: "tertiary.300" }}
            >
                <CloseButton color="white" h="100%" margin="auto" />
            </Flex>
        </Flex>
    );
};

export default QueueRow;
