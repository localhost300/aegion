import * as React from "react";
import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

type EmailTemplateProps = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const containerStyle: React.CSSProperties = {
  backgroundColor: "#ffffff",
  borderRadius: "12px",
  border: "1px solid #e5e7eb",
  padding: "32px",
  fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
};

const labelStyle: React.CSSProperties = {
  fontSize: "12px",
  fontWeight: 600,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: "#6b7280",
  marginBottom: "4px",
};

const valueStyle: React.CSSProperties = {
  fontSize: "16px",
  color: "#111827",
  marginTop: 0,
  marginBottom: "16px",
};

export default function EmailTemplate({
  name,
  email,
  subject,
  message,
}: EmailTemplateProps) {
  return (
    <Html>
      <Head />
      <Preview>New contact request from {name}</Preview>
      <Body style={{ backgroundColor: "#f3f4f6", padding: "24px" }}>
        <Container style={containerStyle}>
          <Section style={{ marginBottom: "16px" }}>
            <Text style={{ fontSize: "20px", fontWeight: 600, color: "#0f172a" }}>
              New Contact Inquiry
            </Text>
            <Text style={{ fontSize: "14px", color: "#475569" }}>
              A visitor submitted the contact form on Aegion Mountain.
            </Text>
          </Section>
          <Hr style={{ borderColor: "#e2e8f0", marginBottom: "24px" }} />
          <Section>
            <div>
              <Text style={labelStyle}>Name</Text>
              <Text style={valueStyle}>{name}</Text>
            </div>
            <div>
              <Text style={labelStyle}>Email</Text>
              <Text style={valueStyle}>{email}</Text>
            </div>
            <div>
              <Text style={labelStyle}>Subject</Text>
              <Text style={valueStyle}>{subject}</Text>
            </div>
            <div>
              <Text style={labelStyle}>Message</Text>
              <Text style={{ ...valueStyle, whiteSpace: "pre-wrap" }}>{message}</Text>
            </div>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
