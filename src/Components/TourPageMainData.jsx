
import { CalendarTodayOutlined,
TimelineOutlined, PersonOutlined, StarBorderOutlined} from '@mui/icons-material'

import BookTourButton from './BookTourButton'


const TourPageMainData = function({tourDetail}){
  
  // const tourDetail = useSelector((state) => state.tourData.value.tourDetail);
  const objectLength = Object.keys(tourDetail).length;
  const tourDetailNextDate = objectLength && new Date(tourDetail.startDates[0]).toLocaleString('en-us', {month: 'long', year: 'numeric'})
  const paragraphs = objectLength && tourDetail.description.split('\n')

  

  const tourGuidesJsx = (guideType, guideName, index) => {
    return (
      <div className='overview-box__detail overview-box__detail--guides' key={index}>
        {/* <div className='guideImg-box'>
          <img src={guideImg} alt={guideName} className='guideImg'/>
        </div> */}
        <span className='guideType'>{guideType}</span>
        <span className='guideName'>{guideName}</span>
      </div>
    )
  }

  const overviewTextParagraphs = (paragraph, i) => {
    return (
      <p className="overview-box__detail overview-box__detail--description description__text" key={i}>{paragraph}</p>
    )
  }


  return (
    <section className='tourDetailOverview'>
        <div className='overview-box__group overview-box__group--facts'>
            <h2>Quick Facts</h2>
            <div className='overview-box__detail'>
              <CalendarTodayOutlined className='icon' />
              <span className='label'>Next date</span>
              <span className='value'>{objectLength && tourDetailNextDate}</span>
            </div>
            <div className='overview-box__detail'>
              <TimelineOutlined className='icon'/>
              <span className='label'>Difficulty</span>
              <span className='value'>{objectLength && tourDetail.difficulty}</span>
            </div>
            <div className='overview-box__detail'>
              <PersonOutlined className='icon'/>
              <span className='label'>Paricipants</span>
              <span className='value'>{objectLength && `${tourDetail.maxGroupSize} people`}</span>
            </div>
            <div className='overview-box__detail'>
              <StarBorderOutlined className='icon'/>
              <span className='label'>Rating</span>
              <span className='value'>{objectLength && `${tourDetail.ratingsAverage}/5`}</span>
            </div>
        </div>
        <div className='overview-box__group overview-box__group--guides'>
          <h2>Guides</h2>
          {
            objectLength && tourDetail.guides.map((guide, i) => tourGuidesJsx(guide.role, guide.name, i))
          }
        </div>
        <div className="overview-box__group overview-box__group--description description-box">
          <h2 className="description__heading">About the {tourDetail.name}</h2>
          {

            objectLength && paragraphs.map((paragraph, i) => overviewTextParagraphs(paragraph, i))
          }
          <BookTourButton tourId={tourDetail._id}/>
        </div>
    </section>
  )
}

export default TourPageMainData