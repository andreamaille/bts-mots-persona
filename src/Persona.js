import React, { Component, Fragment } from 'react';

class Persona extends Component {
    constructor() {
        super()
        this.state = {
            cards: [],
            flipCardLyrics: [
                `Who the hell am I?`,
                `Oh do you wanna go?`,
                `How you feel?`,
                `Do you wanna die?`,
                `Do you wanna fly?`,
                `Wheres your soul?`,
                `Where's your dream?`,
                `Do you think you're alive?`
            ]
        }
    }

    componentDidMount() {
        const cardHTML = []
        for (let i = 0; i < 13; i++) {
            cardHTML.push(
                `Persona`)
        }

        this.setState({
            cards: cardHTML
        })


    }

    getRandomWord = () => {
        const lyrics = [...this.state.flipCardLyrics]
        return lyrics[Math.floor(Math.random() * lyrics.length)]
    }    

    
    render() {
        return (
            <Fragment>
                <section className="persona-section">
                    <div className="persona">
                        {this.state.cards.map((card, index) => {
                            return (
                                <div className="persona-card" id={index}>
                                    <div className="persona-card-inner">
                                        <div className='persona-text'>
                                            {card.split('').map(letter => {
                                                return <span>{letter}</span>
                                            })}
                                            {/* <p>{card}</p> */}
                                        </div>
                                        <div className="persona-lyrics">
                                            <p>{this.getRandomWord()}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </section>
            </Fragment>
        )
    }
}

export default Persona;
