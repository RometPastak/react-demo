"use client";

import { NumberField, useLabels } from "@tehik-ee/tedi-react/tedi";

export default function NumberFieldPage() {
    const { getLabel } = useLabels();

    const decrement = getLabel('numberField.decrement', 4);
    const testin = getLabel("testin");

    return (
        <main className="flex flex-col items-center justify-center p-4 gap-4">
            <NumberField id="test-field-1" label="Count" />
        </main>
    );
}