import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";

import backgroundPng from "@/assets/background.png";
import CircleArrowDownStyledSvg from "@/assets/circle-arrow-down.svg";
import notebookPreviewPng from "@/assets/notebook-preview.png";
import SquareArrowRightVioletSvg from "@/assets/arrow-square-right-violet.svg";
import CreditCardPng from "@/assets/credit-card.png";
import JohnPng from "@/assets/john.png";
import TrophySvg from "@/assets/trophy.svg";

import Award10K from "@/assets/award-10k.png";
import Award20K from "@/assets/award-20k.png";
import Award500K from "@/assets/award-500k.png";

import LightFooterLogoPng from "@/assets/light-footer-logo.png";

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
  MessageCircle,
  ShoppingCart,
} from "lucide-react";
import Doubts from "@/components/doubts";

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
        <Button size={"lg"} className="py-8 px-4">
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
            className="flex items-center gap-4 py-8 px-6 text-lg lg:text-sm bg-foreground text-primary hover:bg-foreground/85"
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

      <section className="w-full p-8 md:p-12 lg:p-20 relative flex flex-col justify-start items-center gap-12 md:gap-20">
        <div className="flex flex-col items-center justify-center gap-11">
          <Image src={TrophySvg} alt="Gold Trophy Svg" className="size-16" />

          <div className="flex flex-col items-center justify-center gap-6">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl text-foreground font-bold text-center">
              Placas de Premiações em Faturamento
            </h2>
            <p className="font-normal text-xl sm:text-2xl text-center">
              Suas conquistas reconhecidas e guardadas. Procure novos desafios a
              cada placa.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center flex-wrap gap-12">
          <Image src={Award10K} alt="Prize 10k" />
          <Image src={Award20K} alt="Prize 20k" />
          <Image src={Award500K} alt="Prize 500k" />
        </div>
      </section>

      <div className="bg-gradient-to-b from-background via-background to-[#2C076E]">
        <section className="w-full p-8 md:p-12 lg:p-20 relative flex flex-col justify-start items-center gap-12 md:gap-20">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl text-foreground font-bold text-center">
            Principais Dúvidas
          </h2>

          <Doubts />

          <div className="w-full flex flex-col items-center justify-center gap-8">
            <p className="text-xl md:text-2xl">
              Ainda ficou com alguma dúvida?
            </p>
            <Button
              asChild
              variant="default"
              size="lg"
              className="flex items-center gap-4 py-8 px-6 text-lg lg:text-sm bg-foreground text-primary hover:bg-foreground/85"
            >
              <a href="#">
                <span>Falar com suporte</span>
                <MessageCircle className="size-6 text-primary" />
              </a>
            </Button>
          </div>
        </section>

        <footer className="w-full pt-12 sm:py-16 sm:px-8 md:px-12 lg:px-20 relative flex flex-col justify-start items-center">
          <div className="w-full  max-w-[1600px] bg-background sm:rounded-3xl shadow-lg space-y-20 p-11">
            <div className="flex flex-col items-start justify-start lg:flex-row lg:justify-between gap-12">
              <Image
                src={LightFooterLogoPng}
                alt="Light Exclusive Pay Logo"
                className="size-[150px] rounded-2xl"
              />

              <div className="flex flex-row flex-wrap md:flex-nowrap items-start justify-start gap-20">
                <div className="flex flex-col items-start justify-start gap-6">
                  <strong>Exclusive Pay</strong>

                  <ul className="flex flex-col items-start justify-start gap-4">
                    <li>
                      <a href="#">Sobre nós</a>
                    </li>
                    <li>
                      <a href="#">Soluções</a>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col items-start justify-start gap-6">
                  <strong>Recursos</strong>

                  <ul className="flex flex-col items-start justify-start gap-4">
                    <li>
                      <a href="#">Integrações</a>
                    </li>
                    <li>
                      <a href="#">Central de Ajuda</a>
                    </li>
                    <li>
                      <a href="#">Trabalhe conosco</a>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col items-start justify-start gap-6">
                  <strong>Termos</strong>

                  <ul className="flex flex-col items-start justify-start gap-4">
                    <li>
                      <a href="#">Termos de uso</a>
                    </li>
                    <li>
                      <a href="#">Política de privacidade</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between gap-6 flex-wrap">
              <p>&copy; 2024 Exclusive Pay | Todos os direitos reservados.</p>

              <p>CNPJ: 11.222.333/0000-99</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
