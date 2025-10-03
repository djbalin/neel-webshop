import * as React from "react";
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface OrderConfirmationEmailProps {
  amount?: number;
  customerEmail?: string;
}

export function OrderConfirmationEmail({
  amount,
  customerEmail = "",
}: OrderConfirmationEmailProps) {
  const formattedAmount = amount
    ? `${(amount / 100).toFixed(2).replace(".", ",")} DKK`
    : "";

  return (
    <Html>
      <Head />
      <Preview>
        Din ordre hos Forlaget DIT er bekræftet. Vi sender inden for 7 hverdage.
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={logoSection}>
            <Img
              src="https://www.forlagetdit.dk/images/logo.png"
              width="150"
              height="60"
              alt="Forlaget DIT"
              style={logo}
            />
          </Section>

          <Heading style={heading}>Ordrebekræftelse</Heading>

          <Text style={paragraph}>
            Kære kunde,
            <br />
            <br />
            Tak for din bestilling hos Forlaget DIT. Vi har modtaget din ordre
            og vil pakke og afsende den inden for 7 hverdage. Du vil få besked,
            når din ordre er afsendt.
          </Text>

          {amount && customerEmail && (
            <Section style={orderSection}>
              <Text style={orderTitle}>Ordredetaljer</Text>
              <Text style={orderText}>
                <strong>Total beløb:</strong> {formattedAmount}
              </Text>
              <Text style={orderText}>
                <strong>Sendt til:</strong> {customerEmail}
              </Text>
            </Section>
          )}

          <Text style={paragraph}>
            Har du spørgsmål til din ordre eller levering? Du er velkommen til
            at kontakte os:
          </Text>

          <Text style={contactInfo}>
            <strong>Telefon:</strong> 60 55 07 76
            <br />
            <strong>E-mail:</strong>{" "}
            <Link href="mailto:forlagetdit@gmail.com" style={link}>
              forlagetdit@gmail.com
            </Link>
            <br />
            <strong>Hjemmeside:</strong>{" "}
            <Link href="https://www.forlagetdit.dk" style={link}>
              www.forlagetdit.dk
            </Link>
          </Text>

          <Text style={signature}>
            Med venlig hilsen,
            <br />
            <strong>Forlaget Dansk i Tiden (DIT)</strong>
          </Text>

          <Section style={footer}>
            <Text style={footerText}>
              Dette er en automatisk ordrebekræftelse fra Forlaget DIT.
              <br />
              Forlagetdit@gmail.com • Telefon: 60 55 07 76
              <br />© {new Date().getFullYear()} Forlaget Dansk i Tiden. Alle
              rettigheder forbeholdes.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
  maxWidth: "600px",
};

const logoSection = {
  padding: "32px 48px",
  textAlign: "center" as const,
};

const logo = {
  margin: "0 auto",
};

const heading = {
  fontSize: "28px",
  fontWeight: "bold",
  color: "#1a1a1a",
  textAlign: "center" as const,
  margin: "30px 0",
  padding: "0 48px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
  color: "#525252",
  padding: "0 48px",
  margin: "16px 0",
};

const orderSection = {
  backgroundColor: "#f4f4f5",
  borderRadius: "8px",
  padding: "24px",
  margin: "24px 0",
  marginLeft: "48px",
  marginRight: "48px",
  width: "auto",
};

const orderTitle = {
  fontSize: "16px",
  fontWeight: "bold" as const,
  color: "#1a1a1a",
  margin: "0 0 16px 0",
};

const orderText = {
  fontSize: "14px",
  lineHeight: "24px",
  color: "#525252",
  margin: "8px 0",
};

const contactInfo = {
  fontSize: "15px",
  lineHeight: "24px",
  color: "#525252",
  padding: "0 48px",
  margin: "12px 0",
};

const link = {
  color: "#2563eb",
  textDecoration: "underline",
};

const signature = {
  fontSize: "16px",
  lineHeight: "26px",
  color: "#525252",
  padding: "0 48px",
  margin: "32px 0 16px 0",
};

const footer = {
  padding: "24px 48px",
  marginTop: "32px",
  borderTop: "1px solid #e5e5e5",
  backgroundColor: "#fafafa",
};

const footerText = {
  fontSize: "12px",
  lineHeight: "18px",
  color: "#737373",
  textAlign: "center" as const,
  margin: "4px 0",
};

// Keep the old template for backwards compatibility
export function EmailTemplate({ firstName }: { firstName: string }) {
  return (
    <div>
      <h1>Welcome, {firstName}!</h1>
    </div>
  );
}
