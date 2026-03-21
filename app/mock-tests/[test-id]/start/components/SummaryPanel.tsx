interface Props {
  open: boolean;
  onClose: () => void;
  onSubmit: () => void;
  total: number;
  answered: number;
  notAnswered: number;
  marked: number;
  answeredAndMarked: number;
}

export default function SubmitModal({
  open,
  onClose,
  onSubmit,
  total,
  answered,
  notAnswered,
  marked,
  answeredAndMarked,
}: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white flex flex-col gap-8 rounded-xl p-8 w-2xl">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Your Attempt Summary
        </h2>

        <div className="space-y-2 text-sm mb-6">
          <div className="text-md">Total Number of Questions: <b>{total}</b></div>
          <div className="text-md flex gap-2 items-center">Answered: <div className="w-4 animate-pulse h-4 rounded-full bg-emerald-500"></div><b>{answered}</b></div>
          <div className="text-md flex gap-2 items-center">Not Answered: <div className="w-4 animate-pulse h-4 rounded-full bg-red-500"></div><b>{notAnswered}</b></div>
          <div className="text-md flex gap-2 items-center">Marked: <div className="w-4 animate-pulse h-4 rounded-full bg-amber-500"></div><b>{marked}</b></div>
          <div className="text-md flex gap-2 items-center">
            Answered & Marked: <div className="w-4 animate-pulse h-4 rounded-full bg-blue-500"></div><b>{answeredAndMarked}</b>
          </div>
        </div>

        <div className="flex justify-between gap-3">
          <button
            onClick={onClose}
            className="w-full px-4 py-2 bg-amber-500 rounded-lg"
          >
            Continue Test
          </button>

          <button
            onClick={onSubmit}
            className="w-full px-4 py-2 bg-green-500 rounded-lg"
          >
            Submit Test
          </button>
        </div>
      </div>
    </div>
  );
}