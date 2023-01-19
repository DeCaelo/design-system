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
  return (
    <div className="w-full h-screen flex flex-col items-center bg-gray-900">
      <input className="mt-24 mb-4" />
      <div className="text-gray-200 flex flex-col gap-2 items-start">
        <Text variant="large/bold">Show results here</Text>
      </div>
    </div>
  );
}

export default Home;
