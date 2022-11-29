import {  Link } from "react-router-dom";
import { useGlobalContext } from "../services/context";

const Error = () => {
  const {  fetchAllDataOnBack } = useGlobalContext();
  return (
    <div className='error'>
        <h2>Oops! It looks like you missed your way.</h2>

        <button onClick={fetchAllDataOnBack} className='home-btn'>
          <Link className="err-back" to={"/"}>  BACK HOME</Link> 
        </button>
    </div>
  )
}

export default Error