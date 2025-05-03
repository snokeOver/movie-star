export const transformEnumArray = <T extends Record<string, string>>(
  values: string[],
  enumObj: T
): (keyof T)[] =>
  values
    .map((value) => {
      const key = (Object.keys(enumObj) as (keyof T)[]).find(
        (k) => enumObj[k] === value || k === value
      );
      return key;
    })
    .filter(Boolean) as (keyof T)[];

export const getEnumValueByKey = <T extends Record<string, string>>(
  enumObj: T,
  key: string
): string | undefined => enumObj[key as keyof T];
