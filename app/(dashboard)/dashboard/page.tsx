import { UserButton, auth, currentUser } from "@clerk/nextjs";

const DashboardPage = async () => {
	const user = await currentUser();
	const { userId } = auth();

	return (
		<div>
			<UserButton afterSignOutUrl="/" />
			<h1>User: {user?.username}</h1>
			<h1>UserId: {userId}</h1>
		</div>
	);
};

export default DashboardPage;
