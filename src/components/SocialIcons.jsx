import { HStack, Icon, Link } from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa';

const SocialIcons = () => {
  return (
    <HStack spacing={4}>
      <Link href='https://www.facebook.com/yourpage' isExternal>
        <Icon as={FaFacebook} boxSize={6} />
      </Link>
      <Link href='https://www.instagram.com/yourpage' isExternal>
        <Icon as={FaInstagram} boxSize={6} />
      </Link>
      <Link href='https://www.tiktok.com/@yourpage' isExternal>
        <Icon as={FaTiktok} boxSize={6} />
      </Link>
      <Link href='https://twitter.com/yourpage' isExternal>
        <Icon as={FaTwitter} boxSize={6} />
      </Link>
    </HStack>
  );
};

export default SocialIcons;
