import React from "react";

export default function Weather(props) {
  return (
    <div className="Weather">
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
        crossorigin="anonymous"
          />
      <script src="https://unpkg.com/axios@1.1.2/dist/axios.min.js"></script>
      <link rel="stylesheet" href="src/style.css" />

      <body>
        <div className="container">
          <div className="weather-app-wrapper">
            <div className="weather-app">
              <form id="search-form" class="mb-3">
                <div className="row">
                  <div className="col-9">
                    <input
                      type="search"
                      placeholder="Type a city.."
                      className="form-control"
                      id="city-input"
                      autocomplete="off"
                    />
                  </div>
                  <div className="col-3">
                    <input
                      type="submit"
                      value="Search"
                      className="btn btn-primary w-100"
                    />
                  </div>
                </div>
              </form>
              <div className="overview">
                <h1>{props.city}</h1>
                <ul>
                  <li>
                    Last updated:{props.day} {props.time}
                  </li>
                  <li>&#127774;sunny</li>
                </ul>
              </div>
              <div className="row">
                <div className="col-6">
                  <div className="d-flex weather-temperature">
                    <div>
                      <strong id="temperature">25</strong>
                      <span className="units">
                        <a href="/">°C</a> |{" "}
                        <a href="/" className="active">
                          °F
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <ul>
                    <li>Humidity: {props.humidity} %</li>
                    <li>Wind:{props.speed} km/h</li>
                  </ul>
                </div>
              </div>
              <div className="weather-forecast" id="forecast"></div>
            </div>
          </div>
        </div>
        <script src="src/app.js"></script>
      </body>
    </div>
  );
}
