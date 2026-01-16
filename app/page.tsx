import Link from "next/link";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Navbar } from "@/registry/default/ui/navbar";

export default function Page() {
  return (
    <div className="bg-background text-foreground flex min-h-svh flex-col">
      <Navbar
        brandText="CoreUI"
        links={[
          { href: "/docs/components", label: "Components" },
          { href: "/docs", label: "Docs" },
          { href: "https://github.com/itzzjustmateo/core_ui", label: "GitHub" },
        ]}
      />

      <main className="flex flex-1 items-center">
        <div className="mx-auto w-full max-w-7xl px-4 py-16">
          <div className="bg-muted/30 border-border rounded-2xl border p-8 md:p-12">
            <div className="max-w-2xl">
              <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
                CoreUI
              </h1>
              <p className="text-muted-foreground mt-3 text-base md:text-lg">
                A clean, reusable UI foundation for your Next.js app.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button variant="default" size="default">
                  <Link href="/docs/components">Browse components</Link>
                </Button>
                <Button variant="outline" size="default">
                  <Link href="/docs">Read docs</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <div className="bg-card text-card-foreground border-border rounded-xl border p-5">
              <div className="text-sm font-medium">Registry-ready</div>
              <div className="text-muted-foreground mt-1 text-sm">
                Components live under{" "}
                <span className="font-mono">registry/default</span>.
              </div>
            </div>
            <div className="bg-card text-card-foreground border-border rounded-xl border p-5">
              <div className="text-sm font-medium">Softcoded</div>
              <div className="text-muted-foreground mt-1 text-sm">
                Props-first APIs so you can adapt components without forking.
              </div>
            </div>
            <div className="bg-card text-card-foreground border-border rounded-xl border p-5">
              <div className="text-sm font-medium">Tailwind-native</div>
              <div className="text-muted-foreground mt-1 text-sm">
                Built with utility classes and sensible defaults.
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
