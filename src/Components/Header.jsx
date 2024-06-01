import { BiMenuAltLeft } from "react-icons/bi";
import PropTypes from "prop-types";

export default function Header({ setSidebarToggle, sidebarToggle }) {
  return (
    <header className="w-[98%] my-4 mx-1 md:m-4  px-4 py-4 rounded-2xl bg-[var(--color-primary)]">
      <BiMenuAltLeft
        className="text-3xl mx-3 hover:bg-slate-500 rounded-xl md:w-[5%]"
        onClick={() => setSidebarToggle(!sidebarToggle)}
      />
    </header>
  );
}

Header.propTypes = {
  setSidebarToggle: PropTypes.func.isRequired,
  sidebarToggle: PropTypes.bool.isRequired,
};
