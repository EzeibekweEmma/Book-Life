import { useOutletContext } from "react-router-dom";

const Details = () => {
  const { bookId } = useOutletContext();

  const { title, subtitle } = bookId;

  return (
    <section className="mt-4">
      <div>
        <h3>
          <strong>Name:</strong> {title}
          <br />
          <strong>Subtitle:</strong> {subtitle}
        </h3>
      </div>
    </section>
  );
};
export default Details;
