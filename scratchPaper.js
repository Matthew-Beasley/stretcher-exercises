// Should it be this...
const someFunction = () => {
  //some code
}

const MyComponent = () => {
  return (
    <div>My JSX code</div>
  )
}

//or this...
const MyComponent = () => {
  const someFunction = () => {
    //some code
  }
  return (
    <div>My JSX code</div>
  )
}

