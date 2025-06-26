"use client";

import { LabelProvider } from "@tehik-ee/tedi-react/tedi";
import type { ReactNode } from "react";
import "@tehik-ee/tedi-react/index.css";

export default function Providers({ children }: { children: ReactNode | ReactNode[] }) {
    return (
        <LabelProvider>
            {children}
        </LabelProvider>
    );
}