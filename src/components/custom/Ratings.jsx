import { BsStarFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import PropTypes from 'prop-types';

const Rating = ({rating, onClick, style}) => {
  return (
    <div className="w-full flex justify-center items-center flex-row gap-1">
        {
            [...Array(5)].map((_, i)=> (
                <span key={i} onClick={()=> onClick(i)} style={style}  >
                    {
                        rating > i ? (
                            <BsStarFill className="text-xl" />
                        ) : (
                            <BsStar className="text-xl"/>
                        )
                    }
                </span>
            ))
        }
      
    </div>
  )
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  style: PropTypes.object.isRequired,
};

export default Rating
