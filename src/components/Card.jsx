import { Link } from "react-router-dom";

const Card = ({
  title,
  description,
  link,
  linkText,
  bg = "bg-blue-100",
  linkClassName = "inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700", // Default className
}) => {
  return (
    <div className={`${bg} p-6 rounded-lg shadow-md`}>
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="mt-2 mb-4"> {description} </p>
      <Link to={link} className={linkClassName}>
        {linkText}
      </Link>
    </div>
  );
};

export default Card;
