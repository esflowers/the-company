import * as React from "react"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(({ className, type, ...props }, ref) => {
        return (
            <input
                type={type}
                className={`flex h-9 w-full border-b border-primary-800 bg-transparent p-1 text-base transition-colors duration-100 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-primary-400 focus-visible:outline-none focus-visible:border-primary-100 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
                ref={ref}{...props}
            />
        )
    }
)

Input.displayName = "Input"
export { Input }