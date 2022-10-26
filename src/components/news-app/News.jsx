import React, { useEffect, useState } from 'react'
import axios from "axios";

const News = () => {
    const [news,setNews] = useState([])

    const getNews = async ()=>{ 
        const url = "http://localhost:3000/config/news.json";

        try {
            const {data} = await axios(url)
            console.log(data)
            setNews(data)
            
        } catch (error) {
            console.log(error)
        }
    }
console.log(news);
    

useEffect(() => {
   getNews();
}, [])
 

  return (
    <div className="mt-5">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="false"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={3}
            aria-label="Slide 3"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={4}
            aria-label="Slide 3"
          />
        </div>

        <div className="carousel-inner">
          {news.map((item, i) => {
            const { title, description, img_url } = item;
            return i === 0 ? (
              <div className="carousel-item active" key={i}>
                <img
                  src={img_url}
                  className="w-100"
                  height={400}
                  alt="img"
                />
                <div className="carousel-caption  d-sm-block ">
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className="accordion-button "
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="false"
                          aria-controls="collapseOne"
                        >
                          {title}
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body d-none d-sm-block">{description}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="carousel-item" key={i}>
                <img
                  src={img_url}
                  className="w-100"
                  height={400}
                  alt="img"
                />
                <div className="carousel-caption d-sm-block">
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="false"
                          aria-controls="collapseOne"
                        >
                          {title}
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body  d-none d-sm-block">{description}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          ;
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default News