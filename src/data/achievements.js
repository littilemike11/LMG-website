export const getAchievements = () => {
  return JSON.parse(localStorage.getItem("achievements"));
};
export function createAchievements() {
  if (localStorage.achievements) {
    console.log("achievements exist");
    console.log(JSON.parse(localStorage.getItem("achievements")));
    return;
  }
  localStorage.setItem("achievements", JSON.stringify(achievements));
  let storedAchievements = JSON.parse(localStorage.achievements);
  console.log(storedAchievements);
}
export function unlockAchievement(achievementID) {
  if (!localStorage.achievements) return;
  let storedAchievements = JSON.parse(localStorage.achievements);
  let achievement = storedAchievements.find(
    (achievement) => achievement.id == achievementID
  );
  if (achievement) {
    achievement.isUnlocked = true;
    localStorage.setItem("achievements", JSON.stringify(storedAchievements));
    //unlock theme
    if (achievement.rewardType == "theme") {
      let unlockedThemes = JSON.parse(localStorage.getItem("unlockedThemes"));
      // Prevent duplicate themes
      if (!unlockedThemes.includes(achievement.reward.toLowerCase())) {
        unlockedThemes.push(achievement.reward.toLowerCase());
        localStorage.setItem("unlockedThemes", JSON.stringify(unlockedThemes));
      }
    }
  }
  return achievement;
}
// for testing
export function lockAchievement(achievementID) {
  if (!localStorage.achievements) return;
  let storedAchievements = JSON.parse(localStorage.achievements);
  let achievement = storedAchievements.find(
    (achievement) => achievement.id == achievementID
  );
  if (achievement) achievement.isUnlocked = false;
  localStorage.setItem("achievements", JSON.stringify(storedAchievements));
}
export function isUnlocked(achievementID) {
  let storedAchievements = JSON.parse(localStorage.achievements);
  let achievement = storedAchievements.find(
    (achievement) => achievement.id == achievementID
  );
  return achievement.isUnlocked;
}

export function findAchievement(achievementID) {
  let storedAchievements = JSON.parse(localStorage.achievements);
  return storedAchievements.find(
    (achievement) => achievement.id == achievementID
  );
}
export function getGameAchievements(gameName) {
  let storedAchievements = JSON.parse(localStorage.achievements);
  return storedAchievements.filter(
    (achievement) => achievement.game == gameName
  );
}
export function getUnlockedAchievements() {
  let storedAchievements = JSON.parse(localStorage.achievements);
  return storedAchievements.filter((achievement) => achievement.isUnlocked);
}
export const achievements = [
  {
    id: 1,
    game: "Where's 1",
    title: "1 and done",
    description: "Play a round of Where's 1",
    isUnlocked: false,
    rewardType: "theme",
    reward: "Retro",
  },
  // marathon seeker
  // fifty shades of 1
  //digit detective
  // a numbers game
  {
    id: 2,
    game: "Where's 1",
    title: "Finding Nemo... I Mean 1",
    description: "Make it to round 50 in Where's 1",
    isUnlocked: false,
    rewardType: "theme",
    reward: "Bumblebee",
  },
  {
    id: 3,
    game: "Do You Tube?",
    title: "First Stream",
    description: "Play a round of Do You Tube?",
    isUnlocked: false,
    rewardType: "theme",
    reward: "Garden",
  },
  // content creator
  // thumbnail titan
  {
    id: 4,
    game: "Do You Tube?",
    title: "Algorithm Master",
    description: "Get a perfect score in Do You Tube in any category",
    isUnlocked: false,
    rewardType: "theme",
    reward: "CMYK",
  },
  {
    id: 5,
    game: "Nerd Bowl",
    title: "Brainiac Rookie",
    description: "Finish a Nerd Bowl quiz",
    isUnlocked: false,
    rewardType: "theme",
    reward: "Corporate",
  },
  // save Go Outside award for 100% nerd bowl (perfecr score all categories)
  {
    id: 6,
    game: "Nerd Bowl",
    title: "Big Brain Energy",
    description: "Get a perfect score in any Nerd Bowl quiz",
    isUnlocked: false,
    rewardType: "theme",
    reward: "Cupcake",
  },
  {
    id: 7,
    game: "Chain Game",
    title: "Link Starter",
    description: "Finish a round of Chain Game",
    isUnlocked: false,
    rewardType: "theme",
    reward: "Dracula",
  },
  {
    id: 8,
    game: "Chain Game",
    title: "No Help Needed",
    description: "Complete a round of Chain Game without using hints",
    isUnlocked: false,
    rewardType: "theme",
    reward: "Emerald",
  },
  // no second guesses
  {
    id: 9,
    game: "Chain Game",
    title: "Flawless Chain",
    description:
      "Complete a round of Chain Game without using hints and an incorrect guess",
    isUnlocked: false,
    rewardType: "theme",
    reward: "Fantasy",
  },
];
