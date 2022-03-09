import React from "react";
import Card from "../shared/Card";
import PropTypes from 'prop-types'

function FeedBackItem({ item, handleDelete }) {
  // const handleRemoveItem = (id) => {
  //   console.log('Id of item is =>', id);
  // }
  return (
    <>
      <Card reverse={true} >
        <div className="num-display">{item.rating} </div>
        <div onClick={() => handleDelete(item.id)} className="close">X</div>
        <div className="text-display"> {item.text} </div>
      </Card>
    </>
  );
}

FeedBackItem.prototype = {
  item: PropTypes.object.isRequired,
}


export default FeedBackItem;
