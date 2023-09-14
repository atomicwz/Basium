import React from "react";
import { Flex, Text, Input } from "@chakra-ui/react";

interface IProps {
    label?: string;
    value?: string;
    onChangeText: (e: string) => void;
    variant?: "outline";
}

const TextInput: React.FC<IProps> = ({ label, onChangeText, variant }) => {
    return (
        <Flex flexDir="column" gap={2}>
            {label && !variant ? (
                <Text
                    ml={7}
                    color="secondary.500"
                    fontSize={{ base: 16, md: 20 }}
                    variant={variant}
                    fontWeight={variant ? 700 : 500}
                >
                    {label}
                </Text>
            ) : (
                <Text
                    fontWeight={700}
                    color="secondary.500"
                    ml={4}
                    fontSize={{ base: 20, md: 32 }}
                >
                    {label}
                </Text>
            )}
            <Input
                variant={variant}
                onChange={(e) => onChangeText(e.target.value)}
            />
        </Flex>
    );
};

export default TextInput;
