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

                {data.map((item) => (
                    <Card title={item.title} desc={item.desc} />
                ))}

            </div>
        </>
    );
}
export default CardContainer;