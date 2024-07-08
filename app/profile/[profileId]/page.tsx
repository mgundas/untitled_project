export default function ProfileDetails({
  params,
}: {
  params: { profileId: string };
}) {
  return <h1>profile {params.profileId}</h1>;
}
