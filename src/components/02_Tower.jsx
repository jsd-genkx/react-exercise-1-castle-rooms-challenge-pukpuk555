import SecretRoom from "./09_SecretRoom";

const Tower = ({ message1, onReply }) => {
  return (
    <div>
      <h1>Tower</h1>
      <p>Message for JSD7: {message1}</p>
      <SecretRoom message1={message1} onReply={onReply} />
    </div>
  );
};

export default Tower;
