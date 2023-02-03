import { useEffect, useState } from "react";
import {Link, Outlet, useParams} from "react-router-dom";
import Modal from "../UI/Modal";

const NotFound = (props) => {
  // const history = useParams();
  const [isVisible, setIsVisible] = useState(false);

  //
  // useEffect(() => {
  //   setTimeout(() => {
  //     // history.push();
  //      <Outlet />
  //   }, 12000);
  //   setTimeout(() => {
  //       setIsVisible(true)
  //     }, 5000);
  // },[clearTimeout()]);

  return (
    <div className="from_big_to_small">
      <p>
        Эй, гражданина! <br />
        <br /> Ты туда не ходи,
        <br /> ты сюда ходи.
        <br />
        <br /> А то снег в башка <br />
        попадёт. Совсем мёртвый будешь!
        <br />
        <br />— Джентельмены удачи
        <br/>{isVisible && <img src="exploding-head.png" alt="snow on head"/>}
      </p>
      <p>---404---</p>
      <Link to="/">На Головну</Link>
    </div>
  );
};

export default NotFound;
