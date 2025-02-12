import React from 'react'
import { useState, useEffect } from 'react'

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

 const itemsperpage = 5;

function Pagin2() {
  const [PageNo, setPageNo] = useState(1);
  const [list, setlist] = useState([])

  useEffect(()=>{
    let startindex = PageNo*itemsperpage-itemsperpage
    let endindex = (startindex+itemsperpage)%items.length
     let arr = []
    for(let i=startindex; i<endindex; i++){
        arr.push(items[i])
    }
    setlist(arr)

  },[PageNo])
  
function handleprev(){
   if(PageNo>1){
    setPageNo(PageNo-1)
   }
}

function handlenext(){
    if(PageNo*itemsperpage<items.length)(
   setPageNo(PageNo+1)
    )
}

  return (
    <div>
        {list.map((obj)=>{
            return <li>{`${obj.id}. ${obj.name}`}</li>
        })}

        <div className='pagination'>
            <span onClick={handleprev}>{`<    `}</span>
            <span >{PageNo}</span>
            <span onClick={handlenext}>{`   >`}</span>

        </div>
    </div>
  )
}

export default Pagin2