import React, { useContext } from 'react';
import '../styles/healthbar.css'

export interface IHealthBarProps {
    health: number;
    damage: number;
}

const getStyle = (healthLeft:number) => {

    const style = {
      healthStyle:{
        width: `${healthLeft}%`,
        height:30,
        backgroundColor: 'green'
      },
      damageStyle: {
        width: '100%',
        backgroundColor: 'red',
        height:30
      },
      healthInfoStyle:{
        display: 'flex',
        justifyContent: 'space-between'
      }
    }
    return style;
}
const HealthBar: React.FC<IHealthBarProps> = ( props: IHealthBarProps ) => {
    const {damageStyle, healthStyle, healthInfoStyle} = getStyle(props.health)
    
    return (
      <div style={damageStyle}>
          <div style={healthStyle}>

          </div>
          <div style={healthInfoStyle}>
            <span>{props.health}</span>
            <span>{-props.damage}</span>
          </div>
      </div>
    );
  };
  
  export default HealthBar;
  