import { Layout } from '../components/layout/Layout'
import { Heading, Text, Flex, VStack, Button, Tabs, TabList, Tab, TabPanels, TabPanel, AspectRatio, Grid, GridItem, Link } from '@chakra-ui/react'
import { HomeMeta } from '../components/layout/Head'
import NextLink from 'next/link'
import { CallToAction } from '../components/layout/CallToAction'
import React, { useState, useEffect } from 'react'

export default function Home() {
  const maxWidth = 1300
  const [flexDirection, setFlexDirection] = useState('row')

  useEffect(() => {
    if (window) {
      toggleDirection()
      window.addEventListener('resize', toggleDirection)
    }
  })

  function toggleDirection() {
    if (window.innerWidth < 863) {
      setFlexDirection('column')
    } else {
      setFlexDirection('row')
    }
  }

  // Generate video tutorials and content
  const tutorials = [
    {
      id: 'freelancers',
      content: 'If you are a freelancer, watch the video below for a quided walkthrough of how Smart Invoice works, and how to create and manage your invoices.',
      video: 'https://www.youtube.com/embed/[id]'
    },
    {
      id: 'clients',
      content: 'If you are a freelancer, watch the video below for a quided walkthrough of how Smart Invoice works, and how to create and manage your invoices.',
      video: 'https://www.youtube.com/embed/[id]'
    },
    {
      id: 'disputes',
      content: 'If you are a freelancer, watch the video below for a quided walkthrough of how Smart Invoice works, and how to create and manage your invoices.',
      video: 'https://www.youtube.com/embed/[id]'
    },
  ]

  const faqLinks = [
    {
      content: 'Creating an invoice',
      url: '#'
    },
    {
      content: 'View existing invoices',
      url: '#'
    },
    {
      content: 'Locking a milestone for dispute',
      url: '#'
    },
    {
      content: 'Adding new milestones to an invoice',
      url: '#'
    },
    {
      content: "Funding an invoice's escrow",
      url: '#'
    },
    {
      content: 'Choosing a custom arbitrator',
      url: '#'
    },
    {
      content: 'Downloading PDFs of your invoices',
      url: '#'
    },
    {
      content: 'Releasing funds from escrow',
      url: '#'
    },
    {
      content: 'Setting a safety valve date',
      url: '#'
    },
  ]

  return (
    <Layout title="Smart Invoice Docs" metatags={<HomeMeta/>}>
      {/* Hero Section */}
      <Flex justify="center" align="center" background="gray.background" width='100%'>
        <VStack
          paddingY={20}
          paddingX={8}
          width="100%"
          justify='center'
          align='center'
          minHeight={320}
          maxWidth={maxWidth}
        >
          <Text
            textColor="blue.1"
            fontSize={16}
            fontWeight={700}
            fontFamily="Poppins"
          >
            Have a question? Find the answer here.
          </Text>
          <Heading
            textColor="charcoal"
            fontSize={50}
            fontWeight={700}
            fontFamily="Poppins"
            paddingBottom={6}
            textAlign="center"
          >
            Smart Invoice Documentation
          </Heading>
          <NextLink href="/docs/introducing-smart-invoice" passHref>
            <Button
              background="blue.1"
              _hover={{ background: 'blue.hover.1' }}
              color="white"
              paddingY={6}
              paddingX={8}
              fontSize="sm"
              fontWeight="bold"
              borderRadius={8}
            >
              View All Documentation
            </Button>
          </NextLink>
        </VStack>
      </Flex>
      {/* Video Tutorials */}
      <Flex justify="center" align="center" background="white" width='100%'>
        <Flex 
          direction="column"
          justify="center"
          align="center"
          paddingY={16}
          paddingX={8}
          width="100%"
          maxWidth={maxWidth}
        >
          <Heading mb={2}>
            How Smart Invoice works
          </Heading>
          <Text textAlign="center">
            The videos below will provide you with a quick tour of Smart Invoice.
          </Text>
          <Tabs width="100%" display="flex" flexDirection="column" mt={10}>
            <TabList justifySelf="center" alignSelf="center" width="100%" maxWidth={800}>
              {tutorials.map(tutorial => (
                <Tab
                  key={tutorial.id}
                  width="33%"
                  _selected={{
                    color: 'blue.1',
                    fontWeight: 'bold',
                    borderBottomColor: 'blue.1'
                  }}
                  borderBottomColor="gray.background"
                >
                  For {tutorial.id}
                </Tab>
              ))}
            </TabList>
            <TabPanels>
              {tutorials.map(tutorial => (
                <TabPanel key={tutorial.id} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                  <Text maxWidth={800} mb={6}>
                    {tutorial.content}
                  </Text>
                  {/* YouTube embed iframe */}
                  <AspectRatio width="100%" maxWidth={1000} ratio={2}>
                    <iframe
                      width="560"
                      height="315"
                      src={tutorial.video}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </AspectRatio>
                </TabPanel>
              ))}
            </TabPanels>
          </Tabs>
        </Flex>
      </Flex>
      {/* Essential FAQs */}
      <Flex justify="center" align="center" background="gray.background" width='100%'>
        <Flex 
          direction="column"
          justify="center"
          paddingY={16}
          paddingX={8}
          width="100%"
          maxWidth={maxWidth}
        >
          <Heading mb={10} textAlign={flexDirection === 'column' && 'center'}>
            Essential FAQs
          </Heading>
          <Grid gridTemplateColumns={'repeat(auto-fit, minmax(400px, 1fr))'} rowGap={8}>
            {faqLinks.map((item, i) => (
              <GridItem key={i} display="flex" justifyContent={flexDirection === 'column' && 'center'}>
                <NextLink href={item.url} passHref>
                  <Link textColor="blue.1" fontWeight="bold">
                    {item.content}
                  </Link>
                </NextLink>
              </GridItem>
            ))}
          </Grid>
        </Flex>
      </Flex>
      <CallToAction maxWidth={maxWidth} />
    </Layout>
  )
}
