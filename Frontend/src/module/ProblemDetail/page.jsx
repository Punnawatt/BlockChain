import {  useParams } from "react-router-dom";
//import useFetch from "./useFetch";
import useFetch from "../useFetch/page";
//import ProblemList from "../ProblemList/page";
const ProblemDetail = () => {

  const { id } = useParams();
  const { error, isPending, data: problems } = useFetch('http://localhost:3000/problems/'+ id);
  //const history = useHistory();

//   const handleClick = () => {
//     fetch('http://localhost:8000/blogs/' + blog.id, {
//       method: 'DELETE'
//     }).then(() => {
//       history.push('/');
//     })
//   }
    // const handleClick = () => {
    // fetch('http://localhost:3000/problems/' + problem.id, {
    //   method: 'DELETE'
    // }).then(() => {
    //   history.push('/');
    // })
    // }

  return (
    
    <div >
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      {problems && 
      <article>
          <h2>{ problems.problemName }</h2>
          
          <div>{ problems.detail }</div>
          
        </article>}
    </div>
  );
}

export default ProblemDetail;
