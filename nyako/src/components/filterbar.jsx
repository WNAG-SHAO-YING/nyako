"use client";
import { memo } from "react";
import { Button } from "@/components/ui/button";

function FilterBar({ options, value, onChange, showAll = true, allLabel = "全部" }) {
    return (
        <div className="flex flex-wrap gap-2">
            {showAll && (
                <Button
                    onClick={() => onChange("")}
                    variant={value === "" ? "default" : "outline"}
                    size="sm"
                    className="rounded-xl"
                >
                    {allLabel}
                </Button>
            )}
            {options.map((x) => (
                <Button
                    key={x}
                    onClick={() => onChange(x)}
                    variant={x === value ? "default" : "outline"}
                    size="sm"
                    className="rounded-xl"
                >
                    {x}
                </Button>
            ))}
        </div>
    );
}

export default memo(FilterBar);