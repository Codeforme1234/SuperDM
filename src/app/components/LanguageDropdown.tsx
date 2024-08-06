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

  return (
    <select
      value={selectedLanguage}
      onChange={handleLanguageChange}
      className="p-2 border rounded bg-white text-sm"
    >
      <option value="en">English</option>
      <option value="fr">French</option>
      <option value="es">Spanish</option>
      <option value="de">German</option>
      {/* Add more languages as needed */}
    </select>
  );
};

export default LanguageDropdown;
