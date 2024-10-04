import { SKILL_BULLETS } from "./js/config.js";

const skillsLevel = [
  ...document.querySelectorAll(".skills__container--box--level"),
];

const createSkillBullets = function () {
  skillsLevel.forEach((skill) => {
    for (let i = 0; i < SKILL_BULLETS; i++) {
      const skillBullet = document.createElement("span");
      skillBullet.classList.add("skills__container--box--level--bullet");
      skill.append(skillBullet);
    }
  });
};

createSkillBullets();
