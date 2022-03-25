import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../../redux/root.reducer";
import { SampleActions } from "../../../redux/sample/sample.action";

export const Top = () => {
  // アクション発行できるようになる
  const dispatch = useDispatch();
  const [state, setState] = useState("");
  const [result, setResult] = useState("");

  // selector Storeの中身参照→ 持ってくる
  const str = useSelector((state: State) => state.sample.str);

  const handleClickTest = useCallback(() => {
    // アクションを動かしてる
    dispatch(
      SampleActions.test({
        str: state,
        onSuccess: (str) => {
          setResult(str);
        },
      })
    );
  }, [dispatch, state]);

  return (
    <div className={'top'}>
      {/*  */}
      <h1>テストです</h1>
      
      {/*  */}
      <h2>Reducerの中身 : {str}</h2>
      <h2>Reducerの中身 : {result}</h2>
      
      <div>
        {/*  */}
        {/*  */}
        <input
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
      </div>
      <div>
        {/*  */}
        <button onClick={handleClickTest}> Redux Test </button>
      </div>
    </div>
  );
};

/**
 *
 *
 */

// Redux

// action : 動作
// dispatch : アクション発行
// reducer : それを保存する場所
