import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Doubts() {
  return (
    <Accordion type="single" collapsible className="w-full space-y-6">
      <AccordionItem
        value="item-1"
        className="w-full mx-auto max-w-[910px] border-2 border-primary rounded-lg p-6"
      >
        <AccordionTrigger>
          <h3 className="w-full flex-2 text-lg text-center">
            O que é um banco digital?
          </h3>
        </AccordionTrigger>
        <AccordionContent className="w-full text-center font-normal text-lg mt-6">
          É um banco que disponibiliza o serviço totalmente online. Todo o
          dinheiro é virtual, o que diminui custos com agências físicas,
          funcionários, aumenta a segurança e dá mais agilidade para as
          operações! Dessa forma conseguimos diminuir as taxas para os usuários
          😉
        </AccordionContent>
      </AccordionItem>

      <AccordionItem
        value="item-2"
        className="w-full mx-auto max-w-[910px] border-2 border-primary rounded-lg p-6"
      >
        <AccordionTrigger>
          <h3 className="w-full flex-2 text-lg text-center">
            O que é gateway de pagamento?
          </h3>
        </AccordionTrigger>
        <AccordionContent className="w-full text-center font-normal text-lg mt-6">
          O gateway de pagamento é um serviço oferecido a lojas virtuais, SaaS e
          empresas de grande porte, que recebe, autoriza e confere pagamentos de
          transações online de maneira rápida e segura, seja por PIX, boleto ou
          cartão de crédito e débito.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem
        value="item-3"
        className="w-full mx-auto max-w-[910px] border-2 border-primary rounded-lg p-6"
      >
        <AccordionTrigger>
          <h3 className="w-full flex-2 text-lg text-center">
            Porque a Exclusive Pay tem as melhores taxas do mercado?
          </h3>
        </AccordionTrigger>
        <AccordionContent className="w-full text-center font-normal text-lg mt-6">
          Temos um contrato exclusivo com a melhor adquirente do mercado,
          possibilitando taxas menores em cada transação. Pensando em botar mais
          dinheiro no bolso de nossos usuários, repassamos os descontos pra
          todos!
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
