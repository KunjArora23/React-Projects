import '../Css/Spinner.css'
function Spinner() {
    return (
        <div>
            <div className="Spinner flex flex-col items-center space-y-2 "></div>
            <div className='text-bg[#22223B] text-lg font-semibold'>
                Loading...
            </div>
        </div>

    )
}

export default Spinner;