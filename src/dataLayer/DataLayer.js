import React, { createContext, useContext, useReducer } from "react";



// the data lyer context prepares the data layer
export const DataLayerContext = createContext();

// this is the actual data layer that wrap the  app and takes two props
// the first two props are the one that are passed in the arguments while the children prop is what is being wrapped by the data layer itself
export const DataLayer = ({ initialState, reducer, children }) => {
  //
//   
  // the datalayercontext then uses the ,Provider and then the value of the DataLayerContext is passed in a useReducer with the reducer and initails State
  <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
    {/* in here we wrap whatever the child will be given */}
    {children}
  </DataLayerContext.Provider>;
};


// the useContext is used to et a valaue from the data layer
export const useDataLayerValue = () => useContext(DataLayerContext);
