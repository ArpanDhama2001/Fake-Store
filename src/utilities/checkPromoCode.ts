export const checkPromoCode = (
  code: string
): "pending" | "correct" | "invalid" => {
  if (code.length > 0) {
    if (code.toLowerCase() === "leaveme20") {
      return "correct";
    } else return "invalid";
  } else return "pending";
};
