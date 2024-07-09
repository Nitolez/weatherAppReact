import React from "react";


const WeatherCard = ({ item }) => {
  //Transformar fecha a formato mas bonito
  const formatDate = (dateString) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString("es-ES", options);
  };

  return (
    <section className="weatherCard">
      <div> 
      <p>{formatDate(item.dt_txt)}</p>
      <p>Temperatura máxima: {item.main.temp_max} °C</p>
      <p>Temperatura mínima: {item.main.temp_min}</p>
      <p>Descripción: {item.weather[0].description}</p>

      {item.weather[0].description === "algo de nubes" ? (
        <img
          src="https://cdns3.eltiempo.es/eltiempo/blog/noticias/2019/03/11135102/cumulus_tipos-de-nubes.jpg"
          alt="algo de nubes"
        />
      ) : item.weather[0].description === "cielo claro" ? (
        <img
          src="https://media.istockphoto.com/id/500540815/es/foto/luz-de-cielo-azul.jpg?s=612x612&w=0&k=20&c=WejFrp7pq9CQ0_3PRLHo_MbszdQ4n5QJPLGimjvDtw4="
          alt="cielo claro"
        />
      ) : item.weather[0].description === "nubes dispersas" ? (
        <img
          src="https://images.unsplash.com/photo-1545099905-e079c75b423f?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="nubes dispersas"
        />
      ) : item.weather[0].description === "muy nuboso" ? (
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoxEFF3pwcUHs_Us1FEUOl6X1ySU_nXOAnsw&s"
          alt="muy nuboso"
        />
      ) : item.weather[0].description === "nubes" ? (
        <img
          src="https://fotografias.lasexta.com/clipping/cmsimages02/2023/01/02/64C4C340-0146-4ECF-B80C-629E83746148/cielo-nubes_103.jpg?crop=4864,3648,x311,y0&width=1200&height=900&optimize=low&format=webply"
          alt="nubes"
        />
      ) : item.weather[0].description === "lluvia ligera" ? (
        <img
          src="https://washingtonhispanic.com/wp-content/uploads/2019/04/VR3OJJWQZBGMPN5NPWAXN7SDMM-800x445.jpg"
          alt="lluvia ligera"
        />
      ) : <img
      src="https://media.istockphoto.com/id/1007768414/photo/blue-sky-with-bright-sun-and-clouds.jpg?s=612x612&w=0&k=20&c=MGd2-v42lNF7Ie6TtsYoKnohdCfOPFSPQt5XOz4uOy4="
      alt="otro"
    />}
    </div>
    </section>
  );
};

export default WeatherCard;
