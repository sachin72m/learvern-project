import "./Subscription.css";
import Container from "../templates/Container";
import SubscriptionDate from "./SubscriptionDate";
const Subscription = (props) => {
  return (
    <Container className="subscription">
      <SubscriptionDate date={props.date} />
      <h2 className="subscription_title">{props.title}</h2>
      <div className="subscription_price"> {props.amount} </div>
    </Container>
  );
};
export default Subscription;
