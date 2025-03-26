import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'For Charities | Voluntiera',
  description: 'Connect with passionate volunteers to support your charitable organization',
};

export default function CharitiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 