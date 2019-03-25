import React from 'react';
import { List, Icon } from 'antd';



const IconText = ({ type, text, time }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text} {time}
  </span>
);

const TechFeeds = (props) => {
	return(		
	  <List
	    itemLayout="vertical"
	    size="large"
	    pagination={{
	      onChange: (page) => {
	      },
	      pageSize: 10,
	    }}
	    dataSource={props.data}
	    renderItem={item => (
	      <List.Item
	        key={item.title}
	        actions={[<IconText  text={item.creator} time={item.pubDate} />]}
	        extra={<img width={272} alt="logo" src={item.img} />}
	      >
	        <List.Item.Meta
	          title={<a href={item.link}>{item.title} </a>}
	          description={item.category}
	        />
	        {item.description}
	      </List.Item>
	    )}
  	/>
	)
}

export default TechFeeds;