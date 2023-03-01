import { Navbar, Button, Link, Text, useTheme } from "@nextui-org/react";
import Image from "next/image";

export default function Header() {
  const { isDark } = useTheme();

  return (
    <>
      <Navbar
        className="w-full justify-between object-center p-4"
        shouldHideOnScroll
        isBordered={isDark}
        variant="static"
      >
        <div></div>
        <Navbar.Brand>
          <Image
            width={100}
            height={100}
            src="https://res.cloudinary.com/dnjadkrvy/image/upload/v1675045940/logo_ex1aid.svg"
          />
        </Navbar.Brand>
        <div></div>
      </Navbar>
      <Navbar isCompact isBordered={isDark} variant="sticky">
        <Navbar.Brand>
          <Image
            shouldShowOnScroll
            width={25}
            height={25}
            src="https://res.cloudinary.com/dnjadkrvy/image/upload/v1675045940/logo_ex1aid.svg"
          />

          <Text b color="inherit" hideIn="xs">
            Defiant
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs" variant="underline">
          <Navbar.Link isActive href="/">Home</Navbar.Link>
          <Navbar.Link isActive href="#">
            Influencers
          </Navbar.Link>
          <Navbar.Link href="#">Clients</Navbar.Link>
          <Navbar.Link href="#">Case Studies</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link color="inherit" href="login">
            Login
          </Navbar.Link>
          <Navbar.Item>
            <Button auto flat as={Link} href="register">
              Sign Up
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
    </>
  );
}
