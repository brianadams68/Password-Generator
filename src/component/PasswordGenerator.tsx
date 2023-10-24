import React, { useState } from "react";

const PasswordGenerator: React.FC = () => {
  const [password, setPassword] = useState<string>("");
  const [passwordLength, setPasswordLength] = useState<number>(12);
  const [includeUppercase, setIncludeUppercase] = useState<boolean>(true);
  const [includeSymbols, setIncludeSymbols] = useState<boolean>(true);
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(true);

  const generatePassword = () => {
    let charset = "abcdefghijklmnopqrstuvwxyz";
    if (includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeSymbols) charset += "!@#$%^&*()_+";
    if (includeNumbers) charset += "0123456789";

    let newPassword = "";
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      newPassword += charset[randomIndex];
    }
    setPassword(newPassword);
  };

  return (
    <div className="container mx-auto p-4 border-2 border-sky-500 rounded shadow-lg mt-10 max-w-3xl">
      <div className="flex-columns content-center mb-4">
        <h1 className="text-3xl font-semibold mb-4">Password Generator</h1>
        <div className="flex items-center mb-4">
          <label className="mr-2">Password Length:</label>
          <input
            type="number"
            className="p-2 border border-gray-300 rounded"
            value={passwordLength}
            onChange={(e) => setPasswordLength(Number(e.target.value))}
          />
        </div>
        <div className="mb-4">
          <label className="mr-2">Include Uppercase:</label>
          <input
            type="checkbox"
            checked={includeUppercase}
            onChange={() => setIncludeUppercase(!includeUppercase)}
          />
        </div>
        <div className="mb-4">
          <label className="mr-2">Include Symbols:</label>
          <input
            type="checkbox"
            checked={includeSymbols}
            onChange={() => setIncludeSymbols(!includeSymbols)}
          />
        </div>
        <div className="mb-4">
          <label className="mr-2">Include Numbers:</label>
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={() => setIncludeNumbers(!includeNumbers)}
          />
        </div>
        <button
          className="bg-blue-500 text-white p-2 rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ..."
          onClick={generatePassword}
        >
          Generate Password
        </button>
        {password && (
          <div className="mt-4 max-w-sm">
            <strong>Generated Password:</strong>
            <div className="p-2 border border-gray-300 rounded bg-gray-100 mt-2">
              {password}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PasswordGenerator;
