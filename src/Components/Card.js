import React, {Component} from "react"
import "./Card.css"

export default class Card extends Component{
    constructor(){
        super()
        this.state = {

        }
    }
    render(){
        console.log(this.props)
        let {id,city,title, employer,favoriteMovies} = this.props.parentData
        let {first, last} = this.props.parentData.name
        let mappedMovies = favoriteMovies.map(movie =>{
            return(
                <li>{movie}</li>
            ) 
        })
        return(
            <div className = "Card-parent">
                <div>
                    {id}/25
                </div>
                <div>
                    {first} {last}
                </div>

                <ul>
                    <li>From: {city}</li>
                    <li>Job title: {title}</li>
                    <li>Employer: {employer}</li>
                </ul>

                <ol>
                    {mappedMovies}
                </ol>
            </div>
        )
    }
}