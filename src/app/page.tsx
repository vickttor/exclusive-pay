import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";

import notebookPreviewPng from "@/assets/notebook-preview.png";
import CircleArrowDownStyledSvg from "@/assets/circle-arrow-down.svg";
import backgroundPng from "@/assets/background.png";

import Image from "next/image";

import { Building, CloudCog, GraduationCap, ShoppingCart } from "lucide-react";
import { CompaniesSlider } from "@/components/company-slider";

export default function Home() {
  return (
    <>
      <Navbar />

      <main
        id="initial"
        className={
          "min-h-dvh w-full p-8 md:p-12 lg:p-20 relative flex flex-col justify-center items-center gap-11"
        }
      >
        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl text-center text-foreground font-bold max-w-[900px]">
          Explore o futuro dos pagamentos online com a Exclusive Pay.
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl text-center text-foreground max-w-[700px]">
          <strong>Simples pagamentos</strong>, conexões reais. Encontre tudo que
          precisa para processar seus pagamentos digitais com segurança na
          Exclusive Pay.
        </p>
        <Button size={"lg"} className="p-4">
          <a href="#">Começar a vender</a>
        </Button>

        <Image
          src={notebookPreviewPng}
          alt="Exclusive Pay Dashboard Preview in Notebook template"
        />

        <div className="space-y-6 mx-auto">
          <h3 className="text-foreground text-2xl text-center font-bold">
            Soluções para
          </h3>
          <ul className="flex flex-wrap items-center justify-center gap-11">
            <li>
              <div className="flex items-center justify-start gap-6">
                <ShoppingCart className="size-6 md:size-9" />
                <span className="text-foreground font-normal text-md md:text-[18px]">
                  Lojas Virtuais
                </span>
              </div>
            </li>
            <li>
              <div className="flex items-center justify-start gap-6">
                <GraduationCap className="size-6 md:size-9" />
                <span className="text-foreground font-normal text-md md:text-[18px]">
                  Cursos Onlines
                </span>
              </div>
            </li>
            <li>
              <div className="flex items-center justify-start gap-6">
                <Building className="size-6 md:size-9" />
                <span className="text-foreground font-normal text-md md:text-[18px]">
                  Agências
                </span>
              </div>
            </li>
            <li>
              <div className="flex items-center justify-start gap-6">
                <CloudCog className="size-6 md:size-9" />
                <span className="text-foreground font-normal text-md md:text-[18px]">
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

        <Image
          src={backgroundPng}
          alt="Background of the initial section"
          className="absolute z-[-1] inset-0 mx-auto top-40 opacity-30"
        />
      </main>

      <CompaniesSlider />
    </>
  );
}
