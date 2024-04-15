import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";

import backgroundPng from "@/assets/background.png";
import CircleArrowDownStyledSvg from "@/assets/circle-arrow-down.svg";
import notebookPreviewPng from "@/assets/notebook-preview.png";
import SquareArrowRightVioletSvg from "@/assets/arrow-square-right-violet.svg";
import CreditCardPng from "@/assets/credit-card.png";
import JohnPng from "@/assets/john.png";

import WalletSvg from "@/assets/wallet.svg";
import CardSvg from "@/assets/card.svg";
import RocketSvg from "@/assets/rocket.svg";
import FireSvg from "@/assets/fire.svg";

import Image from "next/image";

import { CompaniesSlider } from "@/components/company-slider";
import { SolutionsSection } from "@/components/solutions";
import { Card } from "@/components/card";
import { World } from "@/components/world";
import {
  Building,
  CircleArrowOutUpRight,
  CloudCog,
  GraduationCap,
  ShoppingCart,
} from "lucide-react";

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

      <section className="w-full p-8 md:p-12 lg:p-20 relative flex flex-col lg:flex-row justify-center items-center gap-14 lg:gap-28">
        <div className="space-y-11">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl text-foreground font-bold max-w-[630px]">
            Transformando o Mundo dos Pagamentos Globalmente
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-foreground max-w-[630px]">
            Desbravando fronteiras, a Exclusive Pay transforma o mundo dos
            pagamentos, conectando e impactando comunidades globalmente.
          </p>
        </div>

        <World />
      </section>

      <SolutionsSection />

      <section className="w-full max-w-[1600px] mx-auto p-8 md:p-12 lg:p-20 relative flex justify-center items-center">
        <div className="w-full bg-primary flex flex-col items-center justify-center gap-11 rounded-3xl shadow-md p-11">
          <div className="space-y-4 md:space-y-6">
            <h3 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl text-foreground font-bold text-center">
              Conheça todas as nossas <br />
            </h3>
            <h3 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl text-foreground font-bold text-center text-[#CAABFF]">
              Funcionalidades!
            </h3>
          </div>

          <Button
            asChild
            variant="default"
            size="lg"
            className="flex items-center gap-4 p-6 lg:p-4 text-lg lg:text-sm bg-foreground text-primary"
          >
            <a href="#">
              <span>Começar a vender</span>
              <CircleArrowOutUpRight className="size-6 text-primary" />
            </a>
          </Button>
        </div>
      </section>

      <section className="w-full p-8 md:p-12 lg:p-20 relative flex flex-col justify-start items-center gap-12 md:gap-20">
        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl text-foreground font-bold text-center">
          Taxas e Tarifas
        </h2>

        <div className="w-full flex flex-col-reverse 2xl:flex-row items-center justify-center gap-12 2xl:gap-20">
          <ul className="space-y-10 w-full max-w-[800px]">
            <li className="w-full border-b-[1px] border-primary py-4 flex flex-row items-center gap-8 justify-between">
              <div className="flex items-center gap-6">
                <Image
                  src={SquareArrowRightVioletSvg}
                  alt="Square arrow right in violet color"
                  className="size-9 md:size-12"
                />
                <span className="text-sm sm:text-2xl font-bold">
                  Cartão de crédito D+2
                </span>
              </div>

              <span className="text-xl sm:text-2xl text-primary font-bold text-center">
                5,99%
              </span>
            </li>

            <li className="w-full border-b-[1px] border-primary py-4 flex flex-row items-center gap-8 justify-between">
              <div className="flex items-center gap-6">
                <Image
                  src={SquareArrowRightVioletSvg}
                  alt="Square arrow right in violet color"
                  className="size-9 md:size-12"
                />
                <span className="text-sm sm:text-2xl font-bold">Pix D+0</span>
              </div>

              <span className="text-xl sm:text-2xl text-primary font-bold text-center">
                2,99%
              </span>
            </li>

            <li className="w-full border-b-[1px] border-primary py-4 flex flex-row items-center gap-8 justify-between">
              <div className="flex items-center gap-6">
                <Image
                  src={SquareArrowRightVioletSvg}
                  alt="Square arrow right in violet color"
                  className="size-9 md:size-12"
                />
                <span className="text-sm sm:text-2xl font-bold">
                  Boleto D+0
                </span>
              </div>

              <span className="text-xl sm:text-2xl text-primary font-bold text-center">
                3,49%
              </span>
            </li>

            <li className="w-full border-b-[1px] border-primary py-4 flex flex-row items-center gap-8 justify-between">
              <div className="flex items-center gap-6">
                <Image
                  src={SquareArrowRightVioletSvg}
                  alt="Square arrow right in violet color"
                  className="size-9 md:size-12"
                />
                <span className="text-sm sm:text-2xl font-bold">
                  Tarifa por Saque
                </span>
              </div>

              <span className="text-xl sm:text-2xl text-green-600 font-bold text-center">
                R$5,00
              </span>
            </li>
          </ul>

          <Image src={CreditCardPng} alt="Crid Card Mockup" />
        </div>
      </section>

      <section className="w-full p-8 md:p-12 lg:p-20 relative flex flex-col justify-start items-center gap-12 md:gap-20">
        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl text-foreground font-bold text-center">
          Por que escolher a Exclusive Pay?
        </h2>

        <div className="w-full flex flex-col 2xl:flex-row items-center justify-between  max-w-[1400px]">
          <Image
            src={JohnPng}
            alt="A man using an iphone to access the Exclusive Pay application"
            className="mx-auto"
          />

          <div className="flex flex-col items-start justify-start gap-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card
                className="w-full xs:w-[320px] h-[186px] bg-secondary"
                icon={<Image src={WalletSvg} alt="Wallet Image" />}
                title="Recebimento PIX em D+0"
                content="Receba pagamentos PIX no mesmo dia"
              />

              <Card
                className="w-full xs:w-[320px] h-[186px] bg-secondary"
                icon={<Image src={CardSvg} alt="Wallet Image" />}
                title="Recebimento cartão em D+2"
                content="Pagamentos em sua conta em 2 dias, com taxas super baixas"
              />

              <Card
                className="w-full xs:w-[320px] h-[186px] bg-secondary"
                icon={<Image src={FireSvg} alt="Wallet Image" />}
                title="Checkout de alta conversão"
                content="Checkout testado e aprovado com altos níveis de conversão"
              />

              <Card
                className="w-full xs:w-[320px] h-[186px] bg-secondary"
                icon={<Image src={RocketSvg} alt="Wallet Image" />}
                title="Taxa de aprovação 98%"
                content="Uma das melhores taxas de aprovação do mercado"
              />
            </div>

            <Button
              variant="default"
              size="lg"
              asChild
              className="bg-gradient-to-b from-[#4D0FBA] to-[#9566E5] py-8"
            >
              <a href="#">Abra sua conta</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
