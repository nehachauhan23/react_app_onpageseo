import { useLocation } from "react-router-dom"

const Results = () => {

  const location = useLocation();
  const results = location.state;
  console.log(results);
  return (
    // <div> </div>
    <div>Results : {results.id} </div>
  )
}

export default Results