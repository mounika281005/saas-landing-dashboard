export default function EmptyState({
  message,
}: {
  message: string;
}) {
  return (
    <div className="py-10 text-center text-gray-400">
      <p>{message}</p>
    </div>
  );
}
