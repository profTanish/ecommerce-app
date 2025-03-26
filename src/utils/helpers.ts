export function capitalizeFirstLetter(
    category: string | null
): string | undefined {
    return category
        ?.split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
}