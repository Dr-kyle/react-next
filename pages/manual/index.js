import React, { useState, useEffect } from 'react';
import { useSession, signIn, signOut } from "next-auth/react"

function TypingAnimation() {
  const {data: session} = useSession()
  const [text, setText] = useState('');
  const [lines, setLines] = useState([]);

  useEffect(() => {
    const timer = setInterval(() => {
      const newLine = generateRandomString(10, 20);
      setLines(lines => [...lines, newLine]);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div  className='container'>
      <h1>Signed in as {JSON.stringify(session)}</h1>
      {lines.map((line, index) => (
        <span  key={index} className="break-all">
          <TypedText text={line} />
        </span>
      ))}
    </div>
  );
}

function TypedText(props) {
  const [isTyping, setIsTyping] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { text } = props;

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setCurrentIndex(currentIndex => currentIndex + 1);
      }, 50);
      return () => clearTimeout(timer);
    } else {
      setIsTyping(false);
    }
  }, [currentIndex, text.length]);

  return <>{text.slice(0, currentIndex)}</>;
}

function generateRandomString(minLength, maxLength) {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const length = Math.floor(Math.random() * (maxLength - minLength + 1) + minLength);
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

export default TypingAnimation;