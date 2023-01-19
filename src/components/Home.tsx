import { useEffect, useState } from 'react';
import { Text } from './ ui/Text';

function getAutocompleteResults(
  query: string,
  signal?: AbortSignal
): Promise<string[]> {
  const fruits = [
    'Apple',
    'Apricot',
    'Avocado',
    'Banana',
    'Blackberry',
    'Blueberry',
    'Cherry',
    'Cranberry',
    'Durian',
    'Eggplant',
    'Fig',
    'Grape',
    'Honeyberry',
    'Jackfruit',
    'Kiwi',
    'Lemon',
    'Lime',
    'Mango',
    'Melon',
    'Nectarine',
    'Orange',
    'Peach',
    'Pear',
    'Persimmon',
    'Pineapple',
    'Plum',
    'Pumpkin',
    'Raspberry',
    'Strawberry',
    'Tomato',
    'Uglifruit',
    'Vanilla',
    'Watermelon',
    'Zucchini',
  ];

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (signal?.aborted) {
        reject(signal.reason);
      }
      resolve(
        fruits.filter((fruit) =>
          fruit.toLowerCase().includes(query.toLowerCase())
        )
      );
    }, Math.random() * 1000);
  });
}

function useDebounceValue(value: string, time = 250) {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceValue(value);
    }, time);

    return () => {
      clearTimeout(timeout);
    };
  }, [value, time]);

  return debounceValue;
}

function Home() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const debounceQuery = useDebounceValue(query);
  const controller = new AbortController();

  useEffect(() => {
    const signal = controller.signal;

    if (!query) {
      setSuggestions([]);
      return;
    }

    (async () => {
      const data = await getAutocompleteResults(debounceQuery, signal);
      setSuggestions(data);
    })();

    return () => controller.abort('cancel request');
  }, [debounceQuery]);

  return (
    <div className="w-full h-screen flex flex-col items-center bg-gray-900">
      <input
        className="mt-24 mb-4"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="text-gray-200 flex flex-col gap-2 items-start">
        {suggestions.map((suggestion) => (
          <Text variant="large/bold" key={suggestion}>
            {suggestion}
          </Text>
        ))}
      </div>
    </div>
  );
}

export default Home;
