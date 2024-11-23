export const validateMinimumAppVersion = (minimumVersion: string, userAppVersion: string | null) => {
  if (!userAppVersion) {
    return false;
  }

  const minimum = Number.parseInt(
    minimumVersion
      .split(".")
      .map((item) => item.padStart(2, "0"))
      .join(""),
  );

  const result = Number.parseInt(
    userAppVersion
      .split(".")
      .map((item) => item.padStart(2, "0"))
      .join(""),
  );
  if (Number.isNaN(result)) return false;
  return result >= minimum;
};
