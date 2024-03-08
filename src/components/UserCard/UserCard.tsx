import { IUser } from "../../fetches/fetchSearch";
import "./style.css";

export function UserCard(props: IUser) {
  return (
    <div  key={props.id}>
      <div className="userCard">
        <img className="userPic" src={props.image} />
        <div className="userInfo">
          <div>{`${props.firstName} ${props.lastName}`}</div>
          <div>{props.address.city}</div>
        </div>
      </div>
    </div>
  );
}
