import { useState } from 'react';
export default Accordian=()=>{
  const [activeIndex,setactiveIndex] = useState(0);
    return (<div>
        <Panel title="Book" isActive={activeIndex===0} onshow={()=>setactiveIndex(0)}>This is the book</Panel>
        <Panel title="note" isActive={activeIndex===1} onshow={()=>setactiveIndex(1)}>This is the test book</Panel>
    </div>)
}

function Panel({title,children,isActive,onshow}){
return(<div>
    <h1>{title}</h1>
   
  {isActive?( <p>{children}</p>):(<button onclick={onshow}>On show</button>)}
</div>)
}