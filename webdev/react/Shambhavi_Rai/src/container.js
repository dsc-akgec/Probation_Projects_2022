import { useState, useEffect } from "react";
import axios from "axios";
// export default Apps
export default function Apps() {
  const [myData, setMyData] = useState();
  useEffect(() => {
    axios
      .get("https://newsapi.org/v2/everything?q=tesla&from=2022-10-03&sortBy=publishedAt&apiKey=63ac290de23f4a1aaa63dbc3c0779f00")
      .then((res) => setMyData(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(myData && myData);

  return (
    // <div>sfd</div>
    myData.article.map((post) => {
         const{id,myData,body}=post;
         return (<div className='card' key={id}>
             <h2>{myData}</h2>
             <p>{body}</p>
         </div>
         )
      },[])
  );
}
  //  export default Apps
  
