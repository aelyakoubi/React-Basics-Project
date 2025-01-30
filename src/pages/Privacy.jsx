import { Box, Heading, Text, VStack } from '@chakra-ui/react';

const Privacy = () => {
  return (
    <Box maxW='800px' mx='auto' p={{ base: 4, md: 8 }}>
      <VStack align='start' spacing={6}>
        <Heading size='lg'>Privacy Policy</Heading>

        <Text>
          <strong>1. Introduction</strong>
          <br />
          At [Company Name], we respect your privacy and are committed to
          protecting your personal data. This Privacy Policy explains how we
          collect, use, and safeguard your information when you visit our
          website.
        </Text>

        <Text>
          <strong>2. Information We Collect</strong>
          <br />
          We may collect the following types of information:
          <ul>
            <li>
              Personal Identification Information (Name, Email Address, Phone
              Number, etc.).
            </li>
            <li>Usage Data (IP Address, Browser Type, and Visit Duration).</li>
          </ul>
        </Text>

        <Text>
          <strong>3. How We Use Your Information</strong>
          <br />
          We use the collected information to:
          <ul>
            <li>Improve our website and services.</li>
            <li>Process transactions and customer support requests.</li>
            <li>Send promotional emails and updates (if you opt-in).</li>
          </ul>
        </Text>

        <Text>
          <strong>4. Data Protection</strong>
          <br />
          We implement security measures to maintain the safety of your personal
          information but cannot guarantee absolute security due to the nature
          of online transmissions.
        </Text>

        <Text>
          <strong>5. Your Rights</strong>
          <br />
          You have the right to access, correct, or delete your personal data.
          If you wish to exercise these rights, please contact us at [Company
          Email Address].
        </Text>

        <Text>
          <strong>6. Changes to This Policy</strong>
          <br />
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

export default Privacy;
