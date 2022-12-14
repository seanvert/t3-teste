import { AuthShowcase } from "./AuthShowcase";
import YTQueryBox from "./ytQueryBox";

export const Navbar: React.FC = () => {
    function teste () {
	}

    return (
        <div className="navbar rounded-full py-0 px-10 bg-base-100 text-white" >
					<div className="navbar-start">
						<button
							onClick={teste} >
							dr34m Radio
						</button>
					</div>

					<div className="navbar-center" >
						<YTQueryBox />
					</div>
					<div className="navbar-end">
						<AuthShowcase  />
					</div>
				</div>
    );
};