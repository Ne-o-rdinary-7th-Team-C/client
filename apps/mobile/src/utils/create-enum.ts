export const createEnum = <T extends string>(list: readonly T[] | T[]) => {
  const object = list.slice().reduce(
    (acc, cur) => {
      acc[cur] = cur;
      return acc;
    },
    {} as { [K in string]: K },
  );
  return object;
};
