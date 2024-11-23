import * as StoreReview from "expo-store-review";

export const requestReview = async () => {
  const canRequestReview = await StoreReview.isAvailableAsync();
  if (!canRequestReview) {
    return false;
  } else {
    await StoreReview.requestReview();
    return true;
  }
};
