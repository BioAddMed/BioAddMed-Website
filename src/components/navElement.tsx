"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function NavElement({ text, link, onClick }: { text: string; link: string; onClick: () => void }) {
    const pathname = usePathname();
    const isActive = pathname === link;

    return (
        <div className="relative">
            <Link onClick={onClick} href={link} className={`hover:text-[var(--orange)] ${isActive ? "text-[var(--orange)] font-bold" : ""}`}>
                {text}
            </Link>
            {isActive && <div className="absolute left-0 right-0 bottom-[-1px] h-0.5 bg-[var(--orange)]"></div>}
        </div>
    );
}

export { NavElement };
