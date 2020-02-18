import React, { Component } from 'react'

import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import { connect } from 'react-redux'
import  {getProducts} from '../store/action/groceriesActions'
import { Redirect } from 'react-router-dom'
import { Button } from 'react-bootstrap'
//import './signin.css'

class Groceries extends Component {
    constructor(props) {
        super(props);

        this.state = {
        selectedId : null   , 
        
        }
        this.props.getProducts(this.props.auth.userUuid)

    }
    

    
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
        const products = this.props.groceries.products ; 

        return products.map((product)=>{  
            return(   
                <tr key={"tr-" + product.id.toString()} onClick={()=>this.handleClick(product)} >
                    <td style={this.renderColorId(product.id)}> {product.id}</td>
                    <td style={this.renderColorId(product.id)}> {product.Product_name}</td>
                    <td style={this.renderColorId(product.id)}> {product.category}</td>
                    <td style={this.renderColorId(product.id)}> {product.manufecture}</td>
                    <td style={this.renderColorId(product.id)}> {product.price}</td>
                    <td style={this.renderColorId(product.id)}> {product.size}</td>
                </tr>
                )
            })
        }   

    renderDeleteButton(){
    // let value = this.state.selectedId ===  null
     //console.log ("value",value, this.state.selectedId)
        return (this.state.selectedId ===  null) ? <Button disabled >Delete </Button> : <Button>Delete </Button> 
    }

    render() {
    if (this.props.auth.userUuid === ""){
          return <Redirect to='/login' />  
    }
    else   
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
                <Button >Add...</Button>
                {this.renderDeleteButton()} 
        </Container>
        )
    }
}



 const mapStateToProps = (state) => {
    return {
      auth: state.auth,
      groceries : state.groceries
    }
  } 


const mapDispatchToProps = (dispatch)=> {
    return {
      getProducts: (user) => dispatch(getProducts(user))
    }
  }   

export default connect(mapStateToProps, mapDispatchToProps)(Groceries)
