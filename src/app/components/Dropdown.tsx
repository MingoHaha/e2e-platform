import React, { useState } from "react";
import { Listbox } from "@headlessui/react";
import { Check, ChevronDown, Frown } from "lucide-react";

export interface DropdownOption {
  name: string;
  logo?: string | React.ReactNode;
}

interface DropdownProps {
  options: DropdownOption[];
  width?: string;
  placeholder?: string;
  onChange?: (option: DropdownOption | null) => void; 
}

export default function Dropdown({ options, width = "w-full", placeholder="Select option", onChange }: DropdownProps) {

  const [selectedOption, setSelectedOption] = useState<DropdownOption | null>(null);

  const handleSelect = (option: DropdownOption | null) => {
    setSelectedOption(option);
    if (onChange) onChange(option);
  };

  return (
    <Listbox value={selectedOption} onChange={handleSelect}>
      <div className={`relative ${width}`}>
        {/* Dropdown Button */}
        <Listbox.Button className={`flex items-center justify-between border p-2 rounded bg-white ${width}`}>
          <div className="flex items-center gap-2">
            {selectedOption?.logo && typeof selectedOption.logo === "string" ? (
              <img src={selectedOption.logo} alt="" className="w-4 h-4 rounded-full" />
            ) : (
              selectedOption?.logo
            )}
            <span className={selectedOption ? "" : "text-gray-400"}>
            {selectedOption ? selectedOption.name : placeholder}
            </span>
          </div>
          <ChevronDown className="w-4 h-4 text-gray-500" />
        </Listbox.Button>

        {/* Dropdown Options */}
        <Listbox.Options className={`absolute ${width} mt-1 bg-white border rounded shadow-lg z-10`}>
          {options.length > 0 ? (
            options.map((option, index) => (
              <Listbox.Option
                key={index}
                value={option}
                className="p-2 flex items-center gap-2 cursor-pointer hover:bg-gray-100"
              >
                {option.logo && typeof option.logo === "string" ? (
                  <img src={option.logo} alt="" className="w-4 h-4 rounded-full" />
                ) : (
                  option.logo 
                )}
                <span>{option.name}</span>
                {selectedOption?.name === option.name && <Check className="w-4 h-4 text-blue-500 ml-auto" />}
              </Listbox.Option>
            ))
          ) : (
            <div className="p-2 text-gray-500 text-sm text-center flex items-center justify-center gap-2">
              <Frown className="w-4 h-4 text-gray-400" />
              No options available
            </div>
          )}
        </Listbox.Options>
      </div>
    </Listbox>
  );
}
