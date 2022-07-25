import { Box,HStack,Stack,Text } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    
    <Stack  padding="30px" display="flex" marginLeft={250}  >
        <HStack gap="50px">
              <Text>Contact Us</Text>
               <Text>Legal</Text>
        </HStack>
      
    </Stack>
  )
}

export default Footer