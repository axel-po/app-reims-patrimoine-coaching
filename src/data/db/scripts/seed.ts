import { faker } from "@faker-js/faker";
import { user, courses, modules, lessons, userProgress } from "../../models";
import initDotEnv from "./env";

const USERS_COUNT = 50;
const COURSES_COUNT = 8;
const MODULES_PER_COURSE = 6;
const LESSONS_PER_MODULE = 4;
const USER_PROGRESS_PERCENTAGE = 0.3; // 30% of users will have progress

async function seedDatabase() {
  console.log("🌱 Starting database seeding...");

  // Initialize environment variables
  await initDotEnv();

  // Import db after env initialization
  const { db } = await import("../client");

  try {
    // Clear existing data
    console.log("🧹 Clearing existing data...");
    await db.delete(userProgress);
    await db.delete(lessons);
    await db.delete(modules);
    await db.delete(courses);
    await db.delete(user);

    // Seed users
    console.log("👥 Seeding users...");
    const users = [];
    for (let i = 0; i < USERS_COUNT; i++) {
      const userData = {
        id: faker.string.uuid(),
        name: faker.person.fullName(),
        email: faker.internet.email().toLowerCase(),
        emailVerified: faker.datatype.boolean({ probability: 0.8 }),
        image: faker.image.avatar(),
        createdAt: faker.date.past({ years: 2 }),
        updatedAt: new Date(),
      };
      users.push(userData);
    }
    await db.insert(user).values(users);
    console.log(`✅ Created ${users.length} users`);

    // Seed courses
    console.log("📚 Seeding courses...");
    const coursesData = [];
    const courseTopics = [
      "Investissement Immobilier",
      "Patrimoine Financier",
      "Fiscalité et Optimisation",
      "Assurance Vie",
      "Retraite et Prévoyance",
      "SCPI et Crowdfunding",
      "Cryptomonnaies",
      "Bourse et Actions",
    ];

    for (let i = 0; i < COURSES_COUNT; i++) {
      const courseData = {
        id: faker.string.uuid(),
        title: `Formation ${courseTopics[i % courseTopics.length]}`,
        description: faker.lorem.paragraphs(3, "\n\n"),
        createdAt: faker.date.past({ years: 1 }),
      };
      coursesData.push(courseData);
    }
    await db.insert(courses).values(coursesData);
    console.log(`✅ Created ${coursesData.length} courses`);

    // Seed modules
    console.log("📦 Seeding modules...");
    const allModules = [];
    const moduleTemplates = [
      { title: "Les Fondamentaux", desc: "Bases essentielles à connaître" },
      {
        title: "Épargne et Liquidités",
        desc: "Gérer sa trésorerie efficacement",
      },
      {
        title: "Investissements",
        desc: "Stratégies d'investissement avancées",
      },
      { title: "Fiscalité", desc: "Optimisation fiscale légale" },
      { title: "Gestion des Risques", desc: "Protéger son patrimoine" },
      { title: "Transmission", desc: "Préparer la succession" },
    ];

    for (const course of coursesData) {
      for (let i = 0; i < MODULES_PER_COURSE; i++) {
        const template = moduleTemplates[i % moduleTemplates.length];
        const moduleData = {
          id: faker.string.uuid(),
          courseId: course.id,
          title: `${String(i + 1).padStart(2, "0")}: ${template.title}`,
          description: template.desc,
          position: i + 1,
          duration: `${faker.number.int({ min: 45, max: 150 })}min`,
          createdAt: faker.date.past({ years: 1 }),
        };
        allModules.push(moduleData);
      }
    }
    await db.insert(modules).values(allModules);
    console.log(`✅ Created ${allModules.length} modules`);

    // Seed lessons
    console.log("📖 Seeding lessons...");
    const allLessons = [];
    const lessonTypes = ["video", "text", "document"];
    const lessonTitles = [
      "Introduction et concepts clés",
      "Analyse des opportunités",
      "Stratégies pratiques",
      "Cas concrets et exemples",
    ];

    for (const moduleItem of allModules) {
      for (let i = 0; i < LESSONS_PER_MODULE; i++) {
        const lessonType = faker.helpers.arrayElement(lessonTypes);
        const lessonData = {
          id: faker.string.uuid(),
          moduleId: moduleItem.id,
          title: lessonTitles[i % lessonTitles.length],
          type: lessonType,
          videoUrl:
            lessonType === "video"
              ? `https://example.com/videos/${faker.string.uuid()}.mp4`
              : null,
          textContent:
            lessonType === "text"
              ? faker.lorem.paragraphs(
                  faker.number.int({ min: 5, max: 12 }),
                  "\n\n"
                )
              : null,
          documentUrl:
            lessonType === "document"
              ? `https://example.com/docs/${faker.string.uuid()}.pdf`
              : null,
          duration: `${faker.number.int({ min: 8, max: 25 })}min`,
          position: i + 1,
          isFree: i < 2, // First 2 lessons are free
          createdAt: faker.date.past({ years: 1 }),
        };
        allLessons.push(lessonData);
      }
    }
    await db.insert(lessons).values(allLessons);
    console.log(`✅ Created ${allLessons.length} lessons`);

    // Seed user progress
    console.log("📊 Seeding user progress...");
    const userProgressData = [];
    const activeUsers = users.slice(
      0,
      Math.floor(users.length * USER_PROGRESS_PERCENTAGE)
    );

    for (const activeUser of activeUsers) {
      // Each active user progresses through 1-3 random courses
      const userCourses = faker.helpers.arrayElements(
        coursesData,
        faker.number.int({ min: 1, max: 3 })
      );

      for (const course of userCourses) {
        // Get all lessons for this course
        const courseModules = allModules.filter(
          (m) => m.courseId === course.id
        );
        const courseLessons = allLessons.filter((l) =>
          courseModules.some((m) => m.id === l.moduleId)
        );

        // User completes 30-90% of the course lessons
        const completionRate = faker.number.float({ min: 0.3, max: 0.9 });
        const completedCount = Math.floor(
          courseLessons.length * completionRate
        );
        const completedLessons = courseLessons.slice(0, completedCount);

        for (const lesson of completedLessons) {
          const progressData = {
            userId: activeUser.id,
            lessonId: lesson.id,
            completed: true,
            completedAt: faker.date.between({
              from: lesson.createdAt,
              to: new Date(),
            }),
          };
          userProgressData.push(progressData);
        }
      }
    }

    if (userProgressData.length > 0) {
      await db.insert(userProgress).values(userProgressData);
      console.log(
        `✅ Created ${userProgressData.length} user progress records`
      );
    }

    console.log("🎉 Database seeding completed successfully!");
    console.log(`
📊 Summary:
- ${users.length} users created
- ${coursesData.length} courses created  
- ${allModules.length} modules created
- ${allLessons.length} lessons created
- ${userProgressData.length} user progress records created
    `);
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    throw error;
  }
}

// Run the seeding if this file is executed directly
if (require.main === module) {
  seedDatabase()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
}

export { seedDatabase };
