import { useEffect, useState } from "react";
import axios from "axios"
import Collapse from '../components/Collapse';

const IdLogement = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    let url = new URL(window.location);
    let id = url.searchParams.get("id");
    axios
      .get(`http://localhost:3001/api/id?id=${id}`)
      .then((res) => {
        if (res.status === '404') {
          window.location.replace('/*');
        }
        setData(res.data)
      })
      .catch((res) => {
        window.location.replace('/*');
      })
  }, [])

  let equipment = data.equipments
  let pic = data.pictures
  let tags = data.tags
  let host = data && data.host
  let hostName = host && host.name;
  let hostPicture = host && host.picture

  const rating = [1, 2, 3, 4, 5]

  const left = "./slider/Vector(7).png"
  const right = "./slider/Vector(8).png"


  const [current, setCurrent] = useState(0);
  const length = pic && pic.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (

    <div className='info-logement' >
      <div className="container-carousel">

        <div className="arrow-container">
          {length > 1 && (
            <img
              src={left}
              alt="gauche"
              onClick={prevSlide}
              className="leftArrow"
            />
          )}
          {length > 1 && (
            <img
              src={right}
              alt="droite"
              onClick={nextSlide}
              className="rightArrow"
            />
          )}
        </div>

        <section className="flex-img-logement">
          <div>
            {
              pic && pic.map((logements, index) =>
                <div
                  key={index}
                  className={
                    current === index
                      ? "slide slider__active-picture"
                      : "slide slider__inactive-picture"
                  }
                >
                  {index === current && <img className="img-lo" src={logements} alt="appartement à louer" />}
                  {index === current && (
                    <span className="slider__number">
                      {current + 1}/{length}
                    </span>
                  )}
                </div>
              )
            }
          </div>
        </section>
      </div>


      <div className="flex-owner-logement">
        <div className="flex-logement">
          <div className='position-logement'>
            <h1 className="title-logement">{data.title}</h1>
            <h3 className="location-logement">{data.location}</h3>
          </div>

          <div className='flex-li-logement'>
            {
              tags && tags.map((tag, index) =>
                <ul className="ul-tag-logement" key={index} tag={tag}>
                  <li className="li-tag-logement">
                    {tag}
                  </li>
                </ul>
              )
            }
          </div>
        </div>
        <div className='owner-logement'>
          <div className="flex-picname-logement">
            <p className="owner-name" key={Math.random()}>{hostName}</p>
            <img className="img-logement" src={hostPicture} alt="owner" />
          </div>
          <div className='star-logement'>
            {
              rating.map((stars, index) =>
                data.rating >= stars ? (
                  <img className="star-size" key={index} src="./stars/Vector.png" alt="" />
                ) : (
                  <img className="star-size" key={index} src="./stars/Vector(1).png" alt="" />
                )
              )
            }
          </div>
        </div>
      </div>

      <div className='collapse'>
        <div className="flex-collpase-logement">
          <div className="flex-logement-collapse">
            <Collapse title='Description' content={data.description} />
          </div>
          <div className="flex-logement-collapse">
            <Collapse title='Équipements' content=
              <div className="flex-li">
                {
                  equipment && equipment.map((equipement, index) =>
                    <ul className="ul-equipement" key={index} equipement={equipement}>
                      <li className="li-equipement">
                        {equipement}
                      </li>
                    </ul>
                  )
                }

              </div>
            />
          </div>
        </div>
      </div>
    </div>
  );


}


export default IdLogement;