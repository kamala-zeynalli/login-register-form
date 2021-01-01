import React, {Component} from 'react';

class Icons extends Component{
static defautProps = {
    options: [
        "car" ,
        "clous",
        "couch",
        "city"
    ]
}
constructor(props){
    super(props) ;
        this.state = {
            icons: [ "city"]
        }
        this.handleIconClick = this.handleIconClick.bind(this);
    }
    handleIconClick(){
        let idx = Math.floor( Math.random() * this.props.icons.length)
    let newIcon = this.props.options[idx]

    // 1ci usul
    // let icons = this.state.icons;
    // icons.push(newIcon)
    // this.setState(state:{icons:icons});

    this.setState( {icons: [... this.state.icons, newIcon]})
    }
    render(){
    const icons = this.state.icons.map(icon => <i className={'fas fa-{icon}'} > </i>)    
          return(
            <div>
<h1>
    Icons: {icons}
</h1>
<button onClick={this.handleIconClick}>Click and Add</button>
            </div>
        )
    }
}

export default Icons;