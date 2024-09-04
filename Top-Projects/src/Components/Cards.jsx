/* eslint-disable react/prop-types */

import Card from './Card'

function Cards(props) {
    let courses = props.courses;
    let category = props.category;
    let likedCourses = props.likedCourses
    let setLikedCourses = props.setLikedCourses
    function fetchCourses() {
        if (category === "All") {
            let coursesData = [];

            Object.values(courses).forEach(array => {
                array.forEach(course => {
                    coursesData.push(course);
                })      
                    
            })
            // returning all courses data 
            return coursesData;

            
        }
        else {
            // returning specific category data
            return courses[category];
        }
    }


    return (
        <div className='flex flex-wrap justify-center gap-4 mb-4'>
            {fetchCourses().map((course) => {
                return <Card key={course.id}
                    course={course}
                    likedCourses={likedCourses}
                    setLikedCourses={setLikedCourses} />
            })}
        </div>
    )



}

export default Cards;