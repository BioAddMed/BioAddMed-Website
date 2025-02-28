"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function NavElement({ text, link }: { text: string; link: string }) {
    const pathname = usePathname();
    const isActive = pathname === link;

    return (
        <div className="relative">
            <Link href={link} className={`hover:text-[var(--orange)] ${isActive ? "text-[var(--orange)] font-bold" : ""}`}>
                {text}
            </Link>
            {isActive && <div className="absolute left-0 right-0 bottom-[-1px] h-0.5 bg-[var(--orange)]"></div>}
        </div>
    );
}

export { NavElement };
