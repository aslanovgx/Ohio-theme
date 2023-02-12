import React from "react";
import "./Map.scss";
const Map = () => {
  return (
    <section id="map">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 p-0 mt-4">
            <iframe
              width="100%"
              height="400"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              id="gmap_canvas"
              src="https://maps.google.com/maps?width=635&amp;height=400&amp;hl=en&amp;q=%20+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
            <a href="https://maps-generator.com/"></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
