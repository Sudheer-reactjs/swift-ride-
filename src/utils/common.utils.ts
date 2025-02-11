export const getPlanName = (interval: string | undefined) => {
    if (!interval) return "Unknown Plan";
    const plans: { [key: string]: string } = {
        monthly: "Monthly Plan",
        yearly: "Yearly Plan"
    };
    return plans[interval] || "Custom Plan";
};
