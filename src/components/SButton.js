import React from 'react';
import Switch from "react-switch";

class SButton extends React.Component {


    Change() {
        this.props.Toggle()
    }

    constructor() {
      super();
      this.state = { checked: false };
      this.handleChange = this.handleChange.bind(this);
    }
   
    handleChange(checked) {
      this.setState({ checked });
      this.Change()
    }
   
    render() {
      return (
        <div className='tc' > 

          <label htmlFor="small-radius-switch">
            <Switch
              checked={this.state.checked}
              onChange={this.handleChange}
              handleDiameter={28}
              offColor="#08f"
              onColor="#0ff"
              offHandleColor="#0ff"
              onHandleColor="#08f"
              height={40}
              width={70}
              className="react-switch"
              id="small-radius-switch"/>
          </label>
          <p></p>
        </div>
      );
    }
  }


export default SButton;