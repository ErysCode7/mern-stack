import { ButtonComponent } from "@/components/button";
import { useCounterStore } from "@/store/counter";

const CounterButton = () => {
  const increaseCount = useCounterStore((state) => state.increaseCount);
  const decreaseCount = useCounterStore((state) => state.decreaseCount);
  const resetCount = useCounterStore((state) => state.resetCount);

  const ITEMS = [
    {
      id: 1,
      text: "Increase",
      event: increaseCount,
    },
    {
      id: 2,
      text: "Decrease",
      event: decreaseCount,
    },
    {
      id: 3,
      text: "Reset",
      event: resetCount,
    },
  ];

  return (
    <div className="flex items-center gap-5 mt-5">
      {ITEMS.map((item) => {
        const { id, text, event } = item;
        return (
          <ButtonComponent
            className="p-2 border w-28 h-10 bg-blue-500 rounded border-none outline-none active:scale-95"
            key={id}
            type="button"
            onClick={() => event()}
          >
            {text}
          </ButtonComponent>
        );
      })}
    </div>
  );
};

export default CounterButton;
