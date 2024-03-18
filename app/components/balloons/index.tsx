import { useState } from "react";
import "./styles.css"

export default function BalloonAnimation({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showBalloons, setShowBalloons] = useState(false);
  setTimeout(() => setShowBalloons(true), 1000);
  return (
    <div className={showBalloons ? 'active' : 'balloons'}>
      <div className={'balloon'}></div>
      <div className={'balloon'}></div>
      <div className={'balloon'}></div>
      <div className={'balloon'}></div>
      {children}
      <div className={'balloon'}></div>
      <div className={'balloon'}></div>
      <div className={'balloon'}></div>
      <div className={'balloon'}></div>
    </div>
  );
}
