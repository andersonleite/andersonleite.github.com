import LoadingStyle from "./styles/LoadingStyle";
import React, { useState, useRef } from "react";

const Loading = () => {
  const [isLoading, setIsLoading] = useState(true);
  let timeoutRef = useRef();

  timeoutRef.current = setTimeout(() => {
    setIsLoading(false);
  }, 3000);

  return (
    <>
    {isLoading && (
      <LoadingStyle>
        <div className="centered">
          <div className="blob-1"></div>
          <div className="blob-2"></div>
        </div>
      </LoadingStyle>
    )}
    </>
    )

}

export default Loading
