"use client";
import { memo } from "react";
import { Button } from "@/components/ui/button";

function FilterBar({ options, value, onChange, showAll = true, allLabel = "全部" }) {
    return (
        <div className="flex flex-wrap justify-center gap-2">
            <div className="grid grid-cols-3 md:grid-cols-6 gap-5">
                {showAll && (
                    <Button
                        onClick={() => onChange("")}
                        variant={value === "" ? "default" : "outline"}
                        size="sm"
                        className="rounded-xl w-16 h-8 md:w-24 md:h-12 text-xl bg-myyellow"
                    >
                        {allLabel}
                    </Button>
                )}
                {options.map((x) => (
                    <Button
                        key={x}
                        onClick={() => onChange(x)}
                        variant={x === value ? "default" : "outline"}
                        size="lg"
                        className="rounded-xl  w-16 h-8 md:w-24 md:h-12 text-xl bg-myyellow"
                    >
                        {x}
                    </Button>
                ))}
            </div>
        </div>
    );
}

export default memo(FilterBar);