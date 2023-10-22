
let peliculas = '';

axios.get('https://api.themoviedb.org/3/movie/popular?api_key=192e0b9821564f26f52949758ea3c473&language=es-MX')
   .then((respuesta)=> {
       //console.log(respuesta.data.results[1].title);
       //console.log(respuesta.data.results);
       //document.getElementById('contenedor').innerHTML = respuesta.data.results[1].title;

       respuesta.data.results.forEach(pelicula => {
           peliculas += `
           <div>
               <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
               <h3 class="titulo">${pelicula.title}</h3>
           </div>
           `;


       });
       console.log(peliculas);
       document.getElementById('contenedor').innerHTML = peliculas;
       
   })
   .catch((error)=>{
       console.log(error)
   });
   //document.getElementById('contenedor').innerHtml = peliculas;
//Forma alternativa
/* const obtenerPeliculas = async () =>{
   try{    
       const respuesta = await axios.get('https://api.themoviedb.org/3/movie/popular', {
           params: {
               api_key: '192e0b9821564f26f52949758ea3c473',
               language: 'es-MX'
           }
       });
       
       console.log(respuesta);
   }catch(error){
       console.log(error);
   }
} */


