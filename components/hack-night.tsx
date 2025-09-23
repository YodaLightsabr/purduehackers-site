import Draggable from 'react-draggable';
import { useContext, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';

import { DraggableContext } from '../context/DraggableContext';
import { IEvent } from '../utils/interfaces/SanityEvent';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLeftLong,
  faRightLong,
  faEllipsis,
  faMoon,
  faTriangleExclamation
} from '@fortawesome/free-solid-svg-icons';
import { faWindows } from '@fortawesome/free-brands-svg-icons';

import SprayCanvas from './spray-canvas';
import Point2D from '../utils/Point2D';

import HackNightCard from './hack-night-card';
const Countdown = dynamic(() => import('./countdown'), { ssr: false });

const HackNight = ({
  fetchedHackNights,
  upcomingHackNight
}: {
  fetchedHackNights: IEvent[];
  upcomingHackNight: IEvent;
}) => {
  const upcomingDate = new Date(upcomingHackNight.date);

  const { draggable } = useContext(DraggableContext);
  const [cursorPosition, setCursorPosition] = useState<Point2D>({ x: 0, y: 0 });

  const [spray, setSpray] = useState(false);
  const windowRef = useRef<HTMLDivElement>(null);
  const breakingRef = useRef<HTMLDivElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const ascendRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const blobRef = useRef<HTMLDivElement>(null);
  const keyboardRef = useRef<HTMLDivElement>(null);
  const mysteryRef = useRef<HTMLDivElement>(null);

  return (
    <div className="bg-gray-dark min-h-screen">
      {spray && (
        <SprayCanvas
          cursorPosition={cursorPosition}
          onCursorPositionChanged={setCursorPosition}
        />
      )}
      <div className="px-4 sm:px-12 pt-12">
        <h1 className="text-5xl sm:text-9xl text-center sm:text-left font-bold text-white">
          Hack Night
        </h1>
        <div className="relative flex flex-col items-center mt-8">
          <Countdown hackNightDate={upcomingDate} />
          <Draggable disabled={!draggable} handle=".handle" nodeRef={windowRef}>
            <div
              ref={windowRef}
              className="border-solid border-black border-2 z-10 shadow-email shadow-gray-900/30
                w-full md:w-2/3 lg:w-1/2 rounded-xl bg-white relative right sm:top-12 sm:left-44"
            >
              <div
                className="handle w-full bg-gray-300 rounded-t-xl px-2 text-black font-mono font-bold
                  border-black border-solid border-b-2 flex justify-between items-center cursor-pointer"
              >
                <div>
                  <FontAwesomeIcon icon={faWindows} size="1x" /> Window
                </div>
              </div>
              <div
                className="w-full h-6 bg-white flex justify-end items-center
                  border-solid border-b-black border-b-2"
              >
                <div className="flex w-full h-full justify-between">
                  <FontAwesomeIcon icon={faEllipsis} className="text-xl px-2" />
                  <div
                    className="flex w-16 justify-between h-full 
                      border-solid border-black border-l-2 px-2"
                  >
                    <FontAwesomeIcon icon={faLeftLong} className="text-xl" />
                    <FontAwesomeIcon icon={faRightLong} className="text-xl" />
                  </div>
                </div>
              </div>
              <div className="p-4 m-0">
                <div className="border-solid border-black border-2 p-4 rounded-xl flex flex-col gap-3">
                  <h2 className="font-bold text-2xl sm:text-3xl mb-4">
                    The Night is Nigh 🌙
                  </h2>
                  <p className="text-mxs">
                    Have you ever felt burdened by the weight of your
                    ever-increasing responsibilities? Do you want to escape from
                    reality, to a plane of existence far away from the endless
                    monotony of daily life? Well, you can&apos;t. But you know
                    what you can do? Come to Hack Night! 🌙
                  </p>
                  <p className="text-mxs">
                    Hack Night is uninterrupted time to work on personal
                    projects—anything from a little hack that you ship by the
                    end of the night, to part of a larger project. We run
                    Sessions throughout to help you get started. It&apos;s like
                    a mini-hackathon every week. 💫 💻
                  </p>
                  <p>
                    Join us{' '}
                    <span className="font-bold">every Friday at 8pm</span> at{' '}
                    <span className="font-bold">the Bechtel Center</span>.
                  </p>
                </div>
              </div>
            </div>
          </Draggable>
          <Draggable handle=".handle" nodeRef={breakingRef}>
            <div
              ref={breakingRef}
              className="absolute top-[-100px] left-[850px] w-96 sm:w-[300px] border-2 border-white flex flex-col justify-between items-center bg-gray-800 text-white
                mt-8 sm:mt-0 mb-4 sm:mb-8 shadow-email shadow-orange-300/70"
            >
              <div
                className="handle bg-cyan-400 animate-bg-flash w-full flex border-b-2 border-white
                  cursor-pointer hover:bg-purple-400 hover:text-white"
              >
                <FontAwesomeIcon
                  className="ml-2 mt-1"
                  icon={faTriangleExclamation}
                  size="1x"
                />
                <div className="grow" />
                <p className="font-semibold text-white">
                  <span className="italic text-lg">BREAKING NEWS!!!!!!</span>
                </p>
                <div className="grow" />
                <FontAwesomeIcon
                  className="mr-2 mt-1"
                  icon={faTriangleExclamation}
                  size="1x"
                />
              </div>
              <div className="w-full h-full p-4 text-center text-base uppercase">
                <p>
                  <a
                    href="https://blog.purduehackers.com/posts/papers-please"
                    target="_blank"
                    className="font-semibold text-yellow-300 hover:underline"
                  >
                    PASSPORT CEREMONIES
                  </a>
                  <br />
                  <span className="font-semibold text-4xl">
                    {' '}
                    ✨ NOW LIVE ✨
                  </span>{' '}
                  <br /> get inducted into <br />
                  <span className="font-bold text-3xl text-yellow-300">
                    The Republic of Hackerland
                  </span>{' '}
                  <br />
                  There is <br />
                  <span className="font-bold text-3xl text-purple-500">
                    {' '}
                    No escape.
                  </span>
                </p>
                <div
                  className="w-full h-full
                    flex jusitfy-center items-center"
                >
                  <div className="grow" />
                  <Link
                    href={'https://passports.purduehackers.com'}
                    target="_blank"
                  >
                    <button className="uppercase dark-action-btn mt-2 mb-1 text-black bg-white shadow-yellow-400">
                      Become a Citizen{' '}
                      <FontAwesomeIcon
                        className="ml-1 mt-1"
                        icon={faMoon}
                        size="1x"
                      />
                    </button>
                  </Link>
                  <div className="grow" />
                </div>
              </div>
            </div>
          </Draggable>
          <Draggable
            disabled={!draggable}
            handle=".handle"
            nodeRef={terminalRef}
          >
            <div
              ref={terminalRef}
              className="border-solid border-gray-300 border-2 shadow-email shadow-gray-900/30
                w-full sm:w-3/5 md:w-3/5 lg:w-2/5 h-64 rounded-xl font-bold font-mono bg-black z-5 mt-6 sm:mt-0 sm:bottom-20 sm:right-72 relative"
            >
              <div
                className="handle w-full bg-gray-300 rounded-t-lg px-2 cursor-pointer
                  border-black border-solid border-b-4 flex justify-between items-center"
              >
                <div>
                  <FontAwesomeIcon icon={faWindows} size="1x" />{' '}
                  wackhacker@hacknight:~$
                </div>
              </div>
              <div
                className="px-4 text-green-400 text-sm overflow-scroll 
                  scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200"
              >
                <p>hacknight login: wackhacker</p>
                <p>Password: </p>
                <p>Last login: Fri May 04 16:16:08 on tty2</p>
                <p>wackhacker@hacknight:~$ _</p>
                <p>Adding user &apos;hacker&apos; ...</p>
                <p>Creating home directory &apos;/dir&apos; ...</p>
                <p>Copying files from &apos;/etc/skel&apos; ...</p>
                <p>Is this information correct? [Y/n]</p>
              </div>
            </div>
          </Draggable>
          <div className="flex flex-col sm:flex-row relative">
            <Draggable handle=".handle" nodeRef={ascendRef}>
              <div
                ref={ascendRef}
                className="border-white font-bold font-mono border-2 flex flex-col justify-between items-center 
                  bg-black w-36 h-68 m-0 shadow-email shadow-blue-400/70 relative top-24 left-36"
              >
                <div
                  className="handle hover:bg-cyan-400 hover:text-black w-full flex 
                    border-b-2 border-white cursor-pointer bg-blue-600 text-white text-sm"
                >
                  <p className="ml-1">_</p>
                  <div className="grow" />
                  <p>ASCEND.png</p>
                  <div className="grow" />
                </div>
                <div className="w-full h-full">
                  <div className="w-full h-full border-4 border-green-400">
                    <div className="w-full h-full border-4 border-pink-400">
                      <div className="w-full h-full border-4 border-cyan-300">
                        <div className="w-full h-full border-4 border-yellow-200">
                          <div className="w-full h-full border-4 border-purple-400">
                            <div className="w-full h-full border-4 border-purple-500">
                              <div className="w-full h-full border-4 border-purple-600">
                                <div className="w-full h-full border-4 border-purple-700">
                                  <div className="w-full h-full border-4 border-purple-800">
                                    <div
                                      className="w-full h-full border-4 border-purple-900
                                        flex items-center justify-center"
                                    >
                                      <Image
                                        src="/img/trollface.webp"
                                        alt="troll face"
                                        width={35}
                                        height={35}
                                        draggable={false}
                                        className="rounded-b-xl"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Draggable>
            <Draggable
              disabled={!draggable}
              handle=".handle"
              nodeRef={imageRef}
            >
              <div
                ref={imageRef}
                className="border-solid border-gray-300 border-2 w-fit h-fit rounded-xl shadow-email shadow-gray-900/30
                font-bold font-mono bg-black mt-6 sm:mt-0 sm:left-48 sm:bottom-40 relative"
              >
                <div
                  className="handle w-full bg-gray-300 rounded-t-lg px-2 cursor-pointer
                    border-black border-solid flex justify-between items-center"
                >
                  <div>
                    <FontAwesomeIcon icon={faWindows} size="1x" />{' '}
                    awesomeness.png
                  </div>
                </div>
                <Image
                  src="/img/hackNight2.jpeg"
                  alt="Hack Night!"
                  width={400}
                  height={300}
                  draggable={false}
                  className="rounded-b-xl"
                />
              </div>
            </Draggable>
          </div>
          <div className="flex flex-col sm:flex-row sm:mt-0 relative -top-48">
            <Draggable handle=".handle" nodeRef={blobRef}>
              <div
                ref={blobRef}
                className="w-fit h-fit border-solid border-gray-300 border-4 shadow-email shadow-gray-900/30
                rounded-xl font-mono font-bold mt-6 sm:mt-0 relative -left-12 sm:left-0 -top-[17rem]"
              >
                <div
                  className="handle w-full bg-gray-300 rounded-t-md px-2 text-xs cursor-pointer
                  border-black border-solid flex justify-between items-center"
                >
                  <div>blobfish.tmp</div>
                </div>
                <Image
                  src="/img/blob.png"
                  alt="temporary blobfiss"
                  width={110}
                  height={110}
                  className="rounded-b-lg"
                />
              </div>
            </Draggable>
            <Draggable nodeRef={keyboardRef}>
              <div
                ref={keyboardRef}
                className="cursor-pointer relative top-20 left-48"
              >
                <Image
                  src="/img/keyboard4.png"
                  alt="Keyboard"
                  width={850}
                  height={187}
                  draggable={false}
                />
              </div>
            </Draggable>
            <Draggable handle=".handle" nodeRef={mysteryRef}>
              <div
                ref={mysteryRef}
                className="w-[180px] border-2 border-black flex flex-col justify-between items-center bg-white
                  h-48 mt-8 sm:mt-0 mb-4 sm:mb-8 shadow-email shadow-pink-400/70"
              >
                <div
                  className="handle bg-pink-400 w-full flex border-b-2 border-black
                    cursor-pointer hover:bg-cyan-400 hover:text-white"
                >
                  <p className="ml-1">_</p>
                  <div className="grow" />
                  <p>???</p>
                  <div className="grow" />
                </div>
                <div className="w-full h-full p-4">
                  <div
                    className="w-full h-full border-2 border-black bg-gradient-to-r from-cyan-400 via-yellow-300 to-pink-400
                      flex justify-center items-center"
                  >
                    <button
                      onClick={() => {
                        setSpray(true);
                      }}
                      className="email-btn mx-7"
                    >
                      HACK.
                    </button>
                  </div>
                </div>
              </div>
            </Draggable>
            <div className="absolute top-[-40px]">
              {fetchedHackNights
                .slice(0)
                .reverse()
                .map((hackNight, i) => {
                  return (
                    <HackNightCard
                      name={hackNight.name}
                      dateProp={hackNight.date}
                      description={hackNight.description}
                      rsvp={hackNight.rsvp}
                      img={hackNight.img}
                      location={hackNight.location}
                      index={i}
                      key={i}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HackNight;
