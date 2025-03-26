import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Voluntiera',
  description: 'Learn about Voluntiera\'s mission and the team behind the platform',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 