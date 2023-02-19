import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { FC } from "react"
import { useQuery } from "react-query";
import { ErrorComp, LinkButton, LoadingComp } from "../../components/base";
import { ProfileCard } from "../../components/pages/profile/Card";
import zodErrorFormatter from "../../utils/zodErrorFormatter";
import { profileSchema, TProfileValidation } from "../../validations/profile.validator";


interface Props {
  username: string;
}

interface Params {
  username: string;
  [key: string]: string | string[] | undefined;
}

export const getServerSideProps: GetServerSideProps<Props, Params> = async (context: GetServerSidePropsContext<Params>) => {
  const { username } = context.params as Params;
  return { props: { username } };
};

const User: FC<Props> = ({ username }) => {

  const { isLoading, error, data: profile } = useQuery<TProfileValidation, Error>({
    queryKey: 'getLeaderBoard',
    queryFn: async () => {

      const res = (await fetch(`/api/profile/${username}`));

      if (res.status !== 200) {
        throw new Error(`Profile not found. ${res.status}`)
      }

      const data = await res.json()
      const profileValidation = await profileSchema.safeParseAsync(data)

      if (profileValidation.success == false) {
        const errRes = zodErrorFormatter(profileValidation.error)
        throw new Error(errRes)
      }

      return profileValidation.data

    }
  })

  if (isLoading) return <LoadingComp />
  if (error) return <ErrorComp message={error.message} />

  return (
    <div className="w-full px-4 py-20 flex flex-col items-center justify-center ">
      {profile && <ProfileCard {...profile} />}
      <LinkButton url="/leaderboard" name="Back" />
    </div>
  )

}


export default User