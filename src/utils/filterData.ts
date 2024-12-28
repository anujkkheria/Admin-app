export function filterData<T extends Record<string, any>>(
  data: T[],
  filters: Record<string, string>
): T[] {
  return data.filter((item) =>
    Object.entries(filters).every(([field, value]) => {
      if (!value) return true;
      
      const itemValue = String(item[field]).toLowerCase();
      return itemValue.includes(value.toLowerCase());
    })
  );
}