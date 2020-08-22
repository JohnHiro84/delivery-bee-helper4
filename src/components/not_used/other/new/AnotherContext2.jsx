import React from 'react';


const AppTres = () => {
  return (
    <ParentComponent theme="middle" />
  )
}

const ParentComponent = (props) => (
  <Child theme={props.theme} />
)

const Child = (props) => (
  <Grandchild theme={props.theme} />
)

const Grandchild = (props) => (
  <p>Theme: {props.theme}</p>
)

export default AppTres;
