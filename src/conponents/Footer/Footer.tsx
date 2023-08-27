'use client'

import { Box, Container, Stack, Text, useColorModeValue } from '@chakra-ui/react'

export default function SmallWithNavigation() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Stack direction={'row'} spacing={6}>
          <Box as="a" href={'#'}>
            地址：
          </Box>
          <Box as="a" href={'#'}>
            电话：
          </Box>

        </Stack>
        <Text>© 2023 HISEN INTERNATIONAL CONSULTING LTD. All rights reserved | WEBSITE BY Gaia WEBSITE</Text>
      </Container>
    </Box>
  )
}