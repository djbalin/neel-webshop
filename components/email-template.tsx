import * as React from "react";
import type Stripe from "stripe";
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

type SupportedLocale = "da" | "en";

interface OrderLineItem {
  description: string;
  quantity?: number | null;
  totalAmount?: number | null;
}

export interface OrderConfirmationEmailProps {
  locale: SupportedLocale;
  orderId: string;
  orderReference: string;
  customerEmail: string;
  customerName?: string | null;
  customerPhone?: string | null;
  shippingName?: string | null;
  shippingAddress?: Stripe.Address | null;
  currency?: string | null;
  subtotalAmount?: number | null;
  shippingAmount?: number | null;
  taxAmount?: number | null;
  totalAmount: number;
  items: OrderLineItem[];
}

export function OrderConfirmationEmail({
  locale,
  orderId,
  orderReference,
  customerEmail,
  customerName,
  customerPhone,
  shippingName,
  shippingAddress,
  currency,
  subtotalAmount,
  shippingAmount,
  taxAmount,
  totalAmount,
  items,
}: OrderConfirmationEmailProps) {
  const copy = locale === "en" ? englishCopy : danishCopy;
  const formattedSubtotal =
    subtotalAmount != null
      ? formatCurrency(subtotalAmount, currency, locale)
      : undefined;
  const formattedShipping =
    shippingAmount != null
      ? formatCurrency(shippingAmount, currency, locale)
      : undefined;
  const formattedTax =
    taxAmount != null ? formatCurrency(taxAmount, currency, locale) : undefined;
  const formattedTotal = formatCurrency(totalAmount, currency, locale);
  const formattedAddress = formatAddress(shippingAddress, locale);
  const orderLineItems = items.filter((item) => item.description.trim().length > 0);

  return (
    <Html lang={locale}>
      <Head />
      <Preview>{copy.preview}</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Branded header */}
          <Section style={headerBar}>
            <Img
              src="https://www.forlagetdit.dk/images/logo.png"
              width="140"
              height="56"
              alt="Forlaget DIT"
              style={logo}
            />
          </Section>

          {/* Confirmation badge */}
          <Section style={badgeSection}>
            <Img
              src="https://img.icons8.com/color/96/checked--v1.png"
              width="56"
              height="56"
              alt=""
              style={checkIcon}
            />
            <Heading style={heading}>{copy.heading}</Heading>
            <Text style={introText}>{copy.intro}</Text>
          </Section>

          {/* Accent divider */}
          <Section style={accentDivider} />

          {/* Order details card */}
          <Section style={orderCard}>
            <Text style={sectionTitle}>{copy.orderDetailsTitle}</Text>
            <Section style={detailRow}>
              <Text style={detailLabel}>{copy.orderReferenceLabel}</Text>
              <Text style={detailValue}>{orderReference}</Text>
            </Section>
            <Section style={detailRow}>
              <Text style={detailLabel}>{copy.orderIdLabel}</Text>
              <Text style={detailValue}>{orderId}</Text>
            </Section>
            <Section style={detailRow}>
              <Text style={detailLabel}>{copy.emailLabel}</Text>
              <Text style={detailValue}>{customerEmail}</Text>
            </Section>
            {customerName ? (
              <Section style={detailRow}>
                <Text style={detailLabel}>{copy.customerNameLabel}</Text>
                <Text style={detailValue}>{customerName}</Text>
              </Section>
            ) : null}
            {customerPhone ? (
              <Section style={detailRow}>
                <Text style={detailLabel}>{copy.phoneLabel}</Text>
                <Text style={detailValue}>{customerPhone}</Text>
              </Section>
            ) : null}
          </Section>

          {/* Line items */}
          {orderLineItems.length > 0 ? (
            <Section style={itemsCard}>
              <Text style={sectionTitle}>{copy.itemsTitle}</Text>
              {orderLineItems.map((item, index) => (
                <Section
                  key={`${item.description}-${index}`}
                  style={lineItemRow}
                >
                  <Text style={lineItemName}>{item.description}</Text>
                  <Text style={lineItemDetails}>
                    {item.quantity != null
                      ? `${copy.quantityLabel}: ${item.quantity}`
                      : ""}
                    {item.quantity != null && item.totalAmount != null
                      ? "  •  "
                      : ""}
                    {item.totalAmount != null
                      ? formatCurrency(item.totalAmount, currency, locale)
                      : ""}
                  </Text>
                </Section>
              ))}
            </Section>
          ) : null}

          {/* Totals */}
          <Section style={totalsCard}>
            <Text style={sectionTitle}>{copy.totalsTitle}</Text>
            {formattedSubtotal ? (
              <Section style={totalsRow}>
                <Text style={totalsLabel}>{copy.subtotalLabel}</Text>
                <Text style={totalsValue}>{formattedSubtotal}</Text>
              </Section>
            ) : null}
            {formattedShipping ? (
              <Section style={totalsRow}>
                <Text style={totalsLabel}>{copy.shippingLabel}</Text>
                <Text style={totalsValue}>{formattedShipping}</Text>
              </Section>
            ) : null}
            {formattedTax ? (
              <Section style={totalsRow}>
                <Text style={totalsLabel}>{copy.taxLabel}</Text>
                <Text style={totalsValue}>{formattedTax}</Text>
              </Section>
            ) : null}
            <Section style={totalHighlightRow}>
              <Text style={totalHighlightLabel}>{copy.totalLabel}</Text>
              <Text style={totalHighlightValue}>{formattedTotal}</Text>
            </Section>
          </Section>

          {/* Shipping address */}
          {(shippingName || formattedAddress) ? (
            <Section style={itemsCard}>
              <Text style={sectionTitle}>{copy.shippingTitle}</Text>
              {shippingName ? (
                <Text style={shippingText}>
                  <strong>{copy.recipientLabel}:</strong> {shippingName}
                </Text>
              ) : null}
              {formattedAddress ? (
                <Text style={shippingText}>
                  <strong>{copy.addressLabel}:</strong>
                  <br />
                  {formattedAddress}
                </Text>
              ) : null}
            </Section>
          ) : null}

          {/* Contact card */}
          <Section style={contactCard}>
            <Text style={contactHeading}>{copy.contactIntro}</Text>
            <Section style={contactRow}>
              <Text style={contactItem}>
                {copy.phoneLabel}: <strong>60 55 07 76</strong>
              </Text>
            </Section>
            <Section style={contactRow}>
              <Text style={contactItem}>
                {copy.emailLabel}:{" "}
                <Link href="mailto:forlagetdit@gmail.com" style={contactLink}>
                  forlagetdit@gmail.com
                </Link>
              </Text>
            </Section>
            <Section style={contactRow}>
              <Text style={contactItem}>
                {copy.websiteLabel}:{" "}
                <Link href="https://www.forlagetdit.dk" style={contactLink}>
                  www.forlagetdit.dk
                </Link>
              </Text>
            </Section>
          </Section>

          {/* Signature */}
          <Text style={signatureText}>
            {copy.signature}
            <br />
            <strong>Forlaget Dansk i Tiden (DIT)</strong>
          </Text>

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              {copy.footer}
            </Text>
            <Text style={footerMeta}>
              forlagetdit@gmail.com &nbsp;•&nbsp; Telefon: 60 55 07 76
            </Text>
            <Text style={footerCopyright}>
              © {new Date().getFullYear()} Forlaget Dansk i Tiden. Alle
              rettigheder forbeholdes.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const brandColor = "#1e3a5f";
const brandAccent = "#2563eb";

const main = {
  backgroundColor: "#f0f2f5",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  marginBottom: "64px",
  maxWidth: "600px",
  borderRadius: "12px",
  overflow: "hidden" as const,
  boxShadow: "0 4px 24px rgba(0, 0, 0, 0.08)",
};

const headerBar = {
  backgroundColor: brandColor,
  padding: "28px 48px",
  textAlign: "center" as const,
};

const logo = {
  margin: "0 auto",
};

const badgeSection = {
  textAlign: "center" as const,
  padding: "32px 48px 0",
};

const checkIcon = {
  margin: "0 auto 12px",
};

const heading = {
  fontSize: "26px",
  fontWeight: "700" as const,
  color: brandColor,
  textAlign: "center" as const,
  margin: "0 0 12px",
};

const introText = {
  fontSize: "15px",
  lineHeight: "24px",
  color: "#6b7280",
  textAlign: "center" as const,
  margin: "0 0 8px",
};

const accentDivider = {
  height: "3px",
  backgroundColor: brandAccent,
  margin: "24px 48px",
  borderRadius: "2px",
};

const orderCard = {
  backgroundColor: "#f8fafc",
  borderRadius: "10px",
  padding: "20px 24px",
  margin: "0 32px 20px",
  border: "1px solid #e2e8f0",
};

const sectionTitle = {
  fontSize: "13px",
  fontWeight: "700" as const,
  color: brandAccent,
  textTransform: "uppercase" as const,
  letterSpacing: "0.8px",
  margin: "0 0 16px",
};

const detailRow = {
  margin: "0 0 8px",
};

const detailLabel = {
  fontSize: "12px",
  color: "#94a3b8",
  textTransform: "uppercase" as const,
  letterSpacing: "0.5px",
  margin: "0 0 2px",
};

const detailValue = {
  fontSize: "14px",
  color: "#1e293b",
  fontWeight: "500" as const,
  margin: "0",
};

const itemsCard = {
  borderRadius: "10px",
  padding: "20px 24px",
  margin: "0 32px 20px",
  border: "1px solid #e2e8f0",
};

const lineItemRow = {
  borderBottom: "1px solid #f1f5f9",
  paddingBottom: "12px",
  marginBottom: "12px",
};

const lineItemName = {
  fontSize: "15px",
  color: "#1e293b",
  fontWeight: "600" as const,
  margin: "0 0 2px",
};

const lineItemDetails = {
  fontSize: "13px",
  color: "#64748b",
  margin: "0",
};

const totalsCard = {
  borderRadius: "10px",
  padding: "20px 24px",
  margin: "0 32px 20px",
  border: "1px solid #e2e8f0",
};

const totalsRow = {
  margin: "0 0 8px",
};

const totalsLabel = {
  fontSize: "14px",
  color: "#64748b",
  margin: "0",
};

const totalsValue = {
  fontSize: "14px",
  color: "#1e293b",
  fontWeight: "500" as const,
  margin: "0",
  textAlign: "right" as const,
};

const totalHighlightRow = {
  backgroundColor: brandColor,
  borderRadius: "8px",
  padding: "14px 16px",
  marginTop: "12px",
};

const totalHighlightLabel = {
  fontSize: "15px",
  color: "#ffffff",
  fontWeight: "600" as const,
  margin: "0",
};

const totalHighlightValue = {
  fontSize: "18px",
  color: "#ffffff",
  fontWeight: "700" as const,
  margin: "0",
  textAlign: "right" as const,
};

const shippingText = {
  fontSize: "14px",
  lineHeight: "22px",
  color: "#475569",
  margin: "0 0 8px",
};

const contactCard = {
  backgroundColor: "#f8fafc",
  borderRadius: "10px",
  padding: "20px 24px",
  margin: "0 32px 24px",
  border: "1px solid #e2e8f0",
  textAlign: "center" as const,
};

const contactHeading = {
  fontSize: "14px",
  color: "#475569",
  margin: "0 0 16px",
  lineHeight: "22px",
};

const contactRow = {
  margin: "0 0 6px",
};

const contactItem = {
  fontSize: "14px",
  color: "#64748b",
  margin: "0",
};

const contactLink = {
  color: brandAccent,
  fontWeight: "600" as const,
  textDecoration: "none",
};

const signatureText = {
  fontSize: "15px",
  lineHeight: "24px",
  color: "#475569",
  padding: "0 32px",
  margin: "8px 0 24px",
  textAlign: "center" as const,
};

const footer = {
  padding: "24px 32px",
  backgroundColor: brandColor,
  textAlign: "center" as const,
};

const footerText = {
  fontSize: "13px",
  lineHeight: "20px",
  color: "rgba(255, 255, 255, 0.8)",
  margin: "0 0 8px",
};

const footerMeta = {
  fontSize: "12px",
  lineHeight: "18px",
  color: "rgba(255, 255, 255, 0.6)",
  margin: "0 0 4px",
};

const footerCopyright = {
  fontSize: "11px",
  lineHeight: "16px",
  color: "rgba(255, 255, 255, 0.4)",
  margin: "0",
};

const danishCopy = {
  preview:
    "Din ordre hos Forlaget DIT er bekræftet. Vi sender inden for 7 hverdage.",
  heading: "Ordrebekræftelse",
  intro:
    "Tak for din bestilling hos Forlaget DIT. Vi har modtaget din ordre og vil pakke og afsende den inden for 7 hverdage. Du vil få besked, når din ordre er afsendt.",
  orderDetailsTitle: "Ordredetaljer",
  orderReferenceLabel: "Ordrenummer",
  orderIdLabel: "Stripe-reference",
  emailLabel: "E-mail",
  customerNameLabel: "Navn",
  phoneLabel: "Telefon",
  itemsTitle: "Bestilte varer",
  quantityLabel: "Antal",
  amountLabel: "Beløb",
  totalsTitle: "Beløb",
  subtotalLabel: "Varer i alt",
  shippingLabel: "Fragt",
  taxLabel: "Moms",
  totalLabel: "Total",
  shippingTitle: "Leveringsadresse",
  recipientLabel: "Modtager",
  addressLabel: "Adresse",
  contactIntro:
    "Har du spørgsmål til din ordre eller levering? Du er velkommen til at kontakte os:",
  websiteLabel: "Hjemmeside",
  signature: "Med venlig hilsen,",
  footer: "Dette er en automatisk ordrebekræftelse fra Forlaget DIT.",
};

const englishCopy = {
  preview:
    "Your order with Forlaget DIT has been confirmed. We ship within 7 business days.",
  heading: "Order Confirmation",
  intro:
    "Thank you for your order from Forlaget DIT. We have received your order and will pack and ship it within 7 business days. You will receive another email when your order has shipped.",
  orderDetailsTitle: "Order Details",
  orderReferenceLabel: "Order number",
  orderIdLabel: "Stripe reference",
  emailLabel: "Email",
  customerNameLabel: "Name",
  phoneLabel: "Phone",
  itemsTitle: "Items",
  quantityLabel: "Quantity",
  amountLabel: "Amount",
  totalsTitle: "Totals",
  subtotalLabel: "Subtotal",
  shippingLabel: "Shipping",
  taxLabel: "Tax",
  totalLabel: "Total",
  shippingTitle: "Shipping Address",
  recipientLabel: "Recipient",
  addressLabel: "Address",
  contactIntro:
    "If you have any questions about your order or delivery, you are welcome to contact us:",
  websiteLabel: "Website",
  signature: "Best regards,",
  footer: "This is an automatic order confirmation from Forlaget DIT.",
};

function formatCurrency(
  amount: number,
  currency: string | null | undefined,
  locale: SupportedLocale,
) {
  try {
    return new Intl.NumberFormat(locale === "da" ? "da-DK" : "en-US", {
      style: "currency",
      currency: (currency ?? "DKK").toUpperCase(),
    }).format(amount / 100);
  } catch {
    return `${(amount / 100).toFixed(2)} ${(currency ?? "DKK").toUpperCase()}`;
  }
}

function formatAddress(
  address: Stripe.Address | null | undefined,
  locale: SupportedLocale,
) {
  if (!address) {
    return null;
  }

  const localityLine = [address.postal_code, address.city]
    .filter(Boolean)
    .join(" ");
  const country = address.country ?? (locale === "da" ? "Danmark" : "Denmark");

  return [address.line1, address.line2, localityLine, country]
    .filter(Boolean)
    .join("\n");
}

// Keep the old template for backwards compatibility
export function EmailTemplate({ firstName }: { firstName: string }) {
  return (
    <div>
      <h1>Welcome, {firstName}!</h1>
    </div>
  );
}
