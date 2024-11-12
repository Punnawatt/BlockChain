// import { useHistory, useParams } from "react-router-dom";
// //import useFetch from "./useFetch";
// import useFetch from "../useFetch/page";

// const ProblemDetail = () => {

//   const { id } = useParams();
//   //const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
//   const { error, isPending, data: problem } = useFetch('http://localhost:3000/problems/'+ id)
//   const history = useHistory();

// //   const handleClick = () => {
// //     fetch('http://localhost:8000/blogs/' + blog.id, {
// //       method: 'DELETE'
// //     }).then(() => {
// //       history.push('/');
// //     }) 
// //   }
//     const handleClick = () => {
//     fetch('http://localhost:3000/problems/' + problem.id, {
//       method: 'DELETE'
//     }).then(() => {
//       history.push('/');
//     }) 
//   }

//   return (
//     // <div >
//     //   { isPending && <div>Loading...</div> }
//     //   { error && <div>{ error }</div> }
//     //   { blog && (
//     //     <article>
//     //       <h2>{ blog.title }</h2>
//     //       <p>Written by { blog.author }</p>
//     //       <div>{ blog.body }</div>
//     //       <button onClick={handleClick}>delete</button>
//     //     </article>
//     //   )}
//     // </div>
//     <div >
//       { isPending && <div>Loading...</div> }
//       { error && <div>{ error }</div> }
//       { problem && (
//         <article>
//           <h2>{ problem.problemName }</h2>
//           <p>Staked Amount { problem.stake }</p>
//           <div>{ problem.detail }</div>
//           <div>{problem.testcases}</div>
//           <button onClick={handleClick}>delete</button>
//         </article>
//       )}
//     </div>
//   );
// }
 
// export default ProblemDetail;