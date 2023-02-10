import { useEffect, useState } from "react";
import axios from "axios"
import Infocards from "./Infocards";

const Cards = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios
            .get("http://localhost:3001/api")
            .then((res) => setData(res.data))
    }, [])

    return (
        <div className="cards">
            <section className="flex-cards">
                {
                    data.map((logements, index) =>
                        <Infocards key={index} logements={logements} />
                    )
                }
            </section>
        </div>
    );
};

export default Cards;