import Container from "./templates/Container";
import Subscription from "./components/Subscription";

const App = () => {
  let subscriptions = [
    {
      id: "1",
      date: new Date("2021", "03", "23"),
      title: "Monthly Subscription",
      amount: "3372",
    },
    {
      id: "2",
      date: new Date("2020", "06", "28"),
      title: "Annual Subscription",
      amount: "3436",
    },
    {
      id: "3",
      date: new Date("2021", "09", "05"),
      title: "Quarterly Subscription",
      amount: "3983",
    },
  ];
  return (
    <Container>
      <Subscription
        date={subscriptions[0].date}
        title={subscriptions[0].title}
        amount={subscriptions[0].amount}
      />
      <Subscription
        date={subscriptions[1].date}
        title={subscriptions[1].title}
        amount={subscriptions[1].amount}
      />
      <Subscription
        date={subscriptions[2].date}
        title={subscriptions[2].title}
        amount={subscriptions[2].amount}
      />
    </Container>
  );
};

export default App;
