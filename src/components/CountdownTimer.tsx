import Countdown from "react-countdown";
import useExpiration from "../hooks/useExpiration";

type RendererProps = {
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
};

const CountdownTimer = () => {
  const { data: expiration, isLoading: isLoadingExpiration } = useExpiration();

  const renderer = ({ completed, hours, minutes, seconds }: RendererProps) => {
    if (completed) {
      return (
        <div>
          <h2 className="animate-bounce text-center text-xl">
            Ticket sales have now closed
          </h2>
          <div className="flex space-x-6">
            <div className="flex-1">
              <div className="countdown animate-pulse">{hours}</div>
              <div className="countdown-label">Hours</div>
            </div>
            <div className="flex-1">
              <div className="countdown animate-pulse">{minutes}</div>
              <div className="countdown-label">Minutes</div>
            </div>
            <div className="flex-1">
              <div className="countdown animate-pulse">{seconds}</div>
              <div className="countdown-label">Seconds</div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div>
        <h3 className="mb-2 text-sm italic">Time Remaining</h3>
        <div className="flex space-x-6">
          <div className="flex-1">
            <div className="countdown">{hours}</div>
            <div className="countdown-label">Hours</div>
          </div>
          <div className="flex-1">
            <div className="countdown">{minutes}</div>
            <div className="countdown-label">Minutes</div>
          </div>
          <div className="flex-1">
            <div className="countdown">{seconds}</div>
            <div className="countdown-label">Seconds</div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      <Countdown date={new Date(expiration * 1000)} renderer={renderer} />
    </div>
  );
};

export default CountdownTimer;
