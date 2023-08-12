export default function Loading() {
  return (
    <div className=" h-[50vh] flex justify-center items-center">
      <div className="grid grid-cols-4 gap-4 text-4xl">
        <span className="loading loading-spinner text-primary"></span>
        <span className="loading loading-spinner text-secondary"></span>
        <span className="loading loading-spinner text-accent"></span>
        <span className="loading loading-spinner text-neutral"></span>
      </div>
    </div>

    /* <span className="loading loading-spinner text-info"></span>
      <span className="loading loading-spinner text-success"></span>
      <span className="loading loading-spinner text-warning"></span>
      <span className="loading loading-spinner text-error"></span> */
  );
}
