import Draggable from 'react-draggable';
import { useContext, useRef } from 'react';

import { DraggableContext } from '../context/DraggableContext';

const Hero = () => {
  const { draggable } = useContext(DraggableContext);
  const titleRef = useRef<HTMLDivElement>(null);
  const blurbOuterRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col items-center justify-center py-12 lg:py-0 lg:h-screen bg-amber-100 gap-y-4">
      <Draggable disabled={!draggable} nodeRef={titleRef}>
        <div
          ref={titleRef}
          className="w-10/12 p-6 border-4 border-black rounded-sm shadow-blocks shadow-gray-800 bg-amber-400 lg:w-auto"
        >
          <h1 className="text-6xl font-bold text-center sm:text-8xl lg:text-9xl">
            Purdue Hackers
          </h1>
        </div>
      </Draggable>
      <Draggable disabled={!draggable} nodeRef={blurbOuterRef}>
        <div ref={blurbOuterRef} className="w-10/12 mx-auto sm:w-1/2">
          <div className="p-4 bg-white border-4 border-black rounded-sm shadow-blocks shadow-gray-800">
            <p className="text-lg font-bold sm:text-xl">
              💛⚡️ a community of students who collaborate, learn, and build
              kick-ass technical projects
            </p>
          </div>
        </div>
      </Draggable>
    </div>
  );
};

export default Hero;
