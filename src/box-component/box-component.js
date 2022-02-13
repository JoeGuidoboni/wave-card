import * as React from 'react';
import { Flex, Button, Center, VStack, Box, Input } from '@chakra-ui/react';

function BoxComponent() {
    return (
        <div className="BoxComponent">
            <Center top={'30%'} transform={'translate(0, 30%)'}>
                <Flex borderWidth='1px' borderRadius='3xl' w={540} h={960} justifyContent='center'>
                    <Center w={'100%'}>
                        <VStack w={'80%'}>
                            <Box>Search for a track</Box>
                            <Input placeholder='Enter a song or artist from Spotify'></Input>
                            <Button>Make a clip</Button>
                        </VStack>
                    </Center>
                </Flex>
            </Center>
        </div>
    );
}

export default BoxComponent