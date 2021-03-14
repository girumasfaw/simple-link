import React from "react";
import { IBlock, IBlockAction } from "../models/block.interface";
import { ILink } from "../models/link.interface";


export interface TimelineContextInterface {
    trackHeight: number;
    timelineWidth: number;
    blocks: IBlock[];
    links: ILink[];
    dispatch: (blockAction:IBlockAction)=> void;
}

export default React.createContext<TimelineContextInterface | null>( null);