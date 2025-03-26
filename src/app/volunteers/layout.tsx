import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'For Volunteers | Voluntiera',
  description: 'Find meaningful volunteer opportunities that match your skills and interests',
};

export default function VolunteersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 