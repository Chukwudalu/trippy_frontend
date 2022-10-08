import Skeleton from "react-loading-skeleton"

function SkeletonCard({ cards }) {
  return (
    Array(cards).fill(0).map((_, i) => (
        <div className='skeleton-card' key={i}>
            <div className="skeleton-card__imageContainer">
                <Skeleton style={{height: 330}}/>
            </div>
            
        </div>
    ))
  )
}

export default SkeletonCard