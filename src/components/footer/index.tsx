import { Stack, Text } from "@chakra-ui/react";

function FooterSection() {
  return (
    <>
      <Stack
        marginTop={32}
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="center"
      >
        <Text as="small" color="#98A2B3">
          &copy; 2022-{new Date().getFullYear()} DevelopersIndia
        </Text>
        <Text as="small" color="#98A2B3">
          Made in India with{" "}
          <span>
            <a
              style={{ textDecoration: "underline" }}
              href="https://github.com/developersIndia"
              rel="noopener noreferrer"
              target="_blank"
            >
              Open-Source
            </a>
          </span>{" "}
          ❤️
        </Text>
      </Stack>
    </>
  );
}

export default FooterSection;
