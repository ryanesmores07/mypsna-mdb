import { LinksDropdown, Logo, ModeToggle, NavLinks } from ".";
const Navbar = () => {
  return (
    <nav className="bg-muted py-4 sm:px-4">
      <div className="align-element flex justify-between items-center relative">
        <LinksDropdown />
        <Logo />
        <div className="flex gap-x-4 absolute sm:right-4">
          <NavLinks />
          <div className="flex justify-center items-center gap-x-4">
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
