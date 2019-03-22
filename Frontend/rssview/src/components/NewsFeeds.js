import React from 'react';
import { List, Icon } from 'antd';



const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

const NewsFeeds = (props) => {
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
	    footer={<div><b>ant design</b> footer part</div>}
	    renderItem={item => (
	      <List.Item
	        key={item.title}
	        actions={[<IconText  text={item.creator} />]}
	        extra={<img width={272} alt="logo" src={item.img} />}
	      >
	        <List.Item.Meta
	          title={<a href={item.link}>{item.title}</a>}
	          description={item.category}
	          pubdate={item.pubDate}
	        />
	        {item.description}
	      </List.Item>
	    )}
  	/>
	)
}

export default NewsFeeds;