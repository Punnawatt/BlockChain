import {  Link, useParams,useNavigate } from "react-router-dom";
//import useFetch from "./useFetch";
import useFetch from "../useFetch/page";
import { Button } from "@mui/material";
import TopBar from "../../component/Topbar";
//import ProblemList from "../ProblemList/page";
const ProblemDetail = () => {

  const { id } = useParams();
  const { error, isPending, data: problems } = useFetch('http://localhost:3000/problems/'+ id);
  //const navigate = useNavigate();
  //const history = useHistory();

//   const handleClick = () => {
//     fetch('http://localhost:8000/blogs/' + blog.id, {
//       method: 'DELETE'
//     }).then(() => {
//       history.push('/');
//     })
//   }
    // const handleOnclick = () => {
    //   //<Link to = {`/problems/${problems.id}/submit`}></Link>
    //   navigate(`/problems/${problems.id}/submit`);
    // }

  return (
    <>
    <TopBar></TopBar>
    <div >
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      {problems && 
      <article>
          <h1>Problem Name</h1>
          <h2>{ problems.problemName }</h2>
          <h1>Detail</h1>
          <div>{ problems.detail }</div>
          
          
          
        </article>}
        
    </div>
    </>
  );
}

export default ProblemDetail;
