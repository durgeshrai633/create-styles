import React, { useRef, useState } from "react";
import { CSS_STYLES } from "../CSS_PROPERTIES/CSS_PROPERTY";
import Input from "../Utils/Input";
import "./text.css";

function Text() {
  const [styles, setStyles] = useState({});
  // const [css, setCss] = useState("");
  const [value, setValue] = useState({ text: "Hello", edit: false });
  const CODE = useRef();
  const copyClipboard = () => {
    var copyText = CODE.current.style;
    navigator.clipboard.writeText(copyText.cssText);
    alert("Copied the text: " + copyText.cssText);
  };
  return (
    <section className='container'>
      <div className='text'>
        <div className='text_heading'>
          {value.edit ? (
            <input
              type='text'
              name=''
              style={styles}
              id=''
              value={value.text}
              onMouseOut={() => setValue({ ...value, edit: false })}
              onChange={(e) => setValue({ ...value, text: e.target.value })}
            />
          ) : (
            <span
              ref={CODE}
              style={styles}
              onClick={() => setValue({ ...value, edit: true })}
            >
              {value.text}
            </span>
          )}
        </div>
        <div className='text_output'>
          <span onClick={() => copyClipboard()} className='copy'>
            Copy Your CSS Code
          </span>
        </div>
        <form
          action=''
          className='text__form'
          onChange={(e) =>
            setStyles({ ...styles, [e.target.name]: e.target.value })
          }
        >
          {CSS_STYLES.map((property) => {
            return (
              <Input
                key={property.key}
                name={property.name}
                id={property.id}
                placeholder={property.placeholer}
                label={property.label}
              ></Input>
            );
          })}
        </form>
      </div>
    </section>
  );
}

export default Text;
