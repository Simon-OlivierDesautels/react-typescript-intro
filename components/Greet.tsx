import React from "react";

type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

export const Greet = (props: GreetProps) => {
  return (
    <h2>
      {props.isLoggedIn
        ? `Hello ${props.name} you have ${props.messageCount} unread`
        : "Please log in first"}
    </h2>
  );
};
