import { signIn, signOut, useSession } from "next-auth/react";
import { trpc } from "../utils/trpc";
export const AuthShowcase: React.FC = () => {
	const { data: sessionData, status } = useSession();

	const { data: secretMessage } = trpc.auth.getSecretMessage.useQuery(
		undefined, // no input
		{ enabled: sessionData?.user !== undefined },
	);

	return (

		<div className="flex flex-row items-center justify-center gap-4">
			{sessionData && <span>{sessionData.user?.name}</span>}
			<div className="avatar dropdown dropdown-bottom dropdown-end">
				<div tabIndex={0} className="w-12 rounded-full">
					{sessionData ? <img alt="" src={sessionData.user?.image}/>: <button
className="rounded-full">
						Sign in
					</button>}
				</div>
				<ul tabIndex={0} className="dropdown-content menu rounded-box">
					<li>
						<button
							className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
							onClick={sessionData ? () => signOut() : () => signIn() }
						>
							{sessionData ? "Sign out" : "Sign in"}
						</button>
					</li>
				</ul>
			</div>


		</div>
	);
};