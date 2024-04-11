export const AchievementList = ({
  achievements,
}: {
  achievements: string[] | string;
}) => {
  if (Array.isArray(achievements)) {
    return (
      <ul className="list-disc pl-4">
        {achievements.map((achievement, index) => (
          <li
            key={`${achievement.length}-achievement-${index}`}
            className="text-white text-md"
          >
            {achievement}
          </li>
        ))}
      </ul>
    );
  }

  return <p className="text-white text-justify text-md">{achievements}</p>;
};
