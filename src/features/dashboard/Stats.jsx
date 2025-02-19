import PropTypes from "prop-types";
import Stat from "./Stat";
import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";
import { formatCurrency } from "../../utils/helpers";
function Stats({ bookings, confirmedStays, numDays, cabinCount }) {
  //1 number of bookings
  const numberBookings = bookings.length;

  //2 total sales
  const sales = bookings.reduce((acc, curr) => acc + curr.totalPrice, 0);

  //3 total checkins
  const checkins = confirmedStays.length;

  //4 occupancy rate num checked in nights/ all available nights (num days *num cabins)
  const occupation =
    confirmedStays.reduce((acc, curr) => acc + curr.numNights, 0) /
    (numDays * cabinCount);

  return (
    <>
      <Stat
        title="Bookings"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numberBookings}
      />
      <Stat
        title="Sales"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
      />
      <Stat
        title="Check ins"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={checkins}
      />
      <Stat
        title="Occupancy rate"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={Math.round(occupation * 100) + "%"}
      />
    </>
  );
}

export default Stats;

Stats.propTypes = {
  bookings: PropTypes.any,
  confirmedStays: PropTypes.any,
  numDays: PropTypes.any,
  cabinCount: PropTypes.any,
};

128086;
