// LanguageDropdown.tsx
import React, { useState } from "react";

interface LanguageDropdownProps {
  onSelectLanguage: (language: string) => void;
}

const LanguageDropdown: React.FC<LanguageDropdownProps> = ({
  onSelectLanguage,
}) => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("en");

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const language = e.target.value;
    setSelectedLanguage(language);
    onSelectLanguage(language);
  };

  const options = [
    {
      id: 1,
      lang: "English",
      value: "en",
    },
    {
      id: 2,
      lang: "French",
      value: "fr",
    },
    {
      id: 3,
      lang: "Spanish",
      value: "es",
    },
    {
      id: 4,
      lang: "German",
      value: "de",
    },
  ];

  return (
    <select
      value={selectedLanguage}
      onChange={handleLanguageChange}
      className="p-2 border-none outline-none rounded bg-white text-sm"
    >
      {options.map((value) => (
        <option key={value.id} value="value.value">
          {value.lang}
        </option>
      ))}
    </select>
  );
};

export default LanguageDropdown;
