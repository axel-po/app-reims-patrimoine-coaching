import { faker } from "@faker-js/faker";
import { user, courses, courseContents, userProgress } from "../../models";
import initDotEnv from "./env";

const USERS_COUNT = 50;
const COURSES_COUNT = 15;
const COURSE_CONTENTS_PER_COURSE = 8;
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
    await db.delete(courseContents);
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
    const courseTypes = [
      "Investissement immobilier",
      "Patrimoine financier",
      "Fiscalité",
      "Assurance vie",
      "Retraite",
      "Succession",
      "Défiscalisation",
      "SCPI",
      "Cryptomonnaies",
      "Bourse",
      "Épargne",
      "Crédit immobilier",
      "Gestion de patrimoine",
      "PEA",
      "Plan d'épargne retraite",
    ];

    for (let i = 0; i < COURSES_COUNT; i++) {
      const courseData = {
        id: faker.string.uuid(),
        title: `Formation ${
          courseTypes[i % courseTypes.length]
        } - ${faker.lorem.words(2)}`,
        description: faker.lorem.paragraphs(2, "\n\n"),
        createdAt: faker.date.past({ years: 1 }),
      };
      coursesData.push(courseData);
    }
    await db.insert(courses).values(coursesData);
    console.log(`✅ Created ${coursesData.length} courses`);

    // Seed course contents
    console.log("📖 Seeding course contents...");
    const allCourseContents = [];
    const contentTypes = ["video", "text", "pdf"];

    for (const course of coursesData) {
      for (let i = 0; i < COURSE_CONTENTS_PER_COURSE; i++) {
        const contentType = faker.helpers.arrayElement(contentTypes);
        const contentData = {
          id: faker.string.uuid(),
          courseId: course.id,
          title: `${i + 1}. ${faker.lorem.sentence({ min: 3, max: 6 })}`,
          type: contentType,
          contentUrl:
            contentType === "video"
              ? faker.internet.url() + "/video.mp4"
              : contentType === "pdf"
              ? faker.internet.url() + "/document.pdf"
              : null,
          textContent:
            contentType === "text"
              ? faker.lorem.paragraphs(
                  faker.number.int({ min: 3, max: 8 }),
                  "\n\n"
                )
              : null,
          position: i + 1,
          isFree: i < 2, // First 2 contents are free
          createdAt: faker.date.past({ years: 1 }),
        };
        allCourseContents.push(contentData);
      }
    }
    await db.insert(courseContents).values(allCourseContents);
    console.log(`✅ Created ${allCourseContents.length} course contents`);

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
        const courseContent = allCourseContents.filter(
          (c) => c.courseId === course.id
        );

        // User completes 30-90% of the course content
        const completionRate = faker.number.float({ min: 0.3, max: 0.9 });
        const completedCount = Math.floor(
          courseContent.length * completionRate
        );
        const completedContents = courseContent.slice(0, completedCount);

        for (const content of completedContents) {
          const progressData = {
            userId: activeUser.id,
            courseContentId: content.id,
            completed: true,
            completedAt: faker.date.between({
              from: content.createdAt,
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
- ${allCourseContents.length} course contents created
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
