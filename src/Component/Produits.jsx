import Produit from "./Produit";

function Produits(props) {
  return (
    <div className="produits">
      {props.list.map((item) => (
        <Produit
          key={item.id}
          title={item.title}
          price={item.price}
          image={item.thumbnail}
          nbrstate={props.nbrstate}
        />
      ))}
    </div>
  );
}

export default Produits;