import { LoremIpsum } from "lorem-ipsum";
import { NextApiRequest, NextApiResponse } from "next";
var randomProfile = require("random-profile-generator");
import fs from "fs";
import path from "path";
const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProfileData | { message: string }>
) {
  const username = req.query.id as string;
  const { age, twitter, email, birthday } = randomProfile.profile();
  const bio = lorem.generateParagraphs(1);

  const imgPaths = fs.readdirSync(path.join(process.cwd(), "public", "users"));

  const users = imgPaths.map((imgPath) => {
    return {
      // trim extensions from filenames
      username: imgPath.replace(/\.[^/.]+$/, ""),
    };
  });

  if (users.findIndex(user => user.username === username) === -1) {
    res.status(400).json({ message: "User not Found" });
  }
  const profileImage = `/users/${username}.png`;
  const profileData: ProfileData = {
    username,
    bio,
    age,
    twitter,
    email,
    birthday,
    profileImage
  };

  res.status(200).json(profileData);
}
