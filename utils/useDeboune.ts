import React from "react";

export function useDebounce(value: any, delay: number) {
  const [debouncedValue, setDebouncedValue] = React.useState<any>(null);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}

export function useDataDebouncer(initialData: any, delay: number) {
  const debouncedData = useDebounce(initialData, delay);
  return debouncedData;
}
