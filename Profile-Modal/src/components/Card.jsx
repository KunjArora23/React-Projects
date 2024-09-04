/* eslint-disable react/prop-types */
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa"

const Card = (props) => {
    // Retrieve the review from props
    let review = props.review;
    return (
        <div>
            <div className='flex flex-col relative'>
                <div className="relative mx-auto md:absolute md:top-[-7rem] z-[10]">
                    <img src={review.image} className='aspect-square rounded-full object-cover w-[140px] h-[140px] z-40 sticky' /> {/* Reviewer's image */}
                    <div className='w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-6px] z-30 left-[10px]'></div>
                </div>
                <div className='text-center mt-7'>
                    <p className='font-bold text-lg md:text-2xl tracking-wider capitalize'>{review.name}</p> {/* Reviewer's name */}
                    <p className='text-violet-300 uppercase text-sm'>{review.job}</p> {/* Reviewer's job */}
                </div>
                <div className='text-violet-400 w-fit mx-auto mt-5'>
                    <FaQuoteLeft /> {/* Left quote icon */}
                </div>
                <div className='text-center text-slate-500 mt-4'>
                    {review.text} {/* Review text */}
                </div>
                <div className='text-violet-400 w-fit mx-auto mt-5'>
                    <FaQuoteRight /> {/* Right quote icon */}
                </div>
            </div>
        </div>
    )
}
export default Card
