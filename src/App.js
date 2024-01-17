// import React from 'react'
// import { useEffect, useState } from 'react'
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {FormProvider, useForm} from 'react-hook-form'
// import { Button, Card, Modal, } from 'react-bootstrap';

// // interface User {
// //   id: Number;
// //   name: String;
// // }


// export default function App() {

//   const [movie, setMovie] = useState([]);
//   const [fav, setFav] = useState([]);
//   // const [selectedMovie, setSelectedMovie] = useState({});
//   // const [showEditModal, setShowEditModal] = useState(false);
//   // const [result, setResult] = useState([]);

//   const methods = useForm({
//     mode: 'onSubmit',
//     defaultValues: {
//       title: null,
//       releaseDate: null,
//       posterPath: null,
//     },
//   });

//   const {handleSubmit, register} = methods;

//   useEffect(() => {
//     fetchMovie();
//     fetchFavMovie();
//   }, []);


//   const fetchMovie = async () => {
//     const url = 'http://localhost:3000/movies';
//     const response = await fetch(url);
//     setMovie(await response.json());
//   };
 

//   // useEffect (() => {
//   //   axios
//   //   .get<User[]>("https://jsonplaceholder.typicode.com/users")
//   //   .then((res) => setUser(res.data))
//   //   .catch((err) => {
//   //   setError(err.message);
//   //   });
//   // },[])

//   const fetchFavMovie = async () => {
//     const url = 'http://localhost:3000/favourites';
//     const response = await fetch(url);
//     setFav(await response.json());

//   };

//   const addFav = async (movie) => {
//     console.log(movie);
//     try {
//       const request = {
//         ...movie,
//       };
//       const url = " http://localhost:3000/favourites";
//       const response = await axios.post(url, request);
//       setFav((movie) => [...movie, response.data]);
//     }catch(err) {
//       alert('Failed to add');
//       console.log('Failed to add');
// }
//   }
  

//   const deleteFav = async (id) => {
//     try {
//       const endpoint = `http://localhost:3000/favourites/${id}`;
//       const response = await axios.delete(endpoint);
//       console.log(response);
//     } catch (e) {
//       alert('Error deleting');
//     }
//     fetchFavMovie();
//   }


//   const addMovie = async (payload) =>{
//     try {
//       const response = await fetch('http://localhost:3000/movies/',{
//         method: 'POST',
//         headers: {
//           "Content-Type": "application/json"
//       },
//       body: JSON.stringify(payload),
//       });
//       console.log(await response.json());
//     } catch (e) {
//       alert('Error')
//     }
//   } 

//   const onFormSubmit = (data) => {
//     console.log(data);
//     const payload = {
//       ...data,
//       // movieID: "00",
//       // posterPath:"https://th.bing.com/th?id=OIP.bPBCgvp9N0SUbVYJnBg2IQHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=2.5&pid=3.1&rm=2"
//     };
//     addMovie(payload).then(() => {
//       fetchMovie();
//   })
//   methods.reset();
// }
//   // const handleEdit = (movie) => {
//   //   setSelectedMovie(movie);
//   //   setShowEditModal(true);
//   // };

//   // const handleSave = async () => {
//   //   try {
//   //     await axios.put(`https://localhost:3000/movies/${selectedMovie.id}`, selectedMovie);
//   //     // console.log('Updated movie:', response.data);
//   //     setShowEditModal(false);
//   //     fetchMovie(); // Refetch the data after successful update if needed
//   //   } catch (error) {
//   //     console.error('Error updating movie:', error);
//   //   }
//   // };

//   // const handleInputChange = (e) => {
//   //   const { name, value } = e.target;
//   //   setSelectedMovie((prevMovie) => ({ ...prevMovie, [name]: value }));
//   // };


//   return (
//     <div className="App row">
//       <div className="container col-5 " >
//         <h1>Movie List</h1>
//         <Button variant='primary'>Add movie</Button>

//         <div id="ModalExample" className="modal fade">
//           <div className="modal-dialog">
//             <div className="modal-content">
//             </div>
//           </div>
//         </div>

//         <FormProvider {...methods}>
//         <form onSubmit={handleSubmit(onFormSubmit)}>
//           <input placeholder='Title' {...register('title')} />
//           <input placeholder='ReleaseDate' {...register('releaseDate')} />
//           <input type="submit" />
//         </form>
//       </FormProvider>
      

//         {movie.map((film) => <div className="movie-container">
//           <Card style={{ width: '19rem' }} className='mb-5'>
//             <Card.Img variant="top" style={{  height:'19rem'}} src={film.posterPath} />
//             <Card.Body>
//               <Card.Title>Movie Title : {film.title}</Card.Title>
//               <Card.Text>
//                 Movie Release : {film.releaseDate}
//               </Card.Text>
//               <Button variant='primary' onClick={() => addFav(film)}>Add Fav</Button>
//             </Card.Body>
//           </Card>
//         </div>)}
//       </div>

