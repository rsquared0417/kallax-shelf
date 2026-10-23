interface CardLayoutProps {
  id?: number;
  imageUrl?: string;
  name: string;
  colorway: string | null;
  fragranceFamily: string | null;
}

export function CardLayout(props: CardLayoutProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4" key={props.id}>
      <img
        src={props.imageUrl ?? undefined}
        alt={props.name}
        className="w-full h-auto rounded-md"
      />
      <h2>{props.name}</h2>
      <p>{props.colorway == "" ? props.fragranceFamily : props.colorway}</p>
    </div>
  );
}
