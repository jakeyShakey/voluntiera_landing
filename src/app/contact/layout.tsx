import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Voluntiera',
  description: 'Get in touch with the Voluntiera team for any questions or inquiries',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 