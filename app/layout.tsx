export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#050507] text-[#E5E7EB]">{children}</body>
    </html>
  );
}
