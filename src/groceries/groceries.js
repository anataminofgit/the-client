import React, { Component } from 'react'

import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import { connect } from 'react-redux'
//import  {signIn} from '../store/action/authActions'
//import { Redirect } from 'react-router-dom'
//import './signin.css'

class Groceries extends Component {
    constructor(props) {
        super(props);

        this.state = {

        selectedId : null   , 
        products : [{
            id: "1234567890",
            productName: "banana",
            category: "fruits",
            manufecture: "katif",
            price: 6 ,
            size: "kgrm"
        },
        {
            id: "234567891",
            productName: "oreang",
            category: "fruits",
            manufecture: "katif",
            price: 3 ,
            size: "kgrm"
        }]
        }

    }
    

/*     changeHandler = (event) => {
        this.setState({[event.target.id]: event.target.value});
    }
          
    handleSubmit = (event) =>{
        event.preventDefault();
        this.props.signIn(this.state)
        this.setState( {email:"",
                        password:""})
    }  */


    
    handleClick = (event) =>{
    
        if (event){

        }
  
      this.setState({selectedId : event.id})

    }



    renderTitles(){
        const titles =  ["ID", 'Product Name', 'category','manufacture', 'price', 'size']

        return titles.map((title) =>{
            return (<th key = {title}> {title} </th>)
        })
    }
  

    renderColorId(id){
        return {color : (id === this.state.selectedId) ? "blue " : "black" } 
    }

    renderBody(){                                          
        return this.state.products.map((product)=>{  
            return(   
                <tr key={"tr-" + product.id.toString()} onClick={()=>this.handleClick(product)} >
                    <td style={this.renderColorId(product.id)}> {product.id}</td>
                    <td style={this.renderColorId(product.id)}> {product.productName}</td>
                    <td style={this.renderColorId(product.id)}> {product.category}</td>
                    <td style={this.renderColorId(product.id)}> {product.manufecture}</td>
                    <td style={this.renderColorId(product.id)}> {product.price}</td>
                    <td style={this.renderColorId(product.id)}> {product.size}</td>
                </tr>
                )
            })
        }   

    render() {
/*       if (this.props.auth.userUuid !== ""){
          return <Redirect to='/' />  
      }   */
      return (
         <Container>
            <Table striped bordered hover>
                <thead id="theadId">
                    <tr id = "tr-titels">
                        {this.renderTitles()}
                    </tr>
                </thead>
                <tbody>
                {this.renderBody()}
                </tbody>
            </Table>
        </Container>

        )
    }
}



 const mapStateToProps = (state) => {
    return {
      auth: state.auth
    }
  } 


/* const mapDispatchToProps = (dispatch)=> {
    return {
      signIn: (user) => dispatch(signIn(user))
    }
  }   */

export default connect(mapStateToProps)(Groceries)
