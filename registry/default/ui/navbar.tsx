import * as React from "react";

import { cn } from "@/lib/utils";

type NavbarLink = {
  href: string;
  label: string;
};

function Navbar({
  className,
  onlyLogo = false,
  brandText = "CoreUI",
  logo,
  links = [],
  ...props
}: React.ComponentProps<"nav"> & {
  onlyLogo?: boolean;
  brandText?: string;
  logo?: React.ReactNode;
  links?: NavbarLink[];
}) {
  return (
    <nav
      data-slot="navbar"
      className={cn("bg-background w-full border-b", className)}
      {...props}
    >
      <div className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between px-4">
        <div className="flex items-center gap-2">
          {logo ?? (
            <div className="bg-muted text-muted-foreground flex size-8 items-center justify-center rounded-md text-xs font-medium">
              L
            </div>
          )}
          {!onlyLogo && (
            <span className="text-sm font-semibold leading-none">
              {brandText}
            </span>
          )}
        </div>

        {links.length > 0 ? (
          <div className="flex items-center gap-4">
            {links.map((link) => (
              <a
                key={`${link.href}-${link.label}`}
                href={link.href}
                className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </nav>
  );
}

export { Navbar };
export type { NavbarLink };
