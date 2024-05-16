const Navbar = ({ message }) => {
  console.log(message.image);
  return (
    <div>
      <p>Hi {message.name}</p>
      <img src={message.image} alt="" width={40} />
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Service</li>
      </ul>
    </div>
  );
};

export default Navbar;
