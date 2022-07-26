import Card from "./Card";

function CardContainer(props) {
    let ttl1 = ''
    let dsc1 = ''
    let ttl2 = ''
    let dsc2 = ''
    let ttl3 = ''
    let dsc3 = ''
    if (props.title === 'Science') {
        ttl1 = "Carl Sagan"
        dsc1 = "We live in a society exquisitely dependent on science and technology, in which hardly anyone knows anything about science and technology."
        ttl2 = "Edward Teller"
        dsc2 = "The Science of today is the technology of tomorrow."
        ttl3 = "Albert Einstein"
        dsc3 = "The important thing is not to stop questioning. Curiosity has its own reason for existence. One cannot help but be in awe when he contemplates the mysteries of eternity, of life, of the marvelous structure of reality. It is enough if one tries merely to comprehend a little of this mystery each day"
    }
    else if (props.title === "Life") {
        ttl1 = "Thomas A. Edison"
        dsc1 = "Many of life’s failures are people who did not realize how close they were to success when they gave up."
        ttl2 = "Mae West"
        dsc2 = "You only live once, but if you do it right, once is enough."
        ttl3 = "Steve Jobs"
        dsc3 = "Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking."
    }
    else if (props.title === "Fiction") {
        ttl1 = "Alan Moore, V for Vendetta"
        dsc1 = "Artists use lies to tell the truth. Yes, I created a lie. But because you believed it, you found something true about yourself."
        ttl2 = "John Cheever"
        dsc2 = "Fiction is art and art is the triumph over chaos… to celebrate a world that lies spread out around us like a bewildering and stupendous dream."
        ttl3 = "Fiction"
        dsc3 = "I am Fiction"
    }


    return (
        <>
            <div className="row d-flex justify-content-center">
                <h1 className="display-4 text-center">{props.title}</h1>
                <Card
                    title={ttl1}
                    desc={dsc1}
                />
                <Card
                    title={ttl2}
                    desc={dsc2}
                />
                <Card
                    title={ttl3}
                    desc={dsc3}
                />
            </div>
        </>
    );
}
export default CardContainer;