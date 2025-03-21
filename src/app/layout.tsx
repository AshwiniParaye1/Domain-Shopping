//src/app/layout.tsx

import { Provider } from "@/components/ui/provider";

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <html suppressHydrationWarning suppressContentEditableWarning>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
