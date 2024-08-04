import Image from 'next/image';
const Writing = () => {
    return (
        <div>
        <h1 className="writing">Writing</h1>
        <div>
          <div className="writing-box">
            <Image src="/images/writing-1.jpg" alt="" />
  
            <div className="writing-text">
              <h1>That which does not kill us makes us stronger</h1>
              <p>
                Bring to the table win-win survival strategies to ensure proactive
                domination. At the end of the day, going forward, a new normal
                that. Capitalize on low hanging fruit to identify a ballpark value
                activity to..
              </p>
            </div>
          </div>
          <div className="writing-box">
            
            <Image src="/images/writing-2.jpg" alt="" />
  
            <div className="writing-text">
              <h1>That which does not kill us makes us stronger</h1>
              <p>
                Bring to the table win-win survival strategies to ensure proactive
                domination. At the end of the day, going forward, a new normal
                that. Capitalize on low hanging fruit to identify a ballpark value
                activity to..
              </p>
            </div>
          </div>
          <div className="writing-box">
            <Image src="/images/writing-3.jpg" alt="" />
  
            <div className="writing-text">
              <h1>That which does not kill us makes us stronger</h1>
              <p>
                Bring to the table win-win survival strategies to ensure proactive
                domination. At the end of the day, going forward, a new normal
                that. Capitalize on low hanging fruit to identify a ballpark value
                activity to..
              </p>
            </div>
          </div>
          <button className="more-post">More Post</button>
        </div>
      </div>
    );
  };
  
  export default Writing;
  