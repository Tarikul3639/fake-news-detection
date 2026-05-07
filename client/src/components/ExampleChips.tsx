"use client";

const EXAMPLES = {
    "Fake news sample":
        "BREAKING: Scientists CONFIRM that drinking hot water with lemon every morning DESTROYS cancer cells 10,000 times more effectively than chemotherapy! Big Pharma doesn't want you to know this SECRET that doctors have been hiding for DECADES. Share this before it gets DELETED! The globalist media is suppressing this information because it would destroy their profits!!!",

    "Real news sample":
        "WASHINGTON (Reuters) — The Federal Reserve held interest rates steady on Wednesday, as policymakers signaled they remain cautious about cutting borrowing costs given stubborn inflation pressures. The central bank's Federal Open Market Committee voted unanimously to maintain the benchmark overnight interest rate in the current target range, according to a policy statement released after the two-day meeting in Washington.",

    "Political article":
        "WASHINGTON (Reuters) — The head of a conservative Republican faction in the U.S. Congress, who voted this month for a huge expansion of the national debt to pay for tax cuts, called himself a fiscal conservative on Sunday and urged budget restraint. In keeping with a sharp pivot under way among Republicans, U.S. Representative Mark Meadows drew a hard line on federal spending, which lawmakers are bracing to do battle over.",
};

interface Props {
    onSelect: (text: string) => void;
}

export default function ExampleChips({ onSelect }: Props) {
    return (
        <div className="mt-6">
            <p className="text-xs font-mono text-gray-600 uppercase tracking-widest mb-3">
                Try an example
            </p>
            <div className="flex flex-wrap gap-2">
                {Object.entries(EXAMPLES).map(([label, text]) => (
                    <button
                        key={label}
                        onClick={() => onSelect(text)}
                        className="px-3 py-1.5 rounded-full text-xs border border-gray-800 text-gray-500 hover:border-gray-600 hover:text-gray-300hover:bg-gray-900 transition-all duration-150"
                    >
                        {label}
                    </button>
                ))}
            </div>
        </div>
    );
}