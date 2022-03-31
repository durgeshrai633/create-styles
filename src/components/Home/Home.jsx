import React from "react";
import Text from "../Text/Text";
import "./home.css";
function Home() {
  return (
    <>
      <section className='container'>
        <div className='hero'>
          <h1 className='hero__heading'>Style your own Text/Button</h1>
        </div>
      </section>
      <Text></Text>
    </>
  );
}

export default Home;
