import { IconPdf } from "@tabler/icons-react";

export function SupportedDocument() {
  return (
    <div className="group border-secondary/40 text-card-foreground relative col-span-12 flex flex-col overflow-hidden rounded-xl border-2 p-6 shadow-xl transition-all ease-in-out md:col-span-6 xl:col-span-4">
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl leading-none font-semibold tracking-tight">
          🛠️ CLI & Manual Support
        </h3>
        <div className="text-md text-muted-foreground flex flex-col gap-2 text-sm">
          <p className="max-w-[460px]">
            Integrate your landing page directly in the product while using your
            favorite tools.
          </p>
        </div>
      </div>
      <div className="pointer-events-none flex grow items-end justify-center select-none">
        <div className="-mr-32 -ml-40">
          <div className="relative grid h-[318px] w-[534px] grid-flow-col grid-cols-5 grid-rows-6 gap-6">
            <div className="row-span-2 row-start-2"></div>
            <div className="fade-left-lg bg-gradient z-1 row-span-2 rounded-xl bg-gradient-to-b from-black/5 to-transparent transition-all duration-1000 ease-in-out dark:from-white/5"></div>
            <div className="fade-top-lg z-1 row-span-2 rounded-xl bg-gradient-to-t from-black/5 to-transparent transition-all duration-1000 ease-in-out dark:from-white/5" />
            <div className="glass rose outline-border/30 dark:outline-background/30 relative z-10 row-span-2 flex items-center justify-center rounded-xl to-transparent outline-4 transition-all duration-1000 ease-in-out group-hover:scale-105">
              <div className="after:from-primary-foreground/30 after:to-primary-foreground/0 relative after:absolute after:inset-0 after:scale-200 after:rounded-full after:bg-radial after:from-10% after:to-60% after:content-['']">
                <div className="text-light relative z-10">
                  <IconPdf className="w-8 h-8 select-none" />
                  {/* {theme === "dark" ? (
                    <img
                      src="/features-nextjs-dark.webp"
                      alt="Next.js logo dark"
                      width={32}
                      height={32}
                      className="h-8 w-8 select-none"
                      draggable={false}
                    />
                  ) : (
                    <img
                      src="/features-nextjs-light.webp"
                      alt="Next.js logo light"
                      width={32}
                      height={32}
                      className="h-8 w-8 select-none"
                      draggable={false}
                    />
                  )} */}
                </div>
              </div>
            </div>
            <div className="fade-bottom-lg z-1 row-span-2 rounded-xl bg-gradient-to-b from-black/5 to-transparent transition-all duration-1000 ease-in-out dark:from-white/5"></div>
            <div className="glass rose outline-border/30 dark:outline-background/30 relative z-10 row-span-2 row-start-2 flex items-center justify-center rounded-xl outline-4 transition-all duration-1000 ease-in-out group-hover:scale-90">
              <div className="after:from-primary-foreground/30 after:to-primary-foreground/0 relative after:absolute after:inset-0 after:scale-200 after:rounded-full after:bg-radial after:from-10% after:to-60% after:content-['']">
                <div className="text-light relative z-10 flex h-8 w-8 items-center justify-center">
                  <img
                    src="/tailwind.webp"
                    alt="Tailwind CSS logo"
                    width={32}
                    height={32}
                    className="h-8 w-8 select-none"
                    draggable={false}
                  />
                </div>
              </div>
            </div>
            <div className="glass rose outline-border/30 dark:outline-background/30 relative z-10 row-span-2 flex items-center justify-center rounded-xl to-transparent outline-4 transition-all duration-1000 ease-in-out group-hover:scale-90">
              <div className="after:from-primary-foreground/30 after:to-primary-foreground/0 relative after:absolute after:inset-0 after:scale-200 after:rounded-full after:bg-radial after:from-10% after:to-60% after:content-['']">
                <div className="text-light relative z-10">
                  <img
                    src="/framer.webp"
                    alt="Framer logo"
                    width={32}
                    height={32}
                    className="h-8 w-8 select-none"
                    draggable={false}
                  />
                </div>
              </div>
            </div>
            <div className="fade-top-lg z-1 row-span-2 rounded-xl bg-gradient-to-t from-black/5 to-transparent transition-all duration-1000 ease-in-out dark:from-white/5"></div>
            <div className="glass rose outline-border/30 dark:outline-background/30 relative z-10 row-span-2 flex items-center justify-center rounded-xl to-transparent outline-4 transition-all duration-1000 ease-in-out group-hover:scale-105">
              <div className="after:from-primary-foreground/30 after:to-primary-foreground/0 relative after:absolute after:inset-0 after:scale-200 after:rounded-full after:bg-radial after:from-10% after:to-60% after:content-['']">
                <div className="text-light relative z-10">
                  <img
                    src="/typescript.webp"
                    alt="TypeScript logo"
                    width={32}
                    height={32}
                    className="h-8 w-8 select-none"
                    draggable={false}
                  />
                </div>
              </div>
            </div>
            <div className="fade-right-lg z-1 row-span-2 rounded-xl bg-gradient-to-b from-black/5 to-transparent transition-all duration-1000 ease-in-out dark:from-white/5"></div>
            <div className="glass rose outline-border/30 dark:outline-background/30 relative z-10 row-span-2 row-start-2 flex items-center justify-center rounded-xl to-transparent outline-4 transition-all duration-1000 ease-in-out group-hover:scale-[.8]">
              <div className="after:from-primary-foreground/30 after:to-primary-foreground/0 relative after:absolute after:inset-0 after:scale-200 after:rounded-full after:bg-radial after:from-10% after:to-60% after:content-['']">
                <div className="text-light relative z-10"></div>
              </div>
            </div>
            <div className="fade-right-lg z-1 row-span-2 rounded-xl bg-gradient-to-b from-black/5 to-transparent transition-all duration-1000 ease-in-out dark:from-white/5"></div>
            <div className="absolute bottom-0 w-full translate-y-20 scale-x-[1.2] opacity-70 transition-all duration-1000 group-hover:translate-y-8 group-hover:opacity-100">
              <div className="from-primary/50 to-primary/0 absolute left-1/2 h-[256px] w-[60%] -translate-x-1/2 scale-[2.5] rounded-[50%] bg-radial from-10% to-60% opacity-20 sm:h-[512px] dark:opacity-100"></div>
              <div className="from-primary/30 to-primary/0 absolute left-1/2 h-[128px] w-[40%] -translate-x-1/2 scale-200 rounded-[50%] bg-radial from-10% to-60% opacity-20 sm:h-[256px] dark:opacity-100"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
