import "./Post.css";

export const Post = (props) => {
  return (
    <div className="post col">
      <div className="header row">
        <div className="avatar">
          <img src={props.author.photo} alt="avatar photo"></img>
        </div>
        <div className="name col">{props.author.name}</div>
        <div className="nickname col">{props.author.nickname}</div>
        <div className="date col">{props.date}</div>
      </div>
      <div className="content row">{props.content}</div>
      <div className="main-img row">
        <img src={props.image} alt="Anakin photo"></img>
      </div>
    </div>
  );
};
