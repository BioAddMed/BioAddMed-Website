export default function PWR({ isExpanded }: { isExpanded?: boolean }) {
    if (!isExpanded) return null;

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4 text-orange-500">PWR</h2>
            <p className="text-lg text-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                (Your full description here)
            </p>
            <div className="mt-4">
                <h3 className="font-bold">Links:</h3>
                <ul className="list-disc list-inside">
                    <li><a href="https://pwr.edu.pl" className="text-blue-500 underline">Link</a></li>
                </ul>
            </div>
        </div>
    );
}