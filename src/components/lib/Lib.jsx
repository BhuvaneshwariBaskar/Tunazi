import React from 'react';
import "./Lib.css"

const Lib=({music})=>{
  return (
    <section className='Libplaylist'>
      <div className="container-playlist">
        <div className="libcard">
          <div className="playlistimage">
            <img src="https://i.pinimg.com/originals/a4/7b/a5/a47ba59b4a353e0928ef0551ca44f980.jpg" alt="" />
          </div>
          <div className = "playlistcontent">
        <h3>This is content</h3>
      </div>
        </div>
      </div>
    </section>
  );
}
export default Lib;