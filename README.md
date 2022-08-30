---
title: 'React Pin-Code Input'
date: 'August 29, 2022'
excerpt: 'React pin-code input no libraries'
cover_image: '/images/posts/REACT-PIN-IMG8.png'
---

If you had the need to create a `Pin-code` input before you probably found many external libraries online to solved your problem, and when it 
comes to raw solutions you problably found very complex solutions involving useRef for example.

I know i've been througth that, so i created a super simple yet usefull react pin-input, and this is what the final result:

![react-pin-code](https://user-images.githubusercontent.com/86134825/187494354-38cc624c-7389-4238-94a4-706dc58d8e11.gif)

[live demo](https://vzsoares.github.io/react-pin-code-example/)

---

The main idea here is to use a ´string´ and the ´onKeyDown´ event on a input, heres how:

First lets create a array to dertemine our pin code size

```
const pinSize = 5; 
const pinArray = [...new Array(pinSize)];
```

The next step is to create our PIN state and map the pinArray to create our inputs:

```
const [PIN, setPIN] = useState("");
...

{pinArray.map((_,i) => (
  <input 
   value={PIN[i] ?? ""}
  />
))}
```
 
As you can see the major logic here is to have and manipulate a string and display it accordingly to the index. Also the [nullish operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator) is used to avoid a undefined value.

Lets then create our handler function based on the onKeyDown event:

```
...
  function handleKeyDown(event){
    if (e.key === "Backspace") setPIN(PIN.slice(0, -1));
    else if (PIN.length + 1 > pinSize) return;
    else setPIN(PIN + e.key[0]);
  }
```

This implementation allows basicly any input but you can easily filter that using `e.key.charCodeAt(0)` to get de ASCII value and use it to filter the input value.

Now just implement it as folows:

```
  {pinArray.map((_,i) => (
   <input 
     value={PIN[i] ?? ""}
     onKeyDown={handleKeyDown}
   />
  ))}
```
Done, simple isn't it? Now just throw in some styles and you ready to go!!

Full Code with some styles:
```
export default function App() {
  const [PIN, setPIN] = useState("");
  const pinSize = 5;

  function handleKeyDown(e) {
    if (e.key === "Backspace") setPIN(PIN.slice(0, -1));
    else if (PIN.length + 1 > pinSize) return;
    else setPIN(PIN + e.key[0]);
  }

  return (
    <>
        <div style={{ display: "flex", gap: "1rem" }}>
          {[...new Array(pinSize)].map((_, i) => (
            <input
              value={PIN[i] ?? ""}
              onKeyDown={handleKeyDown}
              maxLength="1"
              style={{
                width: "5rem",
                height: "5rem",
                fontSize: "2rem",
                caretColor: "transparent",
                textAlign: "center",
                outline: `${PIN[i] !== undefined ? "4px solid orange":"0"}`,
              }}
            />
          ))}
        </div>
    </>
  );
}
```