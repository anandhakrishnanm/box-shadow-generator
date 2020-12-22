import { Heading } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
const Footer = () => {
  return (
    <footer>
      <Heading as="h4" size="md">
        Created by &nbsp;
        </Heading>
        <Heading as="h4" size="md">
        <div className="git-link">
          <Link href="https://github.com/anandhakrishnanm" isExternal>
            Anandhakrishnan M
          </Link>
          </div>
        </Heading>

    </footer>
  );
};
export default Footer;
