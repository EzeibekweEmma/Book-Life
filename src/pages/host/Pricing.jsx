import { useOutletContext } from "react-router-dom";

const Pricing = () => {
  const { bookId } = useOutletContext();

  const { price } = bookId;

  return (
    <section className="mt-4">
      <strong>{price}</strong>
    </section>
  );
};
export default Pricing;
