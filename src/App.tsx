import React, { useEffect, useState } from "react";
import { XmlDocument } from 'libxml2-wasm';

const App: React.FC = () => {
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const testLibxml2 = async () => {
      try {
        // Example: Parse a simple XML string
        const xmlDoc = XmlDocument.fromString(`<root><child>Test</child></root>`);
        const rootNode = xmlDoc.root;
        setResult(rootNode?.name || "No root node found");
      } catch (e: any) {
        console.error("Error using libxml2-wasm:", e);
        setError(e.message || "Unknown error");
      }
    };

    testLibxml2();
  }, []);

  return (
    <div className="App">
      <h1>Libxml2-wasm Test</h1>
      {error ? (
        <p style={{ color: "red" }}>Error: {error}</p>
      ) : (
        <p>Result: {result || "Loading..."}</p>
      )}
    </div>
  );
};

export default App;
