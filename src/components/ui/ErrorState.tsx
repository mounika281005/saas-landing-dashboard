export default function ErrorState({
  message,
}: {
  message: string;
}) {
  return (
    <div className="py-10 text-center text-red-500">
      <p>{message}</p>
    </div>
  );
}
