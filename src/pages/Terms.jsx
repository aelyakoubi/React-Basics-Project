import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const Terms = () => {
  return (
    <Box p={5}>
      <VStack align='start' spacing={4}>
        <Heading size='lg'>Terms and Conditions</Heading>

        <Heading size='md'>1. Introduction</Heading>
        <Text>
          Welcome to [Company Name]! These Terms and Conditions outline the
          rules and regulations for the use of our website and services. By
          accessing this website, we assume you accept these terms. Do not
          continue to use [Company Name] if you do not agree with all of the
          terms and conditions stated on this page.
        </Text>

        <Heading size='md'>2. Intellectual Property Rights</Heading>
        <Text>
          Unless otherwise stated, [Company Name] and/or its licensors own the
          intellectual property rights for all material on this website. You may
          access this from [Company Name] for your personal use, subject to
          restrictions set in these terms and conditions.
        </Text>

        <Heading size='md'>3. Restrictions</Heading>
        <Text>You are specifically restricted from the following:</Text>
        <Text>
          - Republishing, selling, or sublicensing any website material.
        </Text>
        <Text>
          - Using this website in any way that is damaging or impacts user
          access.
        </Text>
        <Text>
          - Engaging in any data mining, data harvesting, or similar activities.
        </Text>

        <Heading size='md'>4. Limitation of Liability</Heading>
        <Text>
          In no event shall [Company Name], nor any of its employees or
          affiliates, be liable for anything arising out of or in any way
          connected with your use of this website.
        </Text>

        <Heading size='md'>5. Governing Law</Heading>
        <Text>
          These Terms will be governed by and interpreted in accordance with the
          laws of [Your Country/State], and you submit to the jurisdiction of
          the courts located in [Your Country/State] for the resolution of any
          disputes.
        </Text>

        <Heading size='lg'>Privacy Policy</Heading>

        <Heading size='md'>1. Introduction</Heading>
        <Text>
          At [Company Name], we respect your privacy and are committed to
          protecting your personal data. This Privacy Policy explains how we
          collect, use, and safeguard your information when you visit our
          website.
        </Text>

        <Heading size='md'>2. Information We Collect</Heading>
        <Text>We may collect the following types of information:</Text>
        <Text>
          - Personal Identification Information (Name, Email Address, Phone
          Number, etc.).
        </Text>
        <Text>
          - Usage Data (IP Address, Browser Type, and Visit Duration).
        </Text>

        <Heading size='md'>3. How We Use Your Information</Heading>
        <Text>We use the collected information to:</Text>
        <Text>- Improve our website and services.</Text>
        <Text>- Process transactions and customer support requests.</Text>
        <Text>- Send promotional emails and updates (if you opt-in).</Text>

        <Heading size='md'>4. Data Protection</Heading>
        <Text>
          We implement security measures to maintain the safety of your personal
          information but cannot guarantee absolute security due to the nature
          of online transmissions.
        </Text>

        <Heading size='md'>5. Your Rights</Heading>
        <Text>
          You have the right to access, correct, or delete your personal data.
          If you wish to exercise these rights, please contact us at [Company
          Email Address].
        </Text>

        <Heading size='md'>6. Changes to This Policy</Heading>
        <Text>
          We reserve the right to update this policy at any time. Any changes
          will be posted on this page with an updated revision date.
        </Text>

        <Text>
          For any questions, please contact us at [Company Email Address].
        </Text>
      </VStack>
    </Box>
  );
};

export default Terms;
