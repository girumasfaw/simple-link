import React from 'react';
import { IBlock } from "../../models/block.interface";
import './Block.scss';

const Block: React.FC<IBlock> = (props) => {
  return <div className="block"  style={{backgroundColor: props.bgColor, width: props.width, left:`${props.percent}%`}}></div>; 
};

export default Block;