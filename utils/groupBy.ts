export const groupBy = <T>(array: T[], key: keyof T): Record<string, T[]> => {
  return array.reduce((groupedArray, item) => {
    const groupKey = String(item[key]);

    groupedArray[groupKey] = groupedArray[groupKey] || [];
    groupedArray[groupKey].push(item);

    return groupedArray;
  }, {} as Record<string, T[]>);
};
