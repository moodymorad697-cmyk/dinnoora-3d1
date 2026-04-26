import * as React from "react"
import { cn } from "@/lib/utils"

export interface BreadcrumbLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  BreadcrumbLinkProps
>(({ className, ...props }, ref) => {
  return (
    <a
      ref={ref}
      className={cn("hover:text-foreground transition-colors", className)}
      {...props}
    />
  )
})

BreadcrumbLink.displayName = "BreadcrumbLink"
