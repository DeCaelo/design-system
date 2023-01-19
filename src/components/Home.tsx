import { useEffect, useState } from 'react';
import { Text } from './ ui/Text';

function getAutocompleteResults(query: string): Promise<string[]> {
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
      resolve(
        fruits.filter((fruit) =>
          fruit.toLowerCase().includes(query.toLowerCase())
        )
      );
    }, Math.random() * 1000);
  });
}

function Home() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);

  useEffect(() => {
    if (!query) {
      setSuggestions([]);
      return;
    }
    (async () => {
      const data = await getAutocompleteResults(query);
      setSuggestions(data);
    })();
  }, [query]);

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
