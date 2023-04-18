import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState, useEffect, useRef } from "react";
import Typed from "typed.js";

export default function Home() {
  const [result, setResult] = useState(['']);

  const intervalRef = useRef(null)

  const resultRef = useRef(null)

  const typedRef = useRef(null)

  useEffect(() => {
    const typed = new Typed(resultRef.current, {
      strings: ['haha'],
      typeSpeed: 50,
      loop: false,
      smartBackspace: false,
      // startDelay: 1000,
      cursorChar: '_',
      contentType: null
    });
    typedRef.current = typed
    return () => {
      typed.destroy();
      stopClick()
    }
  }, [])
  
  function startClick() {
    console.log('startClick')
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        // setResult(pre => [...pre,"如果你不想阅读整篇文章，可以快速浏览这份摘要。要是某些部分不容易理解，你可以往下滚动寻找相关的内容去阅读。"]);
        typedRef.current.strings.push("如果你不想阅读整篇文章，可以快速浏览这份摘要。要是某些部分不容易理解，你可以往下滚动寻找相关的内容去阅读。")
        console.log('typedRef.current.strings', typedRef.current.strings)
        typedRef.current.reset(true);
        typedRef.current.start();
      }, 3000);
    }
  }

  function stopClick() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
  }

  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center justify-center space-y-4">
        <button className="bg-sky-500 hover:bg-sky-700 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white" onClick={startClick}>
        Start
      </button>
      <button className="bg-sky-500 hover:bg-sky-700 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white" onClick={stopClick}>
        Stop
      </button>
      <div>
        <span ref={resultRef}></span>
      </div>
        
      </div>
    </div>
  );
}
