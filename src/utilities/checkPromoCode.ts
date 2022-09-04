export const checkPromoCode = (code: string): boolean => {
  if (code.toLowerCase() === "leaveme20") {
    return true;
  } else return false;
};
