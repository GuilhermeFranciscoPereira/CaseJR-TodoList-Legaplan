import type { Metadata } from "next";
import "../styles/GlobalStyles.scss";

export const metadata: Metadata = {
  title: {
    default: 'Todo List | FocalPoint',
    template: '%s | FocalPoint'
  },
  description: "FocalPoint é o seu destino online para organização e produtividade. Gerencie suas tarefas de forma eficiente, projete sua rotina e aprenda a otimizar seu tempo. Descubra recursos personalizados que ajudam você a alcançar suas metas e ter controle total sobre suas atividades diárias.",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}