"use client";

import Link from "next/link";

const TestRouting = (props) => {
  const { test } = props.params;
  return (
    <div>
      TEST Route Page -- {test} -- <br/>
      <Link href="/">Back to Home Page</Link>
    </div>
  );
};

export default TestRouting;
