import React from "react";
import Link from "next/link";
function Main() {
  return (
    <div>
      <Link href="/signup">sign up</Link>
      <Link href="/signin">sign in</Link>
    </div>
  );
}

export default Main;
