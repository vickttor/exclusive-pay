import Image from "next/image";
import iphoneMockupPng from "@/assets/iphone-mockup.png";

import { Card } from "@/components/card";
import {
  CircleDollarSign,
  CloudCog,
  Cog,
  GraduationCap,
  ShoppingBasket,
} from "lucide-react";

export function SolutionsSection() {
  return (
    <section className="w-full p-8 md:p-12 lg:p-20 relative space-y-20">
      <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl text-foreground font-bold w-full text-center">
        Conheça nossas principais soluções
      </h2>

      <div className="w-full flex flex-col items-center justify-center gap-8">
        <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-8 lg:gap-[120px] 2xl:gap-[200px]">
          <Card
            className="min-w-[320px] w-[320px] h-[280px]"
            icon={
              <ShoppingBasket className="text-foreground bg-primary p-2 size-12 rounded-sm" />
            }
            title="E-commerce"
            content="Maximize suas vendas online com a inteligência Exclusive Pay. Nossa plataforma foi criada para impulsionar o seu e-commerce, eliminando taxas em parcelamentos e otimizando sua operação financeira."
          />

          <Card
            className="min-w-[320px] w-[320px] h-[280px]"
            icon={
              <Cog className="text-foreground bg-primary p-2 size-12 rounded-sm" />
            }
            title="Serviços"
            content="Potencialize suas vendas com uma plataforma de pagamentos inteligente, desenvolvida para atender as maiores demandas da sua empresa, acompanhada por taxa zero em parcelamentos."
          />
        </div>

        <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-8 lg:gap-[120px]  2xl:gap-8">
          <Card
            className="min-w-[320px] w-[320px] h-[280px]"
            icon={
              <CloudCog className="text-foreground bg-primary p-2 size-12 rounded-sm" />
            }
            title="Saas"
            content="Impulsione a assinatura de seus serviços SaaS com Exclusive Pay. Aproveite uma plataforma de pagamentos que se adapta à dinâmica do software como serviço, oferecendo flexibilidade e controle financeiro sem custos adicionais por parcelamento."
          />

          <Image
            src={iphoneMockupPng}
            alt="Iphone 15 Pro Max - Mockup Exclusive Pay"
            className="w-full hidden 2xl:block"
          />

          <Card
            className="min-w-[320px] w-[320px] h-[280px]"
            icon={
              <ShoppingBasket className="text-foreground bg-primary p-2 size-12 rounded-sm" />
            }
            title="Upsell"
            content="Otimize sua estratégia de Upsell com Exclusive Pay. Nossa solução de pagamentos é a aliada perfeita para aumentar o valor do seu carrinho de compras, com um processo de pagamento simplificado e zero taxas extras em parcelamentos."
          />
        </div>

        <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-8 lg:gap-[120px] 2xl:gap-[200px]">
          <Card
            className="min-w-[320px] w-[320px] h-[280px]"
            icon={
              <GraduationCap className="text-foreground bg-primary p-2 size-12 rounded-sm" />
            }
            title="Cursos"
            content="Eleve o potencial dos seus cursos online com Exclusive Pay. Nosso sistema de pagamentos é a solução definitiva para educadores digitais, com facilidades no parcelamento que expandem o acesso e potencializam inscrições."
          />

          <Card
            className="min-w-[320px] w-[320px] h-[280px]"
            icon={
              <CircleDollarSign className="text-foreground bg-primary p-2 size-12 rounded-sm" />
            }
            title="Assinaturas"
            content="Transforme a gestão de assinaturas com Exclusive Pay. Nosso gateway de pagamento oferece uma experiência de assinatura sem complicações para seus clientes, mantendo a previsibilidade financeira para você com zero taxa em parcelamentos."
          />
        </div>
      </div>

      <Image
        src={iphoneMockupPng}
        alt="Iphone 15 Pro Max - Mockup Exclusive Pay"
        className="mx-auto 2xl:hidden"
      />
    </section>
  );
}
