import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import { NextFont } from "next/dist/compiled/@next/font";
import ToQueryClientProvider from "@/services/QueryClient";
import "../styles/GlobalStyles.scss";
import AppProvider from "@/contexts/AppProvider";

export const metadata: Metadata = {
  title: {
    default: 'Todo List | FocalPoint',
    template: '%s | FocalPoint'
  },
  description: "FocalPoint é o seu destino online para organização e produtividade. Gerencie suas tarefas de forma eficiente, projete sua rotina e aprenda a otimizar seu tempo. Descubra recursos personalizados que ajudam você a alcançar suas metas e ter controle total sobre suas atividades diárias.",
};

const InterTight: NextFont = Inter_Tight({ subsets: ["latin"], weight: ['400', '500']});

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <>
    <ToQueryClientProvider>
      <AppProvider>
        <html lang="pt-br">
          <body className={InterTight.className}>
            {children}
          </body>
        </html>
      </AppProvider>
    </ToQueryClientProvider>
    </>
  );
}