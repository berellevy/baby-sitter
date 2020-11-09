import React, { useEffect, useState } from 'react';
import { BackendDomain } from '../utils/urls';

const Sitter = ({match, history}) => {
  const { id } = match.params
  const [sitter, setSitter] = useState(null)

  useEffect(() => {
    const fetchSitters = async () => {
      const results = await fetch(BackendDomain(`sitters/${id}`));
      const data = await results.json();
      setSitter(data);
    };
    fetchSitters();
  }, []);

  const sitterInfo = () => sitter && sitter
  console.log(sitterInfo());

  return (
    <div>
      
    </div>
  );
}

export default Sitter;
