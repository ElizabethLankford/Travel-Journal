import React from "react"
import Card from "./components/Card"
import Header from "./components/Header"
import Footer from "./components/Footer"
import data from "./data"

export default function App(){
    const cards = data.map(item => {
        return (
            <Card 
                key={item.id}
                item={item}
            />
        )
    })
    return(
        <div className="app-container">
            <Header />
            <section className="card-list">
                {cards}
            </section>
            <Footer />
        </div>
    )
}