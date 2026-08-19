import Link from "next/link";
import { cn } from "@/lib/utils";

const categories = [
  { id: "all", name: "All Products" },
  { id: "automotive", name: "Automotive Chargers" },
  { id: "industrial", name: "Industrial Chargers" },
  { id: "ev", name: "EV Chargers" },
  { id: "inverter", name: "Inverter Chargers" },
  { id: "power-supply", name: "Power Supply" },
  { id: "testing", name: "Testing Equipment" },
];

export function ProductFilters({ currentCategory }: { currentCategory: string }) {
  return (
    <ul className="space-y-2">
      {categories.map((category) => (
        <li key={category.id}>
          <Link
            href={`/products${category.id === "all" ? "" : `?category=${category.id}`}`}
            className={cn(
              "block py-2 px-3 rounded-md text-sm font-medium transition-colors",
              currentCategory === category.id
                ? "bg-accent/10 text-accent"
                : "text-secondary-text hover:bg-secondary-bg hover:text-primary-text"
            )}
          >
            {category.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
