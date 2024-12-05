// IMPORTS
import { SearchPageDrawer } from "liamc9npm";

// CREATE FUNCTION
export default function Search() {
    // STATE VARIABLES
    const mockTrendingItems = ["React", "Storybook", "JavaScript"];

    const mockSearchResults = [
      {
        title: "React Native",
        description: "A framework for building native apps with React.",
        thumbnail: "https://example.com/react-native.png",
        category: "Framework",
        level: "Intermediate",
        isFree: true,
        date: "2021-06-15",
      },
      // Add more search results...
    ];
    
    const filters = [
      {
        key: "category",
        name: "Category",
        type: "select",
        options: ["Framework", "State Management", "API"],
      },
      {
        key: "level",
        name: "Difficulty Level",
        type: "select",
        options: ["Beginner", "Intermediate", "Advanced"],
      },
      {
        key: "isFree",
        name: "Free Resources Only",
        type: "toggle",
      },
    ];
    
    const sortOptions = [
      { value: "title_asc", label: "Title (A-Z)" },
      { value: "title_desc", label: "Title (Z-A)" },
      { value: "date_newest", label: "Date (Newest First)" },
      { value: "date_oldest", label: "Date (Oldest First)" },
    ];
    // HTML
    return (
        <>
            <head></head>
            <body className="p-4">
            <SearchPageDrawer
  trendingItems={mockTrendingItems}
  searchResults={mockSearchResults}
  filters={filters}
  sortOptions={sortOptions}
/>
            </body>
        </>
    )
}





