"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CircleArrowRight } from "lucide-react";
import { useMediaQuery } from "@/lib/mediaQuery";
import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import HamburgerMenuIconSvg from "@/assets/hamburger-menu.svg";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const matches1024px = useMediaQuery("(min-width: 1024px)");

  useEffect(() => {
    if (matches1024px) setIsMenuOpen(false);
  }, [matches1024px]);

  const NavLinks = () => {
    return (
      <>
        <ul className="flex flex-col lg:flex-row items-center justify-center gap-6">
          <li>
            <Button
              asChild
              variant="link"
              className="text-[18px] lg:text-sm text-primary p-0 font-medium tracking-wider"
            >
              <a href="#initial">Início</a>
            </Button>
          </li>

          <li>
            <Button
              asChild
              variant="link"
              className="text-[18px] lg:text-sm text-foreground p-0 font-medium tracking-wider"
            >
              <a href="#solutions">Soluções</a>
            </Button>
          </li>

          <li>
            <Button
              asChild
              variant="link"
              className="text-[18px] lg:text-sm text-foreground p-0 font-medium tracking-wide"
            >
              <a href="#reason">Por que a Exclusive Pay</a>
            </Button>
          </li>

          <li>
            <Button
              asChild
              variant="link"
              className="text-[18px] lg:text-sm text-foreground p-0 font-medium tracking-wider"
            >
              <a href="#doubts">Dúvidas</a>
            </Button>
          </li>
        </ul>

        <Separator
          orientation="vertical"
          className="h-[30px] bg-[#181818] hidden lg:block"
        />

        <section className="flex mt-8 lg:mt-0 flex-col lg:flex-row justify-center items-center gap-6">
          <Button
            asChild
            variant="link"
            className="p-2 text-lg lg:text-sm tracking-wider"
          >
            <a href="#">Entrar</a>
          </Button>

          <Button
            asChild
            variant="default"
            size="lg"
            className="flex items-center gap-4 p-6 lg:p-4 text-lg lg:text-sm"
          >
            <a href="#">
              <span>Criar uma conta</span>
              <CircleArrowRight className="size-6" />
            </a>
          </Button>
        </section>
      </>
    );
  };

  return (
    <nav className="sticky top-0 right-0 left-0 mx-auto w-full max-w-[1060px] gap-6 flex items-center justify-between px-12 py-4 bg-background backdrop-blur-lg rounded-bl-3xl rounded-br-3xl">
      <Image
        src="/logo.svg"
        alt="Exclusive Pay Purple and Black Logo"
        priority
        width={120}
        height={48}
      />

      <div className="items-center gap-12 hidden lg:flex">
        <NavLinks />
      </div>

      <Dialog open={isMenuOpen} onOpenChange={(open) => setIsMenuOpen(open)}>
        <DialogTrigger asChild>
          <Button variant={"ghost"} size={"icon"} className="block lg:hidden">
            <Image
              src={HamburgerMenuIconSvg}
              alt="Hamburger Menu Icon SVG"
              width={48}
              height={48}
            />
          </Button>
        </DialogTrigger>

        <DialogContent>
          <NavLinks />
        </DialogContent>
      </Dialog>
    </nav>
  );
}