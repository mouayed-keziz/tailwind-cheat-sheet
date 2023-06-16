import React from "react";
import { FlexSection } from "./sheet-section";

export default function ComponentsSheet() {
    return (
        <>
            <SheetSection title="flex">
                <FlexSection />
            </SheetSection>
        </>
    );
}


interface SheetSectionProps {
    title: string;
    children: React.ReactNode;
}

function SheetSection({ title, children }: SheetSectionProps) {
    return (
        <>
            <h3 className="scroll-m-20 text-3xl font-semibold tracking-tight">
                {title} :
            </h3>
            <div>{children}</div>

        </>
    );
}


