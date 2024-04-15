import {
  Card as Cardshadcn,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import { ReactNode } from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  icon: ReactNode;
  content: string;
}

export function Card({ className, ...props }: CardProps) {
  return (
    <Cardshadcn className={className}>
      <CardHeader className="flex flex-row items-center justify-start gap-8">
        {props.icon}
        <CardTitle>{props.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p
          title={props.content}
          className="line-clamp-[10] text-left text-ellipsis text-sm"
        >
          {props.content}
        </p>
      </CardContent>
    </Cardshadcn>
  );
}
