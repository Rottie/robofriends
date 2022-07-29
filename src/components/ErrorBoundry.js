import React,{Component} from 'react';

class ErrorBoundry extends Component{
    constructor(props){
        super(props);
        this.state={
            hasError:false
        }
    }

    coomponentDidCatch(error,info){
       this.setState({hasError:true})
    }
    render(){
        if(this.state.hasError){
            return <h1>Error!</h1>
        }
        return this.props.children

    }
}
export default ErrorBoundry;