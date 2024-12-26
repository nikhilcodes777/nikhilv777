import { cn } from "@/lib/utils"
import React from "react"

interface MaxWidthWrapperProps {
  children: React.ReactNode,
  className?: string
}
const MaxWidthWrapper = ({ children, className }: MaxWidthWrapperProps) => {
  return (
    <div className={cn("mx-auto max-w-screen-xl w-full my-12", className)}>
      {children}
    </div>
  )
}

export default MaxWidthWrapper
