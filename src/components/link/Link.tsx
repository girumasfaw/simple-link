import React, { useContext, useEffect, useState } from "react";
import timelineContext from "../../context/timelineContext";
import { IBlock } from "../../models/block.interface";
import { ILink } from "../../models/link.interface";
import './Link.scss';

const Link: React.FC<ILink> = (props) => {
    const [curve, setCurve] = useState<IBezier | undefined>(undefined)
    const context = useContext(timelineContext)

    useEffect(() => {

        setCurve(renderCurve());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props])

    const sourceBlockIndex = context?.blocks.findIndex((b: IBlock) => b.id === props.source);
    const targetBlockIndex = context?.blocks.findIndex((b: IBlock) => b.id === props.target);

    const renderCurve = () => {
        let curve: IBezier = { dx1: 0, dy1: 0, dx2: 0, dy2: 0, dx: 0, dy: 0 }
        if (context) {
            if (sourceBlockIndex !== undefined && targetBlockIndex !== undefined) {
                curve.dx1 = percentToPixel(context.blocks[sourceBlockIndex].percent,  context.timelineWidth) + context.blocks[sourceBlockIndex].width + 14;
                curve.dy1 = ((sourceBlockIndex + 1) * context.trackHeight) - (context.trackHeight / 2);

                curve.dx2 = percentToPixel(context.blocks[sourceBlockIndex].percent, context.timelineWidth) + context.blocks[sourceBlockIndex].width + (context.trackHeight / 2);
                curve.dy2 = ((targetBlockIndex + 1 )- (sourceBlockIndex + 1)) * context.trackHeight  + sourceBlockIndex * context.trackHeight

                curve.dx = percentToPixel(context.blocks[targetBlockIndex].percent , context.timelineWidth) - 4;
                curve.dy = ((targetBlockIndex + 1) * context.trackHeight) - (context.trackHeight / 2);
            }
        }
        return curve
    }

    const percentToPixel = (percent: number , timelineWidth: number) =>{
         if(percent === 0){
             return 0;
         }else{
             return percent * timelineWidth / 100;
         }
    }

    const constructData = () => {
        let d: string = '';
        let c1: number, c2: number;
        if (curve) {
            c1 = curve.dx1 + 22
            c2 = curve.dx - 22
            d = `M ${curve.dx1} ${curve.dy1} C ${c1} ${curve.dy2},${c2} ${curve.dy2}, ${curve.dx} ${curve.dy}`;
        }
        return d
    }
    return (
        <svg className="dependencies-overlay">
            <path d={constructData()} fill="transparent" strokeWidth="2" stroke="#C1C7D0" pointerEvents="none" />
            <circle cx={curve?.dx1} cy={curve?.dy1} r="4" fill="grey" />
            <circle cx={curve?.dx} cy={curve?.dy} r="4" fill="grey" />
        </svg>
    );
};

export default Link;

interface IBezier {
    dx1: number,
    dy1: number,
    dx2: number,
    dy2: number,
    dx: number,
    dy: number,
}