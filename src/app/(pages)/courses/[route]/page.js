"use client";

import Link from "next/link";

const NextJs = (props) => {
  const { route } = props.params;
  return (
    <div>
      NextJs Page -- {route} -- <br/>
      <Link href="/">Back to Home Page</Link>
    </div>
  );
};

export default NextJs;
