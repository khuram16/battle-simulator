import React, { useContext } from 'react';
import '../styles/attackbutton.css'

export interface IAttackButtonProps {
    label: string;
    callBack: Function
}

const AttackButton: React.FC<IAttackButtonProps> = ( props: IAttackButtonProps ) => {

    const onAttack = () =>{
      props.callBack()
    }
    return (
      <>
        <button className="attack-button" onClick={onAttack}>{props.label}</button>
      </>
    );
  };
  
  export default AttackButton;
  