const { useState } = require('react');

const useInput = (name = '', type = 'text') => {
  const [state, setState] = useState('');

  const onChange = (e) => {
    setState(e.target.value);
  };

  return {
    value: state,
    onChange,
    type,
    name,
  };
};

export default useInput;
