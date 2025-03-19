import { useState } from "react";

interface AutocompleteProps {
  suggestions: string[];
  width?: string;
  placeholder?: string;
}

export default function Autocomplete({ suggestions, width = "w-full", placeholder = "Type something..." }: AutocompleteProps) {
  const [inputValue, setInputValue] = useState<string>("");
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    if (value.trim() === "") {
      setFilteredSuggestions([]);
    } else {
      setFilteredSuggestions(
        suggestions.filter((item) => item.toLowerCase().includes(value.toLowerCase()))
      );
    }
  };

  const handleSelect = (suggestion: string) => {
    setInputValue(suggestion);
    setFilteredSuggestions([]); 
  };

  return (
    <div className={`relative ${width}`}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className="w-full px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder={placeholder}
      />

      {filteredSuggestions.length > 0 && (
        <ul className="absolute w-full mt-1 bg-white border shadow-md max-h-40 overflow-auto">
          {filteredSuggestions.map((suggestion, index) => (
            <li
              key={index}
              className="px-4 py-2 cursor-pointer hover:bg-blue-100"
              onClick={() => handleSelect(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
