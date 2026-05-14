"use client"

import * as React from "react"

interface CollapsibleProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
  className?: string
}

interface CollapsibleContextType {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const CollapsibleContext = React.createContext<CollapsibleContextType>({
  open: false,
  onOpenChange: () => {},
})

function Collapsible({ open: controlledOpen, onOpenChange, children, className }: CollapsibleProps) {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(false)
  
  const isOpen = controlledOpen !== undefined ? controlledOpen : uncontrolledOpen
  const setOpen = onOpenChange || setUncontrolledOpen

  return (
    <CollapsibleContext.Provider value={{ open: isOpen, onOpenChange: setOpen }}>
      <div className={className}>{children}</div>
    </CollapsibleContext.Provider>
  )
}

interface CollapsibleTriggerProps {
  children: React.ReactNode
  asChild?: boolean
  className?: string
}

function CollapsibleTrigger({ children, asChild, className }: CollapsibleTriggerProps) {
  const { open, onOpenChange } = React.useContext(CollapsibleContext)
  
  const handleClick = () => {
    onOpenChange(!open)
  }

  if (asChild) {
    return (
      <div onClick={handleClick} className={className} style={{ cursor: 'pointer' }}>
        {children}
      </div>
    )
  }

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  )
}

interface CollapsibleContentProps {
  children: React.ReactNode
  className?: string
}

function CollapsibleContent({ children, className }: CollapsibleContentProps) {
  const { open } = React.useContext(CollapsibleContext)
  
  if (!open) return null

  return (
    <div className={className}>
      {children}
    </div>
  )
}

export { Collapsible, CollapsibleTrigger, CollapsibleContent }
