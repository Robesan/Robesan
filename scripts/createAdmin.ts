import { PrismaClient } from "@prisma/client"
import bcrypt from "bcryptjs"

const prisma = new PrismaClient()

async function main() {
  try {
    const email = "admin@example.com"
    const password = "YourSecurePassword123!"
    const hashed = await bcrypt.hash(password, 10)

    const admin = await prisma.adminUser.upsert({
      where: { email },
      update: { password: hashed },
      create: {
        email,
        password: hashed
      }
    })

    console.log("Admin user ready:", {
      id: admin.id,
      email: admin.email,
      createdAt: admin.createdAt
    })
    console.log("\nYou can now log in with:")
    console.log(`Email: ${email}`)
    console.log(`Password: ${password}`)
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error:", error.message)
    } else {
      console.error("Unknown error:", error)
    }
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

main()
