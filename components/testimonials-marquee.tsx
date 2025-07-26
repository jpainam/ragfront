"use client";

import { Marquee } from "@/components/ui/marquee";
import { testimonials } from "@/data/testimonials";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

export interface TestimonialCardProps {
  name: string;
  role: string;
  img?: string;
  description: React.ReactNode;
  className?: string;
  [key: string]: any;
}

export function TestimonialCard({
  description,
  name,
  img,
  role,
  className,
  ...props // Capture the rest of the props
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "mb-4 flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4",
        // theme styles
        "border border-border bg-card/50 shadow-sm",
        // hover effect
        "transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md",
        className
      )}
      {...props}
    >
      <div className="select-none text-sm font-normal text-muted-foreground">
        {description}
        <div className="flex flex-row py-1">
          <Star className="size-4 fill-primary text-primary" />
          <Star className="size-4 fill-primary text-primary" />
          <Star className="size-4 fill-primary text-primary" />
          <Star className="size-4 fill-primary text-primary" />
          <Star className="size-4 fill-primary text-primary" />
        </div>
      </div>

      <div className="flex w-full select-none items-center justify-start gap-5">
        <Image
          width={40}
          height={40}
          src={img || ""}
          alt={name}
          className="size-10 rounded-full ring-1 ring-primary/20 ring-offset-2"
        />

        <div>
          <p className="font-medium text-foreground">{name}</p>
          <p className="text-xs font-normal text-muted-foreground">{role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className=" overflow-x-hidden relative py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="mb-4 text-center text-4xl font-bold leading-[1.2] tracking-tighter text-foreground md:text-5xl">
          What Our Users Are Saying
        </h2>
        {/* <h3 className="mx-auto mb-8 max-w-lg text-balance text-center text-lg font-medium tracking-tight text-muted-foreground">
          Don&apos;t just take our word for it. Here&apos;s what{" "}
          <span className="bg-gradient-to-r from-primary to-sky-500 bg-clip-text text-transparent">
            students
          </span>{" "}
          are saying about{" "}
          <span className="font-semibold text-primary">Cndocs</span>
        </h3> */}
      </motion.div>

      <div className="relative mt-6 max-h-screen max-w-7xl mx-auto overflow-hidden rounded-xl">
        <div className="gap-4 md:columns-2 xl:columns-3">
          {Array(Math.ceil(testimonials.length / 3))
            .fill(0)
            .map((_, i) => (
              <Marquee
                vertical
                key={i}
                className={cn({
                  "[--duration:60s]": i === 1,
                  "[--duration:30s]": i === 2,
                  "[--duration:70s]": i === 3,
                  "[--duration:50s]": i === 4,
                })}
              >
                {testimonials.slice(i * 3, (i + 1) * 3).map((card, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: Math.random() * 0.8,
                      duration: 1.2,
                    }}
                  >
                    <TestimonialCard {...card} />
                  </motion.div>
                ))}
              </Marquee>
            ))}
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 w-full bg-gradient-to-t from-background from-20%"></div>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 w-full bg-gradient-to-b from-background from-20%"></div>
      </div>
    </section>
  );
}
