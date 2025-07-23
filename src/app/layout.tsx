import { rootMetadata } from "@/config/metadata";
import "./globals.css";
import { PublicLayout } from "@/public/PublicLayout";

export const metadata = rootMetadata;

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" dir="rtl">
      <body className={`w-screen h-screen flex flex-col overflow-x-hidden`}>
        <PublicLayout>{children}</PublicLayout>
      </body>
    </html>
  );
};

export default RootLayout;
