import React from 'react';

export function Welcome(props) {
  return <h2>Welcome to My Counter App {props.name}!</h2>;
}

export function Temp() {
  return (
    <div>
      <Welcome name="bhavya" />
      <Welcome name="aadhvik" />
    </div>
  );
}
