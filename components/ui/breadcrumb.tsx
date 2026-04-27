import * as React from "react"
import { cn } from "@/lib/utils"

export function Breadcrumb({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      aria-label="breadcrumb"
      className={cn(className)}
      {...props}
    />
  )
}

export function BreadcrumbList({
  className,
  ...props
}: React.HTMLAttributes<HTMLOListElement>) {
  return (
    <ol
      className={cn("flex items-center space-x-2 text-sm", className)}
      {...props}
    />
  )
}

export function BreadcrumbItem({
  className,
  ...props
}: React.LiHTMLAttributes<HTMLLIElement>) {
  return (
    <li
      className={cn("inline-flex items-center", className)}
      {...props}
    />
  )
}

export const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement>
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

export function BreadcrumbSeparator({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn("mx-1", className)}
      {...props}
    >
      /
    </span>
  )
}
