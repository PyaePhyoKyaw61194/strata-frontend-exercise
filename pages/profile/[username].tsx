import { useAtom } from "jotai";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import React, { FC, Suspense, useState } from "react"
import { useQuery } from "react-query";
import { usersLikeAtom } from "../../atoms/usersLikeAtom";
import { ErrorComp, LinkButton, LoadingComp } from "../../components/base";
import { getProfile } from "../../helpers/pages/profile";
import { TProfileValidation } from "../../validations/profile.validator";
const ProfileCard = React.lazy(() => import('../../components/pages/profile/Card'));

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

  const [profile, setProfile] = useState<TProfileValidation>();
  const [likesAtom, setLikesAtom] = useAtom(usersLikeAtom)

  const { isLoading, error } = useQuery<TProfileValidation, Error>({
    queryKey: 'getLeaderBoard',
    queryFn: async () => {
      const profile = await getProfile(username)
      let userIndex = likesAtom.findIndex(person => person.username === username);

      // adding to atom data if this is first time
      if (userIndex === -1) {
        /*     console.log(username + ' is added') */
        const like: userLike = {
          username,
          isLiked: false
        }
        setLikesAtom((preValue) => {
          return [...preValue, like]
        })
        return profile
      }
      else {
        // binding with atom data
        const stateData: TProfileValidation = { ...profile, isLike: likesAtom[userIndex].isLiked }
        return stateData
      }

    },
    onSuccess: (data) => {
      setProfile(data)
    },
  })

  const onLikeButtonClicked = () => {
    if (profile) {
      // find the object with the specified name
      const userIndex = likesAtom.findIndex(person => person.username === username);

      if (userIndex !== -1) {
        /*   console.log(`updating ${username}`) */
        // create a new User object with updated like property
        const updatedLike: userLike = { ...likesAtom[userIndex], isLiked: !likesAtom[userIndex].isLiked };

        // create a new array with the updated likes object
        const updatedLikes = [...likesAtom];
        updatedLikes[userIndex] = updatedLike;

        // set the updated array as the new state
        setLikesAtom(updatedLikes)
        /* console.log(likesAtom) */
        // Set current page state
        const updatedProfile: TProfileValidation = { ...profile, isLike: !profile.isLike }
        setProfile(updatedProfile)
      }
    }
  }

  if (isLoading) return <LoadingComp />
  if (error) return <ErrorComp message={error.message} />

  return (
    <Suspense fallback={<LoadingComp />}>
      <div className="w-full px-4 py-20 flex flex-col items-center justify-center ">
        {profile && <ProfileCard {...profile} onLikeButtonClicked={onLikeButtonClicked} />}
        <LinkButton url="/leaderboard" name="Back" />
      </div>
    </Suspense>
  )

}


export default User