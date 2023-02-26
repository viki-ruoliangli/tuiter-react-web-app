import React from "react"
// useSelector hook used to extract data from the reducer
import {useSelector} from "react-redux";

const HelloReduxExampleComponent = () => {
  const message = useSelector((state) => state.hello.message);

  return(
      <h1>{message}</h1>
  )
}

export default HelloReduxExampleComponent;