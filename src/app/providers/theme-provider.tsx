"use client"

/* Need to check the video on 12.46 for any error*/

import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";
import * as React from "react";

export default function NextThemeProvider({ 
    children, 
}: {
     children: ReactNode;
     }) {
    return (
        <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
        
        {children}
    
    </ThemeProvider>
    );
}

