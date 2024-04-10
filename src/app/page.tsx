import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";

import notebookPreviewSvg from "@/assets/notebook-preview.svg";
import CircleArrowDownStyledSvg from "@/assets/circle-arrow-down.svg";

import Image from "next/image";

import {
  Building,
  CircleArrowDown,
  CloudCog,
  GraduationCap,
  ShoppingCart,
} from "lucide-react";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-dvh w-full p-20 relative flex flex-col justify-center items-center gap-11">
        <h1 className="text-5xl text-center text-foreground font-bold max-w-[900px]">
          Explore o futuro dos pagamentos online com a Exclusive Pay.
        </h1>
        <p className="text-2xl text-center text-foreground max-w-[700px]">
          <strong>Simples pagamentos</strong>, conexões reais. Encontre tudo que
          precisa para processar seus pagamentos digitais com segurança na
          Exclusive Pay.
        </p>
        <Button size={"lg"} className="p-4">
          <a href="#">Começar a vender</a>
        </Button>

        <Image
          src={notebookPreviewSvg}
          alt="Exclusive Pay Dashboard Preview in Notebook template"
        />

        <div className="space-y-6 mx-auto">
          <h3 className="text-foreground text-2xl text-center font-bold">
            Soluções para
          </h3>
          <ul className="flex items-center justify-center gap-11">
            <li>
              <div className="flex items-center justify-start gap-6">
                <ShoppingCart className="size-9" />
                <span className="text-foreground font-normal text-[18px]">
                  Lojas Virtuais
                </span>
              </div>
            </li>
            <li>
              <div className="flex items-center justify-start gap-6">
                <GraduationCap className="size-9" />
                <span className="text-foreground font-normal text-[18px]">
                  Cursos Onlines
                </span>
              </div>
            </li>
            <li>
              <div className="flex items-center justify-start gap-6">
                <Building className="size-9" />
                <span className="text-foreground font-normal text-[18px]">
                  Agências
                </span>
              </div>
            </li>
            <li>
              <div className="flex items-center justify-start gap-6">
                <CloudCog className="size-9" />
                <span className="text-foreground font-normal text-[18px]">
                  Saas
                </span>
              </div>
            </li>
          </ul>
        </div>

        <Image
          src={CircleArrowDownStyledSvg}
          alt="Circle Arrow Down Icon"
          className="animate-bounce"
        />
      </main>
    </>
  );
}
