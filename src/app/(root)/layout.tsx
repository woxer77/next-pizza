import { Header } from '@/modules/header';

const RootLayout = ({
  children,
  dialog
}: Readonly<{
  children: React.ReactNode;
  dialog: React.ReactNode;
}>) => {
  return (
    <>
      {dialog}
      <Header />
      {children}
    </>
  );
};

export default RootLayout;
