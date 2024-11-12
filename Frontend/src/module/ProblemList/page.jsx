import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';

const ProblemList = ({ problems }) => {
  return (
    // <div className="blog-list">
    //   {blogs.map(blog => (
    //     <div className="blog-preview" key={blog.id} >
    //       <Link to={`/blogs/${blog.id}`}>
    //         <h2>{ blog.title }</h2>
    //         <p>Written by { blog.author }</p>
    //       </Link>
    //     </div>
    //   ))}
    // </div>
    
        
        <Card sx={{
                width:1500,height:100,
                padding: 0, flex: 1,
                flexDirection: 'row',
                boxShadow: '8px 8px #472F05',
                backgroundColor: '#F3DDD1',
                borderRadius: 0,
                border: '3px solid #472F05',
                //position: 'relative',
            }}>
            {problems.map(problem => (
                <CardContent 
                sx={{ padding: 2, flex: 1,boxShadow: '8px 8px #472F05',border: '3px solid #472F05', }}
                key={problem.id} >
                <Link to={`/problems/${problem.id}`}>
                    <h2>{ problem.problemName }</h2>
                    <p>Stake amount { problem.stake }</p>
                </Link>
                <button>Delete</button>
                <button>Unsolve</button>
                </CardContent>
            ))}
        </Card>

        
  );
}
 
export default ProblemList;