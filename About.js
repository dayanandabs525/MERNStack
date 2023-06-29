import React, { Component } from 'react'

export class About extends Component {
    constructor(props){
        super(props);
        this.state={status:false,postData:[]}
    }
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res=>res.json())
        .then(data=>{
            setTimeout(()=>{
                this.setState({status:true,postData:data})
            },2000)
        })
        .catch(err=>console.log(err))
    }
    componentDidUpdate(){
        console.log("updated")
    }
  render() {
    return (
      <div>
        <h2>Posts</h2>
        {this.state.status?
        <div>
            {this.state.postData.map(post=>
                <div key={post.id}>
                    <h5>{post.title}</h5>
                    <p>{post.body}</p>
                </div>)}
        </div>:
        <h4>Loading...</h4>}
      </div>
    )
  }
}

export default About