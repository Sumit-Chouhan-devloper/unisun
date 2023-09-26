import React from 'react'
import AllPagesCards from '../common/AllPagesCards';


const SecurityCards = (props) => {
  return (
    <div>
          <div
        className={`py-sm-5 pt-5 pt-sm-0 common_read_more_card mb-4 mb-sm-0 ${props.manageSpacing}`}
      >
        <div className="container custom_container">
          <div className="row">
            {props.mapData.map((obj, index) => {
              return (
                <AllPagesCards
                  obj={obj}
                  index={index}
                  spacing="pt-4 mt-1"
                  window_tint_cards_height="common_cards_height"
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SecurityCards