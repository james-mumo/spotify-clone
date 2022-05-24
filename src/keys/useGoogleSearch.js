import { useState, useEffect } from "react";
import API_KEY from "./keys";

const CONTEXT_KEY = "ebab5a5245918ce16";
// THE GRAB THE "search engine ID as explained in the searchPage.js"

// this custom hook depends on the term working with the useEffcet therefore
const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  // whenever term chnages the useEffcet code is fired
  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customersearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then((response) => response.json())
        .then(result => {
          setData(result);
        });
    };

    fetchData();
  }, [term]);

  // the data returned is nt the default data which is the input but rather the result by google scustom search engine
  return { data };
};

export default useGoogleSearch;
