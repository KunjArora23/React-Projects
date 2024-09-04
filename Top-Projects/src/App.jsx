/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'

import Navbar from './Components/Navbar'
import Filter from './Components/Filter'
import Cards from './Components/Cards'
import Spinner from './Components/Spinner'
import './index.css'
import { apiUrl, data } from './data'
import { toast } from 'react-toastify'


function App() {

  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [likedCourses, setLikedCourses] = useState([]);
  const [category, setCategory] = useState("All");


  async function fetchData() {
    try {
      const response = await fetch(apiUrl);
      const output = await response.json();
      setCourses(output.data);
      setLoading(false);

    } catch (error) {
      toast.error("Error occured data not found")
    }

  }



  
  useEffect(() => {
    fetchData();
  }, [])


  return (
    <div className='min-h-screen flex flex-col'>
      <div >
        <Navbar />
      </div>
      <div className='bg-[#4A4E69] flex-1'>
        <div >
          <Filter filterData={data} category={category} setCategory={setCategory} />
        </div>
        <div className='w-11/12 max-w-[1200px] mx-auto flex justify-center items-center min-h-[50vh]'>
          {loading ? (<Spinner />) : (<Cards courses={courses} likedCourses={likedCourses} setLikedCourses={setLikedCourses} category={category} />)}

        </div>
      </div>
    </div>
  )
}

export default App
