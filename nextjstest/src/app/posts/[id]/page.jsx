export default function Post({ params }) {
  const { id } = params;
  return <p>Esto es el POSTito page {id}</p>;
}
