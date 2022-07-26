import Card from "./Card";

function CardContainer(props) {
    let data = [
        {
            title: "Carl Sagan",
            desc: "Science is a way of thinking much more than it is a body of knowledge.",
        },

        {
            title: "William Blake",
            desc: "Art is the tree of life. Science is the tree of death.",
        },

        {
            title: "Thomas Berger",
            desc: "The art and science of asking questions is the source of all knowledge.",
        },

        {
            title: "Albert Einstein",
            desc: "Science without religion is lame, religion without science is blind.",
        },

        {
            title: "Immanuel Kant",
            desc: "Science is organized knowledge. Wisdom is organized life.",
        },

        {
            title: "Isaac Asimov",
            desc: "The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom.",
        },

        {
            title: "Stephen Hawking",
            desc: "Scientists have become the bearers of the torch of discovery in our quest for knowledge.",
        },

        {
            title: "Oscar Wilde",
            desc: "Success is a science; if you have the conditions, you get the result.",
        },

        {
            title: "Georg C. Lichtenberg",
            desc: "It is strange that only extraordinary men make the discoveries, which later appear so easy and simple.",
        },

        {
            title: "Edward Teller",
            desc: "The science of today is the technology of tomorrow.",
        },

        {
            title: "Wernher von Braun",
            desc: "Research is what I’m doing when I don’t know what I’m doing.",
        },

        {
            title: "Isaac Newton",
            desc: "I seem to have been only like a boy playing on the seashore, and diverting myself in now and then finding a smoother pebble or a prettier shell than ordinary, whilst the great ocean of truth lay all undiscovered before me.",
        }
    ]


    return (
        <>
            <div className="row d-flex justify-content-center">
                <h1 className="display-4 text-center">{props.title}</h1>
                <Card title={data[0].title} desc={data[0].desc} />
                <Card title={data[1].title} desc={data[1].desc} />
                <Card title={data[2].title} desc={data[2].desc} />
                <Card title={data[3].title} desc={data[3].desc} />
                <Card title={data[4].title} desc={data[4].desc} />
                <Card title={data[5].title} desc={data[5].desc} />
                <Card title={data[6].title} desc={data[6].desc} />
                <Card title={data[7].title} desc={data[7].desc} />
                <Card title={data[8].title} desc={data[8].desc} />
                <Card title={data[9].title} desc={data[9].desc} />
                <Card title={data[10].title} desc={data[10].desc} />
                <Card title={data[11].title} desc={data[11].desc} />
                <Card title={data[11].title} desc={data[11].desc} />
            </div>
        </>
    );
}
export default CardContainer;