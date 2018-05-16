import React, {Component} from 'react'
import axios from 'axios';
class Idea extends Component {
    
    onChange= (event) =>{
         this.props.handleIdeaChange(event, this.props.index)
    }
    onBlur=() =>{ this.props.updateIdea(this.props.index)}


    
    
    render() {
        return (
            <div>
            <div>
                <input
                    name="title"
                    value={this.props.title} onChange={this.onChange} 
                    onBlur={this.onBlur}/>
            </div>

            <div>
                <textarea
                    name="description"                        
                    value={this.props.description} onChange={this.onChange}
                    onBlur={this.onBlur}  />
            </div>

            <div>
                <button
                    onClick={() => this.props.deleteIdea(this.props.id, this.props.index)}>
                    Delete
                </button>
            </div>
            <hr />
        </div>
        )
    }

}

export default Idea