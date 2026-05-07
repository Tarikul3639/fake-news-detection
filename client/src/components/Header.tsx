export default function Header() {
    return (

        <div className="sticky top-0 flex items-center gap-3 mb-6 bg-gray-950 border-b border-gray-800 p-4">
            <div className="w-9 h-9">
                <svg width="36" height="36" viewBox="0 0 44 44" fill="none">
                    <rect width="44" height="44" rx="10" fill="#E24B4A" />
                    <rect x="10" y="13" width="24" height="2.5" rx="1.25" fill="white" opacity="0.9" />
                    <rect x="10" y="19" width="18" height="2.5" rx="1.25" fill="white" opacity="0.9" />
                    <rect x="10" y="25" width="21" height="2.5" rx="1.25" fill="white" opacity="0.9" />
                    <circle cx="32" cy="29" r="7" fill="#0a0a0a" />
                    <circle cx="32" cy="29" r="6" fill="#E24B4A" stroke="white" strokeWidth="1.5" />
                    <path d="M29.5 29L31.2 31L34.5 27" stroke="white" strokeWidth="1.8"
                        strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
            </div>
            <div>
                <p className="font-mono text-sm font-bold text-white tracking-tight">
                    FakeGuard
                </p>
                <p className="font-mono text-xs text-gray-500">
                    Powered by ML
                </p>
            </div>
        </div>
    );
}