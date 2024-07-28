import { useState } from 'react';
import './App.css';
import Table from './table';
import Timer from './timer';


const items = [{id:1, name: 'item1'},
               {id:2, name: 'item2'},
               {id:3, name: 'item3'},
               {id:4, name: 'item4'},
               {id:5, name: 'item5'},
               {id:6, name: 'item6'},
               {id:7, name: 'item7'},
               {id:8, name: 'item8'},
               {id:9, name: 'item9'},
               {id:10, name: 'item10'},
               {id:11, name: 'item11'},
               {id:12, name: 'item12'},
               {id:13, name: 'item13'},
               {id:14, name: 'item14'},
               {id:15, name: 'item15'},
               {id:16, name: 'item16'},
               {id:17, name: 'item17'},
               {id:18, name: 'item18'},
               {id:19, name: 'item19'},
               {id:20, name: 'item20'},
               {id:21, name: 'item21'},
               {id:22, name: 'item22'},
               {id:23, name: 'item23'},
               {id:24, name: 'item24'},
               {id:25, name: 'item25'},
               {id:26, name: 'item26'},
               {id:27, name: 'item27'},
               {id:28, name: 'item28'},
               {id:29, name: 'item29'},
               {id:30, name: 'item30'},
               {id:31, name: 'item31'},


]

const data = [
  {
    "id": 2,
    "name": "Bob",
    "rating": 3.8
  },
  {
    "id": 1,
    "name": "Alice",
    "rating": 4.5
  },
  {
    "id": 4,
    "name": "David",
    "rating": 3.9
  },
  {
    "id": 5,
    "name": "Eve",
    "rating": 4.7
  },
  {
    "id": 3,
    "name": "Charlie",
    "rating": 4.2
  },
]

const itemsperpage = 4;


function App() {


  return (
    <div>
     {/* <Table data={data} ></Table> */}
     <Timer></Timer>
    </div>
  )
// const [pageNo, setpageNo] = useState(1)

// const pageitems = [];
// const start = pageNo*itemsperpage - itemsperpage
// const end = ((start+itemsperpage)>items.length)? items.length : (start+itemsperpage)

// for(let i=start; i<end; i++){
//    pageitems.push(items[i])
// }

// function handledecrease(){
  
//   if(pageNo>1){
//     setpageNo(pageNo-1)
//   }

// }

// function handleincrease(){
  
//   if(pageNo<items.length/itemsperpage){
//     setpageNo(pageNo+1)
//   }

// }

//   return (
//     <div className="App">
//       <div>
//         {pageitems.map((item)=>{
//           return <div key={item.id}>{item.name}</div>
//         })}
//       </div>
//       <div className='pagination'>
//         <span onClick={handledecrease}>&laquo;</span>
//         <span>{pageNo}</span>
//         <span onClick={handleincrease}>&raquo;</span>

//       </div>
//     </div>
//   );
}

export default App;