//       <div className="container col-5 " >
//         <h1>Favourite Movie List</h1>
//         {fav.map((film) => <div className="movie-container">
//           <Card style={{ width: '19rem' }} className='mb-5'>
//             <Card.Img variant="top" style={{  height:'19rem'}} src={film.posterPath} />
//             <Card.Body>
//               <Card.Title>Movie Title : {film.title}</Card.Title>
//               <Card.Text>
//                 Movie Release : {film.releaseDate}
//               </Card.Text>
//               <Button variant='primary' onClick={() => deleteFav(film.id)}>Delete</Button>
//             </Card.Body>
//           </Card>
//         </div>)}
//       </div>
//     </div>
//   );
// }


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormProvider, useForm } from 'react-hook-form';
import { Button, Card, Modal } from 'react-bootstrap';

export default function App() {
  const [movie, setMovie] = useState([]);
  const [fav, setFav] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const methods = useForm({
    mode: 'onSubmit',
    defaultValues: {
      title: null,
      releaseDate: null,
    },
  });

  const { handleSubmit, register } = methods;

  useEffect(() => {
    fetchMovie();
    fetchFavMovie();
  }, []);

  const fetchMovie = async () => {
    const url = 'http://localhost:3000/movies';
    const response = await fetch(url);
    setMovie(await response.json());
  };

  const fetchFavMovie = async () => {
    const url = 'http://localhost:3000/favourites';
    const response = await fetch(url);
    setFav(await response.json());
  };

  const addFav = async (movie) => {
    console.log(movie);
    try {
      const request = {
        ...movie,
      };
      const url = 'http://localhost:3000/favourites';
      const response = await axios.post(url, request);
      setFav((movie) => [...movie, response.data]);
    } catch (err) {
      alert('Failed to add');
      console.log('Failed to add');
    }
  };

  const deleteFav = async (id) => {
    try {
      const endpoint = `http://localhost:3000/favourites/${id}`;
      await axios.delete(endpoint);
      alert('Deleted successfully');
    } catch (e) {
      alert('Error deleting');
    }
    fetchFavMovie();
  };

  const addMovie = async (payload) => {
    try {
      await fetch('http://localhost:3000/movies/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      console.log('Movie added successfully');
    } catch (e) {
      alert('Error adding movie');
    }
  };

  const onFormSubmit = (data) => {
    console.log(data);
    const payload = {
      ...data,
    };
    addMovie(payload).then(() => {
      fetchMovie();
    });
    methods.reset();
  };

  return (
    <div className="App row">
      <div className="container col-5 ">
        <h1>Movie List</h1>
        <Button variant="primary" onClick={() => setShowModal(true)}>
          Add movie
        </Button>

        {/* Bootstrap Modal */}
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Add Movie</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormProvider {...methods}>
              <form onSubmit={handleSubmit(onFormSubmit)}>
                <input placeholder="Title" {...register('title')} />
                <input placeholder="ReleaseDate" {...register('releaseDate')} />
                <Button type="submit">Submit</Button>
              </form>
            </FormProvider>
          </Modal.Body>
        </Modal>

        {movie.map((film) => (
          <div key={film.id} className="movie-container">
            <Card style={{ width: '19rem' }} className="mb-5">
              <Card.Img variant="top" style={{  height:'19rem'}} src={film.posterPath} />
            <Card.Body>
              <Card.Title>Movie Title : {film.title}</Card.Title>
              <Card.Text>
                Movie Release : {film.releaseDate}
              </Card.Text>
              {/* <Button variant='primary' onClick={() => addFav(film)}>Add Fav</Button> */}
            </Card.Body>
              <Button variant="primary" onClick={() => addFav(film)}>
                Add Fav
              </Button>
            </Card>
          </div>
        ))}
      </div>

      <div className="container col-5 ">
        <h1>Favourite Movie List</h1>
        {fav.map((film) => (
          <div key={film.id} className="movie-container">
            <Card style={{ width: '19rem' }} className="mb-5">
              {/* ... rest of your favorite movie card code */}
              <Card.Img variant="top" style={{  height:'19rem'}} src={film.posterPath} />
            <Card.Body>
              <Card.Title>Movie Title : {film.title}</Card.Title>
              <Card.Text>
                Movie Release : {film.releaseDate}
              </Card.Text>
              {/* <Button variant='primary' onClick={() => deleteFav(film.id)}>Delete</Button> */}
            </Card.Body>
              <Button variant="primary" onClick={() => deleteFav(film.id)}>
                Delete
              </Button>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
