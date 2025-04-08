import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Voluntiera',
  description: 'Terms and conditions for using the Voluntiera platform',
};

export default function TermsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
} 