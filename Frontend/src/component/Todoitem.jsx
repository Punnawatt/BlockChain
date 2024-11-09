// import React from 'react';
// function TodoItem({ task, deleteTask }) {

 
//  return (
//  <div className="todo-item" style={{ display: 'flex' , justifyContent:'space-between',marginBottom:'8px'}}>
    
//     <p style={{ color: '#888' }}>
//         {task.inputcase }
//     </p>

//     <button onClick={() => deleteTask(task.id)}>
//         X
//     </button>
//  </div>
//  );
// }
// export default TodoItem;
// import React from 'react';

// function TodoItem({ task, deleteTask }) {
//     const [hover, setHover] = useState(false);

//     return (
//         <div className="todo-item" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
//             <div>
//                 <p style={{ color: '#888' , textAlign: 'left'}}>Input: {task.inputcase}</p>
//                 <p style={{ color: '#888' , textAlign: 'left' }}>Output: {task.outputcase}</p>
//             </div>
//             <button 
//                 onClick={() => deleteTask(task.id)}
//                 // style={
//                 //     hover
//                 //         ? {
//                 //             border: '2px solid black',
//                 //             boxShadow: '5px 4px #472F05',
//                 //             backgroundColor: '#ff3333',
//                 //             cursor: 'pointer',
//                 //         }
//                 //         : {
//                 //             border: '2px solid black',
//                 //             boxShadow: '5px 4px #472F05',
//                 //             backgroundColor: '#F3DDD1',
//                 //             cursor: 'default',
//                 //         }
//                 // }
//                 //     onMouseOver={(event) => onMouseAction(event)}
//                 //     onMouseOut={(event) => onMouseAction(event)}
//                  >
//                     <p>🗑️Delete</p>
//                 </button>
//         </div>
//     );
// }

// export default TodoItem;

import React from 'react';

function TodoItem({ task, deleteTask }) {
    return (
        <div className="todo-item" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <div style={{ flex: 1, paddingRight: '8px' }}>
                <p style={{ color: '#888', margin: 0, padding: 0, textAlign: 'left' }}>Input: {task.inputcase}</p>
                <p style={{ color: '#888', margin: 0, padding: 0, textAlign: 'left' }}>Output: {task.outputcase}</p>
            </div>
            <button onClick={() => deleteTask(task.id)} 
            style={{ alignSelf: 'flex-start' }}>
                X
            </button>
        </div>
    );
}

export default TodoItem;

