import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";


const TopLeft = { name: "Top-Left", classes: "items-start justify-start gap-1" }
const TopCenter = { name: "Top-Center", classes: "items-start justify-center gap-1" }
const TopRight = { name: "Top-Right", classes: "items-start justify-end gap-1" }
const CenterLeft = { name: "Center-Left", classes: "items-center justify-start gap-1" }
const CenterCenter = { name: "Center-Center", classes: "items-center justify-center gap-1" }
const CenterRight = { name: "Center-Right", classes: "items-center justify-end gap-1" }
const BottomLeft = { name: "Bottom-Left", classes: "items-end justify-start gap-1" }
const BottomCenter = { name: "Bottom-Center", classes: "items-end justify-center gap-1" }
const BottomRight = { name: "Bottom-Right", classes: "items-end justify-end gap-1" }


export default function FlexSection() {
    const arr = [
        TopLeft,
        TopCenter,
        TopRight,
        CenterLeft,
        CenterCenter,
        CenterRight,
        BottomLeft,
        BottomCenter,
        BottomRight
    ]
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {arr.map((element, index) => (
                <ComponentCard key={index} title={element.name} classes="hello" code="hello" >
                    <FlexPrototype config={element.classes} />
                </ComponentCard>
            ))}
        </div>
    );
}


interface ComponentCardProps {
    title: string;
    children: React.ReactNode;
    classes: string;
    code: string;
}
function ComponentCard({ title, classes, code, children }: ComponentCardProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                {/* <CardDescription>Card Description</CardDescription> */}
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
            <CardFooter>
                <div className="flex w-full items-center justify-around">

                    <Button className="flex items-center justify-center gap-2 " variant="outline">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-clipboard" width={24} height={24} viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"></path>
                            <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"></path>
                        </svg>
                        <p className="font-extrabold" >Copy</p>
                    </Button>
                </div>
            </CardFooter>
        </Card>
    );
}


interface FlexPrototypeProps {
    config: string
}
function FlexPrototype({ config }: FlexPrototypeProps) {
    return (
        <div className={`flex h-32 w-full ${config} rounded-lg border p-4`} >
            <SmallCircle color="bg-green-500" />
            <SmallCircle color="bg-yellow-400" />
            <SmallCircle color="bg-red-500" />
        </div>
    );
}

interface SmallCircleProps {
    color: string;
}
function SmallCircle({ color }: SmallCircleProps) {
    return (
        <div className={`h-3 w-3 rounded-full ${color}`}></div>
    );
}




