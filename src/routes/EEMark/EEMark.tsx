import { useState } from 'preact/hooks';

const EEMark = () => {
    const [isLoading, setIsLoading] = useState(true);
  
    return (
      <div style={{
        width: '100%',
        height: '90vh',
        overflow: 'hidden',
        position: 'relative',
        scrollbarWidth: 'none',  // Firefox
        msOverflowStyle: 'none'  // IE and Edge
      }}>
        {isLoading && (
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            Loading...
          </div>
        )}
        <iframe 
          src="https://651ebb8fd7733326bd990427--benevolent-palmier-b77fc4.netlify.app/" 
          title="EEMark Embedded Page"
          width="100%" 
          height="100%" 
          frameBorder="0"
          sandbox="allow-scripts allow-same-origin"
          onLoad={() => {
            setIsLoading(false);
          }}
          onError={() => {
            setIsLoading(false);
            console.error("Failed to load the iframe content.");
          }}
          style={{
            WebkitOverflowScrolling: 'touch',
            WebkitScrollbar: 'none'
          }}
        ></iframe>
      </div>
    );
  }
  
  export default EEMark;
  