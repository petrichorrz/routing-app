export default function ProductDetail({
  params,
}: {
  params: { reviewId: string };
}) {
  return <h1>Review about product {params.reviewId}</h1>;
}