import React, { useReducer } from "react";
import TimelineContext from  './timelineContext'
import {reducer} from './reducer';



const TimelineProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [timeline, dispatch] = useReducer(reducer,
    {
      trackHeight: 44,
      timelineWidth: 2922,
      blocks: [
        {
          id: "item-1",
          bgColor: "#8777D9",
          percent: 10,
          width: 360
        },
        {
          id: "item-2",
          bgColor: "#607d8b",
          percent: 1,
          width: 360
        },
        {
          id: "item-3",
          bgColor: "#FBBC05",
          percent: 8,
          width: 360
        },
        {
          id: "item-4",
          bgColor: "#4DB368",
          percent: 1,
          width: 360
        },
        {
          id: "item-5",
          bgColor: "#0052CC",
          percent: 12,
          width: 360
        },
        {
          id: "item-6",
          bgColor: "#8777D9",
          percent: 40,
          width: 360
        }
      ],
      links: [
        {
          source: "item-1",
          target: "item-6"
        },
        {
          source: "item-3",
          target: "item-6"
        },
        {
          source: "item-5",
          target: "item-6"
        },
        {
          source: "item-4",
          target: "item-5"
        }
      ]
    });


  return (
    <TimelineContext.Provider value={{...timeline, dispatch }}>
      {children}
    </TimelineContext.Provider>
  );
};

export default TimelineProvider;


