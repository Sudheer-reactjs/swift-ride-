import React, { useState } from 'react';

interface TruncatedTextProps {
  text: string;
  maxLength: number;
}

const TruncatedText: React.FC<TruncatedTextProps> = ({ text, maxLength }) => {
  const [showFullText, setShowFullText] = useState(false);

  const handleToggleText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div className="flex flex-wrap">
      <p className="text-white">
        {showFullText ? text : `${text?.slice(0, maxLength)}...`}
      </p>
      {!showFullText && (
        <button
          className="bg-transparent border-0 text-blue-500 hover:text-blue-700 ml-1 focus:outline-none"
          onClick={handleToggleText}
          aria-expanded={showFullText ? 'true' : 'false'}
          aria-label="Toggle full text"
        >
          <b className="gradient-text">More</b>
        </button>
      )}
    </div>
  );
};

export default TruncatedText;
