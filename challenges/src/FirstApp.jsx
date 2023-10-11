import PropTypes from 'prop-types';
import { useState } from 'react';

const FirstApp = ({ value }) => {
  const [a, setA] = useState(value);
  const handleAdd = () => {
    setA(a +1)
  }
  const handleSubstract = () => {
    setA(a-1)
  }
  const handleReset = () => {
    setA(0)
  }
  return (
    <>
      <h1>Counter</h1>

      <button onClick={() => handleAdd()}> +1 </button>
      <br></br>
      <button onClick={() => handleSubstract()}> -1 </button>
      <br></br>
      <button onClick={() => handleReset()}> Reset </button>
      <br></br>
      <span>{a}</span>
      <br></br>
      <div className='COCODRILO'>
        <img src="https://i.ytimg.com/vi/RnBLFQpU9bk/maxresdefault.jpg" alt="holas" width={500}></img>
      </div>

    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  sum: PropTypes.number.isRequired
}

FirstApp.defaultProps = {
  title: 'AAAAAAA',
  sum: 300
}


export default FirstApp;