import React, { useContext } from 'react';
import './App.scss';
import Block from './components/block/Block';
import Link from './components/link/Link';
import timelineContext from './context/timelineContext';
import { IBlock } from './models/block.interface';
import { ILink } from './models/link.interface';

const  App:React.FC<any> = () => {
  const context = useContext(timelineContext)
  return (
    <div className="container">
       <div className="timeline" style={{width: context?.timelineWidth}}>
         {context?.blocks.map((block: IBlock, index)=>(
            <div className="row">
                    <Block key={block.id} {...block}/>
             </div>
         ))}
         <div className="svg-wrapper">
         {context?.links.map((link: ILink, index)=>(           
            <Link {...link}/>   
         ))}
        </div>
       </div>         
    </div>
  );
}

export default App;
