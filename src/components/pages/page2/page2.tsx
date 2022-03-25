import React, {useCallback} from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { State } from '../../../redux/root.reducer';

export const Page2 = () => {
    const history = useNavigate();
    const str = useSelector((state: State) => state.sample.str);
    return(
    <>
      <h1>Page2</h1>
      <div>store: {str}</div>

      <button 
         onClick={() => {
         history('/')
         }}>TOPへ
      </button>
    </>
)};