/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { ToastContainer, toast } from 'react-toastify'

function Card(props) {
    const course = props.course;
    const likedCourses = props.likedCourses;
    const setLikedCourses = props.setLikedCourses;


    function likeHandler() {
        if (likedCourses.includes(course.id)) {
            console.log(likedCourses)
            const updatedCourses = likedCourses.filter((cid) => (cid !== course.id))
            setLikedCourses(updatedCourses)
            toast.warning("Liked removed succesfully")
        }
        else {
            if (likedCourses.length === 0) {
                setLikedCourses([course.id])
            }
            else {
                setLikedCourses([...likedCourses, course.id])
            }
            toast.success("Liked successfully")
            // console.log(likedCourses)
        }
    }

    return (
        <div className="w-[300px] bg-[#22223B] bg-opacity-90 rounded-md overflow-hidden">
            <div className="relative">
                <img src={course.image.url} />
                <div>
                    <button className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 -bottom-3 shadow-xl grid place-items-center" onClick={likeHandler}>
                        {
                            likedCourses.includes(course.id) ? (<FcLike fontSize="1.75rem" />) : (<FcLikePlaceholder fontSize="1.75rem" />)
                        }

                    </button>
                </div>
            </div>

            <div className="p-4">
                <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
                <p className="mt-2 text-white">
                    {course.description.length > 100 ? course.description.substr(0, 100) + '...' : (course.description)}
                </p>
            </div>
        </div>
    )

}

export default Card;